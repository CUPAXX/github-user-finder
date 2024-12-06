import { Roboto } from "next/font/google";

export const roboto_font = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const roboto = roboto_font.variable;
