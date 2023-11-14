import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import DarkModeSwitch from "./DarkModeSwitch";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="mx-auto w-full">
      <div className="mb-4 flex flex-col items-center justify-center space-y-4 ">
        <Link href={"/"} prefetch={false}>
          <h1 className=" cursor-pointer text-center font-serif text-4xl font-bold">
            Your{" "}
            <span className="decoration-7 underline decoration-red-400 hover:scale-105">
              Daily
            </span>{" "}
            Dose of Internet
          </h1>
        </Link>
        <div className="">
          <DarkModeSwitch />
        </div>
      </div>
      <NavLinks />
      <SearchBar />
    </header>
  );
}
