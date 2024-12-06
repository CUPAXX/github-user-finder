import type { Metadata } from "next";
import { roboto } from "../utils/Fonts";
import "./globals.css";
import Header from "@src/components/header/header";

export const metadata: Metadata = {
  title: "GitHub User Finder",
  description: "Website to find github user and repository using github API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
