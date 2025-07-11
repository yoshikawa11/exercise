type Pokemon = {
  name: string;
  type: [string] | [string, string];
};

// ✅ 以下は想定通りのコードです。エラーにならないようにしてください
const pikachu: Pokemon = {
  name: "ピカチュウ",
  type: ["でんき"],
};
const charizard: Pokemon = {
  name: "リザードン",
  type: ["ほのお", "ひこう"],
};

// ❌ 以下はエラーにしたいです
const typeNull: Pokemon = {
  name: "タイプ：ヌル",
  // @ts-expect-error 要素数が0なのでエラー
  type: [],
};
const lugia: Pokemon = {
  name: "ルギア",
  // @ts-expect-error 要素数が3以上なのでエラー
  type: ["エスパー", "ひこう", "みず"],
};
const terapagos: Pokemon = {
  name: "テラパゴス",
  // @ts-expect-error 要素数が3以上なのでエラー
  type: [
    "ノーマル",
    "ほのお",
    "みず",
    "でんき",
    "くさ",
    "こおり",
    "かくとう",
    "どく",
    "じめん",
    "ひこう",
    "エスパー",
    "むし",
    "いわ",
    "ゴースト",
    "ドラゴン",
    "あく",
    "はがね",
    "フェアリー",
  ],
};
