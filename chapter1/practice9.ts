type Hand = "gu" | "choki" | "pa";
const win: Record<Hand, Hand> = {
  gu: "pa",
  choki: "gu",
  pa: "choki",
};

// ✅ 想定通りのコード
console.log(`グーに勝つ手は${win["gu"]}`);
console.log(`グーに勝つ手に勝つ手は${win[win["gu"]]}`);
console.log(`グーに勝つ手に勝つ手に勝つ手は${win[win[win["gu"]]]}`);

// @ts-expect-error 存在しないキーを参照するとエラー
console.log(`グーに勝つ手は${win["👌"]}`);
