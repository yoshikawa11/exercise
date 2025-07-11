const checkSuccess = (input: string): boolean => {
  if (input === "error") {
    // @ts-expect-error falese を返さないためエラーになる
    return;
  }
  return true; // ✅ 想定通りのコード
};
