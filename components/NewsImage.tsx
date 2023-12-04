"use client";

import Image from "next/image";
import { useState } from "react";
import Newspaper from "@/public/old-newspaper-350376_1280.jpg";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

export default function NewsImage({ src, alt, className }: Props) {
  const [showBackup, setShowBackup] = useState(!!!src);
  return (
    <>
      {!showBackup && (
        <Image
          className={className}
          src={src ?? ""}
          fill={true}
          priority
          alt={alt ?? "article cover"}
          onError={() => setShowBackup(true)}
        />
      )}
      {showBackup && (
        <Image
          className={className}
          src={Newspaper}
          fill={true}
          priority
          alt={alt ?? "article cover"}
        />
      )}
    </>
  );
}
