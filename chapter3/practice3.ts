const getDayMessage = (
  day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN",
) => {
  switch (day) {
    case "MON":
    case "TUE":
    case "WED":
    case "THU":
    case "FRI": {
      return "平日です";
    }
    case "SAT":
    case "SUN": {
      return "休日です";
    }
    default: {
      return;
    }
  }
};

// ✅ 想定通りのコード
console.log(getDayMessage("MON")); // "平日です"
console.log(getDayMessage("SUN")); // "休日です"

// @ts-expect-error 所定の曜日でないためエラー
console.log(getDayMessage("ABC"));
// @ts-expect-error 所定の曜日でないためエラー
console.log(getDayMessage("mon"));
// @ts-expect-error 所定の曜日でないためエラー
console.log(getDayMessage("Friday"));
// @ts-expect-error 所定の曜日でないためエラー
console.log(getDayMessage("SATURDAY"));
