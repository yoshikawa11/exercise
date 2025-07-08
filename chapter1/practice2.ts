const double = (array: number[]) => {
  return array.map((num) => num * 2);
};

// 正常系のテスト
double([1, 2, 3]);
double([10, 20, 30]);
double([]);

// @ts-expect-error: 引数がnumber[]型ではないためエラー
double(["1", "2", "3"]);
// @ts-expect-error: 引数がnumber[]型ではないためエラー
double([1, "2", null]);
// @ts-expect-error: 引数がnumber[]型ではないためエラー
double(1);
// @ts-expect-error: 引数がnumber[]型ではないためエラー
double({});
