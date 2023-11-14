"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import moon from "@/public/moon.png";
import sun from "@/public/sun.png";
type Props = {};

const iconSize = 18;

export default function DarkModeSwitch({}: Props) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <div
      className="relative h-8 w-16 cursor-pointer rounded-full bg-red-400 transition-all duration-300 ease-in-out dark:bg-gray-700"
      onClick={() => setIsDark(!isDark)}
    >
      <input
        className="hidden"
        type="checkbox"
        checked={isDark}
        id="dark-switch"
        readOnly
      />
      <div className="absolute left-2 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out dark:translate-x-6">
        <Image
          className="block dark:hidden"
          width={iconSize}
          height={iconSize}
          src={moon}
          alt="moon"
        />
        <Image
          className="hidden dark:block"
          width={iconSize}
          height={iconSize}
          src={sun}
          alt="moon"
        />
      </div>
    </div>
  );
}
