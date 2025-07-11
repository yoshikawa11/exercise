// ✍🏼 この型を修正してください
type Shape = Circle | Square;

type Circle = {
  type: "circle";
  radius: number;
};

type Square = {
  type: "square";
  side: number;
};

const getArea = (shape: Shape) => {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
};

// ✅ 想定通りのコード。エラーにならないようにしてください
console.log(getArea({ type: "circle", radius: 3 }));
console.log(getArea({ type: "square", side: 4 }));

// ❌ 以下はエラーにしてください
// @ts-expect-error adius がないのでエラー
console.log(getArea({ type: "circle" }));
// @ts-expect-error side がないのでエラー
console.log(getArea({ type: "square" }));
// @ts-expect-error 余計なプロパティがあるのでエラー
console.log(getArea({ type: "circle", radius: 2, side: 4 }));
// @ts-expect-error 存在しない type なのでエラー
console.log(getArea({ type: "triangle" }));
