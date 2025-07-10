const isHoliday = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// ✅ 想定通りのコード。エラーにならないようにしてください
isHoliday(new Date());
isHoliday(new Date("2024-02-10"));
isHoliday(new Date("2017-10-12"));

// @ts-expect-error Date 以外を渡そうとしているのでエラー
isHoliday("2024-01-01");
// @ts-expect-error Date 以外を渡そうとしているのでエラー
isHoliday(20381010);
