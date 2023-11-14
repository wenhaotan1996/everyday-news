"use client";
import Image from "next/image";
import sadFace from "@/public/sad-face.svg";

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-4 pt-6 text-center">
      <Image
        className="dark:filter-white"
        src={sadFace}
        width={120}
        height={120}
        alt="sad face"
      />
      <h1 className="text-2xl font-bold">
        Oops! Something went wrong! Please refresh the page or check back later.
      </h1>
    </div>
  );
}
