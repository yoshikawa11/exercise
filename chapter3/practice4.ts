const addItem = (array: readonly number[]) => {
  // @ts-expect-error 元の配列を変更してしまうためエラー
  array.push(4);
  return array;
};

const original = [1, 2, 3];
const newArray = addItem(original);
console.log(newArray); // [1, 2, 3, 4]
console.log(original);
