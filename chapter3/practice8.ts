const headOfHead = (array: [string, ...string[]]) => {
  return array[0].charAt(0);
};

// ✅ 想定通りのコード
console.log(headOfHead(["test"])); // t が出力されます
console.log(headOfHead(["hello", "world"])); // h が出力されます
console.log(headOfHead(["Alpha", "Bravo", "Charlie", "Delta"])); // A が出力されます

// @ts-expect-error 空配列はエラー
console.log(headOfHead([]));
