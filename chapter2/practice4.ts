try {
  if (new Date().getFullYear() > 2050) {
    throw new Error("未定義です。");
  }
  console.log("Success");
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}
