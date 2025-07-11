const getAction = (light: "RED" | "YELLOW" | "GREEN") => {
  switch (light) {
    case "RED": {
      console.log("止まれ");
      break;
    }
    case "GREEN": {
      console.log("進め");
      break;
    }
    default: {
      // @ts-expect-error "YELLOW" に対する処理が抜けているのでエラー
      light satisfies never;
      break;
    }
  }
};
