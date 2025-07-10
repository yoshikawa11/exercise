const items = [
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
];
const result = items.find((item) => item.id === 1);

// 別解console.log(result?.name)
if (typeof result !== "undefined") {
  console.log(result.name);
}
