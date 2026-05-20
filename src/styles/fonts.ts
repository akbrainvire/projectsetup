type AppFont = {
  className: string;
  style: { fontFamily: string };
  variable: string;
};

const createFont = (className: string, fontFamily: string, variable: string): AppFont => ({
  className,
  style: { fontFamily },
  variable,
});

export const NotoSansFont = createFont(
  "font-noto-sans",
  '"Noto Sans", "Noto Sans Arabic", sans-serif',
  "--font-noto-sans"
);

export const NotoSerifFont = createFont(
  "font-noto-serif",
  '"Noto Serif", "Noto Serif Arabic", serif',
  "--font-noto-serif"
);
