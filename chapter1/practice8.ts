declare global {
  interface Window {
    dataLayer: object[];
  }
}

// ✅ 想定通りのコード。エラーにならないようにしてください
window.dataLayer.push({ event: "event_name" });
window.dataLayer.push({ variable_name: "variable_value" });
window.dataLayer.push({
  color: "red",
  conversionValue: 50,
  event: "customize",
});
window.location; // 既存のプロパティにもアクセスできる
window.scrollY; // 既存のプロパティにもアクセスできる

// @ts-expect-error 存在しないプロパティにアクセスするとエラー
window.dataLayer.toUpperCase();
// @ts-expect-error 存在しないプロパティにアクセスするとエラー
window.bar;
