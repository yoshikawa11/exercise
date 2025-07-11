type NavItem = {
  label: string;
  href: `/${string}` | `http://${string}` | `https://${string}`;
};

const items: NavItem[] = [
  // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "AbeHiroshi", href: "http://abehiroshi.la.coocan.jp/" },
  { label: "Google", href: "https://www.google.com" },
  { label: "Twitter (Currently X)", href: "https://twitter.com" },

  // @ts-expect-error リンク先のエラー
  { label: "Contact", href: "contact" },
  // @ts-expect-error リンク先のエラー
  { label: "Contact", href: "./contact" },
  // @ts-expect-error リンク先のエラー
  { label: "Example", href: "www.example.com" },
];
