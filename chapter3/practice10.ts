// ✍🏼 この型を修正してください
type Result = { error: false; value: number } | {
  error: true;
  message: string;
};

const sqrt = (input: number): Result => {
  if (input < 0) {
    // ✅ 想定通りのコード
    return { error: true, message: "負の数は受け付けません" };
  } else if (input === 0) {
    // @ts-expect-error valueを含めていないためエラー
    return { error: false };
  } else if (input === 1) {
    // @ts-expect-error 不要なプロパティを含めているためエラー
    return { error: false, value: 1, message: "√1 はちょうど1です" };
  } else {
    // ✅ 想定通りのコード
    return { error: false, value: Math.sqrt(input) };
  }
};
