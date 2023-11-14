"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { category: string };

export default function NavLink({ category }: Props) {
  const isActive = usePathname().split("/").pop() === category;
  return (
    <Link
      href={`/category/${category}`}
      className={`cursor-pointer text-center capitalize decoration-red-400 decoration-2 underline-offset-8 transition-transform duration-200 ease-in-out hover:scale-110 hover:font-bold hover:underline active:underline ${
        isActive && "underline"
      }`}
      key={category}
    >
      {category}
    </Link>
  );
}
