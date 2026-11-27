// 曲名の読みを自動で推測。手動で設定した読みは優先されます。
const automaticTitleReadings = new Map();
function loadReadingLibrary(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
async function prepareAutomaticReadings() {
  let tokenizer = null, english = null;
  const japanese = loadReadingLibrary('https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/build/kuromoji.js')
    .then(() => new Promise((resolve, reject) => kuromoji.builder({dicPath:'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/'}).build((err, result) => err ? reject(err) : resolve(result))))
    .then(value => { tokenizer = value; }).catch(() => {});
  const englishSetup = Promise.all([
    loadReadingLibrary('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.min.js'),
    loadReadingLibrary('https://cdn.jsdelivr.net/gh/Yakkyoku-oj/transkana.js@main/js/transkana.js')
  ]).then(async () => {
    class SongTransKana extends TransKana {
      async _initializeSqlJs() {
        const [SQL, response] = await Promise.all([
          initSqlJs({locateFile:file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`}),
          fetch('https://yakkyoku-oj.github.io/transkana.js/dict/kanayomi.db')
        ]);
        if (!response.ok) throw new Error('Dictionary unavailable');
        return new SQL.Database(new Uint8Array(await response.arrayBuffer()));
      }
      async init() { try { await super.init(); } catch (_) { this.failed = true; } }
    }
    const candidate = new SongTransKana();
    await new Promise(resolve => {
      let count = 0;
      const check = () => candidate.ready || candidate.failed || count++ > 300 ? resolve() : setTimeout(check, 100);
      check();
    });
    if (candidate.ready) english = candidate;
  }).catch(() => {});
  await Promise.all([japanese, englishSetup]);
  for (const song of songs) {
    let title = song.title;
    if (english) title = title.replace(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g, part => english.exec(part, {compact:true}));
    if (tokenizer) title = tokenizer.tokenize(title).map(token => token.reading || token.surface_form).join('');
    automaticTitleReadings.set(song.title, hira(title));
  }
  renderSpecials();
  render();
}
prepareAutomaticReadings();
