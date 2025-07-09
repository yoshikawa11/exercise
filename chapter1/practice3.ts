const message = (user: { name: string; age: number }) => {
  console.log(
    `${user.name}さん、${user.age}歳です。来年は${user.age + 1}歳ですね。`,
  );
};

// 正常
message({ name: "太郎", age: 30 });
message({ name: "花子", age: 25 });
message({ name: "JavaScript", age: 29 });
message({ name: "TypeScript", age: 11 });

// @ts-expect-error: 年齢を文字列で渡しているのでエラー
message({ name: "一郎", age: "30" });
// @ts-expect-error: キーを間違えているのでエラー
message({ namae: "二郎", age: 30 });
// @ts-expect-error: 必須のキーが抜けているのでエラーにしたい
message({ name: "三郎" });
// @ts-expect-error: 不要なキーがあるのでエラーにしたい
message({ name: "四郎", age: 30, mail: "shiro@example.com" });
