const getLength = (text: string) => {
  return text.length;
};

Deno.test("type check success", () => {
  // 正常系のテスト
  getLength("hello");
  getLength("very long text");
  getLength("");
});

Deno.test("type check error", () => {
  // @ts-expect-error: number型はstring型ではないためエラー
  getLength(10);
  // @ts-expect-error: object型はstring型ではないためエラー
  getLength({});
  // @ts-expect-error: nullはstring型ではないためエラー
  getLength(null);
});
