const call = (func: (num: number) => void) => {
  const rand = Math.random() * 10;
  func(rand);
};

// 正常系
call((num) => {
  if (num > 5) {
    console.log(num);
  }
});
call(() => {
  // 引数を使わなくてもOK
  console.log("called");
});

// @ts-expect-error 関数以外を渡そうとしているのでエラー
call({});
// @ts-expect-error 引数を文字列として使おうとしているのでエラー
call((str: string) => {
  if (str.includes("abc")) {
    console.log(str);
  }
});
// @ts-expect-error 存在しない引数を使おうとしているのでエラー
call((_num, _num2) => {
  console.log("called");
});
