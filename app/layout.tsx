import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " mx-auto flex min-h-screen max-w-6xl flex-col px-2 pb-40 pt-8 dark:bg-black dark:text-white"
        }
        id="body"
      >
        <Header />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
