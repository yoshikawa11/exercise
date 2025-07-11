let isScrolled: boolean;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // ✅ 想定通りのコード
    isScrolled = true;
  } else {
    // @ts-expect-error string型はエラー
    isScrolled = "NO";
  }

  if (isScrolled) {
    console.log("スクロールされました");
  }
});
