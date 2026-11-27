// 手動の読みを優先し、自動推測は別の処理で行います。
const automaticTitleReadings = new Map();
function readingWorker() {
  self.onmessage = async event => {
    let tokenizer = null, english = null;
    try {
      importScripts('https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/build/kuromoji.js');
      tokenizer = await new Promise((resolve, reject) => kuromoji.builder({dicPath:'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/'}).build((err, result) => err ? reject(err) : resolve(result)));
    } catch (_) {}
    try {
      importScripts('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.min.js','https://cdn.jsdelivr.net/gh/Yakkyoku-oj/transkana.js@main/js/transkana.js');
      class SongTransKana extends TransKana {
        async _initializeSqlJs() {
          const [SQL,response] = await Promise.all([
            initSqlJs({locateFile:file => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/' + file}),
            fetch('https://yakkyoku-oj.github.io/transkana.js/dict/kanayomi.db')
          ]);
          if (!response.ok) throw new Error('dictionary unavailable');
          return new SQL.Database(new Uint8Array(await response.arrayBuffer()));
        }
        async init() { try { await super.init(); } catch (_) { this.failed = true; } }
      }
      const candidate = new SongTransKana();
      await new Promise(resolve => {
        let attempts=0;
        const check=()=> candidate.ready || candidate.failed || attempts++ > 600 ? resolve() : setTimeout(check,100);
        check();
      });
      if (candidate.ready) english=candidate;
    } catch (_) {}
    const out=[];
    for (const original of event.data) {
      let value=original;
      if (english) value=value.replace(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g, part => english.exec(part,{compact:true}));
      if (tokenizer) value=tokenizer.tokenize(value).map(token=>token.reading||token.surface_form).join('');
      out.push([original,value]);
    }
    self.postMessage(out);
  };
}
try {
  const url=URL.createObjectURL(new Blob(['('+readingWorker.toString()+')()'],{type:'text/javascript'}));
  const worker=new Worker(url);
  URL.revokeObjectURL(url);
  worker.onmessage=event=>{
    for (const [title,value] of event.data) automaticTitleReadings.set(title,hira(value));
    renderSpecials(); render(); worker.terminate();
  };
  worker.postMessage(songs.map(song=>song.title));
} catch (_) { /* 曲一覧は通常どおり表示 */ }
