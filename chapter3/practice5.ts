type format = `${number}/${number}/${number}`;
const dateList: format[] = [
  // ✅ 以下は想定通りの形式。エラーにならないようにしてください
  "2001/8/24",
  "2006/11/30",
  "2009/9/1",

  // @ts-expect-error 区切り文字が違うのでエラー
  "2012-8-16",
  // @ts-expect-error 区切り文字が違うのでエラー
  "20150729",
  // @ts-expect-error 区切り文字が違うのでエラー
  "2021/10",
];
