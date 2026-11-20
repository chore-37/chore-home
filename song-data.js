/*
  曲を追加・編集するのは、このファイルだけでOK！
  type は guitar（弾き語り）/ karaoke（カラオケ）/ backing（オケ付き弾き語り）
  practice は true で練習中（🔺）、false で通常。
  special は true で得意曲（★）、favorite は true でお気に入り（☆）。

  漢字・英字を正確な五十音順／頭文字検索にしたい時は、
  artistReading と titleReading に、ひらがなで読みを追加できます。
  例： { title: '新しい曲', titleReading: 'あたらしいきょく', artist: 'アーティスト名', artistReading: 'あーてぃすとめい', genre: 'J-POP', type: 'guitar', practice: false, special: false, favorite: false },
*/
const songs = [
  {
    "title": "夢見る少女じゃいられない",
    "artist": "相川七瀬",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "マリーゴールド",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "君はロックを聴かない",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "貴方解剖純愛歌",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハート",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハルノヒ",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "裸の心",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ふたりの世界",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "3636",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "桜が降る夜は",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "今夜このまま",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "恋をしたから",
    "artist": "あいみょん",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "革命道中",
    "artist": "アイナ・ジ・エンド",
    "genre": "アニメ",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "大人になって",
    "artist": "アイナ・ジ・エンド",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ラピスラズリ",
    "artist": "藍井エイル",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "IGNITE",
    "artist": "藍井エイル",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "INNOCENCE",
    "artist": "藍井エイル",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "10月無口な君を忘れる",
    "artist": "あたらよ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "8.8",
    "artist": "あたらよ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "夏霞",
    "artist": "あたらよ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "嘘つき",
    "artist": "あたらよ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "貴方の恋人になりたいのです",
    "artist": "阿部真央",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "I wanna see you",
    "artist": "阿部真央",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "側にいて",
    "artist": "阿部真央",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "おかえり",
    "artist": "絢香",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "三日月",
    "artist": "絢香",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "にじいろ",
    "artist": "絢香",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "赤い糸",
    "artist": "新垣結衣",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "虹",
    "artist": "嵐 二宮和也",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "オリビアを聴きながら",
    "artist": "杏里",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "手紙〜拝啓　十五の君へ〜",
    "artist": "アンジェラ・アキ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "君がくれた夏",
    "artist": "家入レオ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Shine",
    "artist": "家入レオ",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "未完成",
    "artist": "家入レオ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Silly",
    "artist": "家入レオ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "太陽の女神",
    "artist": "家入レオ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "風が吹いている",
    "artist": "いきものがかり",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "気まぐれロマンティック",
    "artist": "いきものがかり",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ブルーバード",
    "artist": "いきものがかり",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "コイスルオトメ",
    "artist": "いきものがかり",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ありがとう",
    "artist": "いきものがかり",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "YELL",
    "artist": "いきものがかり",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "笑顔",
    "artist": "いきものがかり",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "スパークル",
    "artist": "幾田りら",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "answer",
    "artist": "幾田りら",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "君をのせて",
    "artist": "井上あずみ",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "さんぽ",
    "artist": "井上あずみ",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "となりのトトロ",
    "artist": "井上あずみ",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "PRIDE",
    "artist": "今井美樹",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "なごり雪",
    "artist": "イルカ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "タッチ",
    "artist": "岩崎良美",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "FirstLove",
    "artist": "宇多田ヒカル",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "センチメンタル・キス",
    "artist": "汐れいら",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "プラネタリウム",
    "artist": "大塚愛",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "さくらんぼ",
    "artist": "大塚愛",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ちっぽけな愛のうた",
    "artist": "大原櫻子",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "瞳",
    "artist": "大原櫻子",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "変わらないもの",
    "artist": "奥華子",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ガーネット",
    "artist": "奥華子",
    "genre": "アニメ",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "光の方へ",
    "artist": "カネコアヤノ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "アンマー",
    "artist": "かりゆし58",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ナナ",
    "artist": "かりゆし58",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "魔法の絨毯",
    "artist": "川崎鷹也",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "金木犀の夜",
    "artist": "きのこ帝国",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "怪獣の腕の中",
    "artist": "きのこ帝国",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "東京",
    "artist": "きのこ帝国",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "クロノスタシス",
    "artist": "きのこ帝国",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "いつも何度でも",
    "artist": "木村弓",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "いのちの名前",
    "artist": "木村弓",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "渡月橋〜君想ふ〜",
    "artist": "倉木麻衣",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Secret of my heart",
    "artist": "倉木麻衣",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Time after time〜花舞う街で〜",
    "artist": "倉木麻衣",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "栞",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "exダーリン",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "おやすみ泣き声、さよなら歌姫",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "本当なんてぶっ飛ばしてよ",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "憂、燦々",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "二十九、三十",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "手と手",
    "artist": "クリープハイプ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "明日晴れるかな",
    "artist": "桑田佳祐",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "星座になれたら",
    "artist": "結束バンド",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "サイレントマジョリティー",
    "artist": "欅坂46",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "夏の花は向日葵だけじゃない",
    "artist": "欅坂46",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Moon Crying",
    "artist": "倖田來未",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "愛のうた",
    "artist": "倖田來未",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "愛情",
    "artist": "小柳ゆき",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "たばこ",
    "artist": "コレサワ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "恋人失格",
    "artist": "コレサワ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "人生",
    "artist": "コレサワ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "にゃんにゃんにゃん",
    "artist": "コレサワ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "女々しくて",
    "artist": "ゴールデンボンバー",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "歌うたいのバラッド",
    "artist": "斉藤和義",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "五月雨よ",
    "artist": "櫻坂46",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ちっぽけな愛のうた",
    "artist": "小枝理子、小笠原秋",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "卒業",
    "artist": "小枝理子、小笠原秋",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "フラレガイガール",
    "artist": "さユり",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "平行線",
    "artist": "さユり",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "ミカヅキ",
    "artist": "さユり",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "十億年",
    "artist": "さユり",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "航海の唄",
    "artist": "さユり",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "それは小さな光のような",
    "artist": "さユり",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "berthday song",
    "artist": "さユり",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "丸の内サディスティック",
    "artist": "椎名林檎",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "YUME日和",
    "artist": "島谷ひとみ",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "嘘",
    "artist": "シド",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "レイン",
    "artist": "シド",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "君に贈る歌~Song For You",
    "artist": "シェネル",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "奏",
    "artist": "スキマスイッチ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "チェリー",
    "artist": "スピッツ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "パート・オブ・ユア・ワールド",
    "artist": "すずきまゆみ",
    "genre": "ディズニー",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "正しくなれない",
    "artist": "ずっと真夜中でいいのに。",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "秒針を噛む",
    "artist": "ずっと真夜中でいいのに。",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "もしも僕に",
    "artist": "関取花",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Arrietty's Song",
    "artist": "セシル・コルベル",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "地獄先生",
    "artist": "相対性理論",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "おはようオーパーツ",
    "artist": "相対性理論",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "百年戦争",
    "artist": "相対性理論",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "気になるあの娘",
    "artist": "相対性理論",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "残酷な天使のテーゼ",
    "artist": "高橋洋子",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "世界が終わる夜に",
    "artist": "チャットモンチー",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "染まるよ",
    "artist": "チャットモンチー",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Never glow up",
    "artist": "ちゃんみな",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハレンチ",
    "artist": "ちゃんみな",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "風になる",
    "artist": "つじあやの",
    "genre": "ジブリ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "明日への手紙",
    "artist": "手嶌葵",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "テルーの唄",
    "artist": "手嶌葵",
    "genre": "ジブリ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "さよならの夏",
    "artist": "手嶌葵",
    "genre": "ジブリ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "紡ぐ",
    "artist": "とた",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "ホール・ニュー・ワールド",
    "artist": "中村倫也、木下晴香",
    "genre": "ディズニー",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "涙そうそう",
    "artist": "夏川りみ",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "島唄",
    "artist": "夏川りみ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "雪の華",
    "artist": "中島美嘉",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "糸",
    "artist": "中島みゆき",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "銀の龍の背に乗って",
    "artist": "中島みゆき",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ありがとうForever...",
    "artist": "西内まりや",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ワンルーム",
    "artist": "にしな",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "ヘビースモーク",
    "artist": "にしな",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "青藍遊泳",
    "artist": "にしな",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "1999",
    "artist": "にしな",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "会いたくて会いたくて",
    "artist": "西野カナ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "トリセツ",
    "artist": "西野カナ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "if",
    "artist": "西野カナ",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Dear...",
    "artist": "西野カナ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "たとえ どんなに...",
    "artist": "西野カナ",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "何度めの青空か？",
    "artist": "乃木坂46",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ひまわりの約束",
    "artist": "秦基博",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "恋愛サーキュレーション",
    "artist": "花澤香菜",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "MY ALL",
    "artist": "浜崎あゆみ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "SEASONS",
    "artist": "浜崎あゆみ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Voyage",
    "artist": "浜崎あゆみ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "1999",
    "artist": "羊文学",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "声",
    "artist": "羊文学",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "more than words",
    "artist": "羊文学",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハナミズキ",
    "artist": "一青窈",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "LET IT OUT",
    "artist": "福原みほ",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "かなしくないよ",
    "artist": "フジタカコ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ビビデバ",
    "artist": "星街すいせい",
    "genre": "ボカロ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "メリッサ",
    "artist": "ポルノグラフィティ",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "恋人ごっこ",
    "artist": "マカロニえんぴつ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "ブルーベリーナイツ",
    "artist": "マカロニえんぴつ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "ミスターブルースカイ",
    "artist": "マカロニえんぴつ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "生まれてはじめて",
    "artist": "松たか子、神田沙也加",
    "genre": "ディズニー",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "レット・イット・ゴー~ありのままで~",
    "artist": "松たか子",
    "genre": "ディズニー",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "あなたに逢いたくて〜Missing You",
    "artist": "松田聖子",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "カワキヲアメク",
    "artist": "美波",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ライラック",
    "artist": "美波",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "行くぜ！怪盗少女",
    "artist": "ももいろクローバーZ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "どこまでも~How Far I'll Go~",
    "artist": "屋比久知奈",
    "genre": "ディズニー",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "星月夜",
    "artist": "由薫",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "かくれんぼ",
    "artist": "優里",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ドライフラワー",
    "artist": "優里",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "メリーゴーランド",
    "artist": "優里",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ベテルギウス",
    "artist": "優里",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "レオ",
    "artist": "優里",
    "genre": "J-POP",
    "type": "backing",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "栄光の架橋",
    "artist": "ゆず",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Lemon",
    "artist": "米津玄師",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "若者のすべて",
    "artist": "ヨルシカ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "嘘月",
    "artist": "ヨルシカ",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "盗作",
    "artist": "ヨルシカ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "花に亡霊",
    "artist": "ヨルシカ",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "言って。",
    "artist": "ヨルシカ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ヒッチコック",
    "artist": "ヨルシカ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ただ君に晴れ",
    "artist": "ヨルシカ",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "からくりピエロ",
    "artist": "40mP",
    "genre": "ボカロ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "夏恋花火",
    "artist": "40mP、シャノ",
    "genre": "ボカロ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "恋愛裁判",
    "artist": "40mP",
    "genre": "ボカロ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "想い人",
    "artist": "緑黄色社会",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "shout baby",
    "artist": "緑黄色社会",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "花になって",
    "artist": "緑黄色社会",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "サマータイムシンデレラ",
    "artist": "緑黄色社会",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "Mela!",
    "artist": "緑黄色社会",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "好きでよかった。",
    "artist": "リーガルリリー",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "浮気されたけどまだ好きって曲。",
    "artist": "りりあ",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ライオン",
    "artist": "ワルキューレ",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "いけないボーダーライン",
    "artist": "ワルキューレ",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "穴空きの空",
    "artist": "adieu",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "よるのあと",
    "artist": "adieu",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "楓",
    "artist": "adieu",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "風のゆくえ",
    "artist": "Ado",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ギラギラ",
    "artist": "Ado",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "踊",
    "artist": "Ado",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "えりあし",
    "artist": "aiko",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "カブトムシ",
    "artist": "aiko",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ボーイフレンド",
    "artist": "aiko",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "もっと",
    "artist": "aiko",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "KissHug",
    "artist": "aiko",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "相思相愛",
    "artist": "aiko",
    "genre": "アニメ",
    "type": "backing",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "コイワズライ",
    "artist": "Aimer",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "六等星の夜",
    "artist": "Aimer",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "蝶蝶結び",
    "artist": "Aimer",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "カタオモイ",
    "artist": "Aimer",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "あなたに出会わなければ",
    "artist": "Aimer",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "星屑ビーナス",
    "artist": "Aimer",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "会いたかった",
    "artist": "AKB48",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "涙サプライズ",
    "artist": "AKB48",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ヘビーローテーション",
    "artist": "AKB48",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "恋するフォーチュンクッキー",
    "artist": "AKB48",
    "genre": "アイドル",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "365日の紙飛行機",
    "artist": "AKB48",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "HAPPYBIRTHDAY",
    "artist": "backnumber",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "水平線",
    "artist": "backnumber",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "高嶺の花子さん",
    "artist": "backnumber",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "島人ぬ宝",
    "artist": "BEGIN",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "オーケストラ",
    "artist": "BiSH",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "星が瞬く夜に",
    "artist": "BiSH",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "プロミスザスター",
    "artist": "BiSH",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "beautifulさ",
    "artist": "BiSH",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "My landscape",
    "artist": "BiSH",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Period",
    "artist": "CHEMISTRY",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "猫",
    "artist": "DISH//",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Distance",
    "artist": "Daito Music",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ヴァンパイア",
    "artist": "DECO*27",
    "genre": "ボカロ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "妄想感傷代償連盟",
    "artist": "DECO*27",
    "genre": "ボカロ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "おとなの掟",
    "artist": "Doughnuts Hole",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "あなたへ贈る歌",
    "artist": "erica",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "やさしさで溢れるように",
    "artist": "Flower",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "愛唄",
    "artist": "GReeeeN",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "キセキ",
    "artist": "GReeeeN",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "366日",
    "artist": "HY",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "NAO",
    "artist": "HY",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "拝啓、少年よ",
    "artist": "Hamp Back",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "この夜を止めてよ",
    "artist": "JUJU",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Over Drive",
    "artist": "JUDY AND MARY",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "そばかす",
    "artist": "JUDY AND MARY",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "おなじ星",
    "artist": "Jungle Smile",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "カシスオレンジ",
    "artist": "Laughing hick",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "炎",
    "artist": "LiSA",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "crossing field",
    "artist": "LiSA",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "紅蓮華",
    "artist": "LiSA",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Catch the Moment",
    "artist": "LiSA",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "HADASHi NO STEP",
    "artist": "LiSA",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "好きだ。",
    "artist": "Little Glee Monster",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "いつかこの涙が",
    "artist": "Little Glee Monster",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ヨワネハキ",
    "artist": "MAISONdes",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "さよなら最愛の人",
    "artist": "mihoro",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "あなたがここにいて抱きしめることができるなら",
    "artist": "miwa",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ヒカリヘ",
    "artist": "miwa",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "リブート",
    "artist": "miwa",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Don't Cry anymore",
    "artist": "miwa",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "オトシモノ",
    "artist": "miwa",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "君に出会えたから",
    "artist": "miwa",
    "genre": "J-POP",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "点描の唄",
    "artist": "Mrs.GREEEN APPLE",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "ダーリン",
    "artist": "Mrs.GREEEN APPLE",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "僕のこと",
    "artist": "Mrs.GREEEN APPLE",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "明日も",
    "artist": "MUSH&Co.",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "恋人ができたんだ",
    "artist": "My Hair is Bad",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Hello Again",
    "artist": "My Little Lover",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "うれし涙",
    "artist": "MACO",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハナノイロ",
    "artist": "nano.RIPE",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ツキミソウ",
    "artist": "Novelbright",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "夜明けと蛍",
    "artist": "n-buna",
    "genre": "ボカロ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ILOVE…",
    "artist": "official髭男dism",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "イエスタデイ",
    "artist": "official髭男dism",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Pretender",
    "artist": "official髭男dism",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ノーダウト",
    "artist": "official髭男dism",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Wherever you are",
    "artist": "ONEOKROCK",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "欲望に満ちた青年団",
    "artist": "ONEOKROCK",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "生活革命",
    "artist": "PEDRO",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "愛のしるし",
    "artist": "PUFFY",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "M",
    "artist": "PRINCESS PRINCESS",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "シル・ヴ・プレジデント",
    "artist": "P丸様",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "そっけない",
    "artist": "RADWIMPS",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "なんでもないや",
    "artist": "RADWIMPS",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": true,
    "favorite": false
  },
  {
    "title": "すずめ",
    "artist": "RADWIMPS",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "グランドエスケープ",
    "artist": "RADWIMPS",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "愛にできることはまだあるかい",
    "artist": "RADWIMPS",
    "genre": "アニメ",
    "type": "backing",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "memeshe",
    "artist": "RADWIMPS",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ANIMA",
    "artist": "ReoNa",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "春風",
    "artist": "Rihwa",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "いつか",
    "artist": "SaucyDog",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "結",
    "artist": "SaucyDog",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "シンデレラボーイ",
    "artist": "SaucyDog",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "瞬間センチメンタル",
    "artist": "SCAHDAL",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ありがとう",
    "artist": "SUPER BEAVER",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "眠り姫",
    "artist": "sekai no owari",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "輝く月のように",
    "artist": "Superfly",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "君の知らない物語",
    "artist": "supercell",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Perfect Day",
    "artist": "supercell",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "晩餐歌",
    "artist": "tuki.",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "愛の賞味期限",
    "artist": "tuki.",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "プロローグ",
    "artist": "Uru",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "それを愛と呼ぶなら",
    "artist": "Uru",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "LoveSong",
    "artist": "Uru",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "あなたがいることで",
    "artist": "Uru",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "フリージア",
    "artist": "Uru",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "心得",
    "artist": "Uru",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "3月9日",
    "artist": "Uru",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "怪獣の花唄",
    "artist": "Vaundy",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "踊り子",
    "artist": "Vaundy",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "そんなbitterな話",
    "artist": "Vaundy",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "夜に駆ける",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "怪物",
    "artist": "YOASOBI",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "群青",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "アイドル",
    "artist": "YOASOBI",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "アンコール",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハルカ",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "あの夢をなぞって",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "ハルジオン",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "優しい彗星",
    "artist": "YOASOBI",
    "genre": "J-POP",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "Summersong",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "HELLO",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Happy Birthday to you you",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Namidairo",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "YOU",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "Good-bye days",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  },
  {
    "title": "feel my soul",
    "artist": "YUI",
    "genre": "J-POP",
    "type": "guitar",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "Rollig star",
    "artist": "YUI",
    "genre": "アニメ",
    "type": "karaoke",
    "practice": true,
    "special": false,
    "favorite": false
  },
  {
    "title": "secret base",
    "artist": "zone",
    "genre": "アニメ",
    "type": "guitar",
    "practice": false,
    "special": false,
    "favorite": false
  }
];
