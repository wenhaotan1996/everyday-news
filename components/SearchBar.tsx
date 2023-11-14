"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

export default function SearchBar({}: Props) {
  const [input, setInput] = useState("");
  const router = useRouter();

  function doSearch() {
    if (input) {
      router.push(`/search?keyword=${input}`);
    }
  }
  return (
    <form
      className="flex w-full items-center px-2 text-red-400"
      onSubmit={(e) => {
        e.preventDefault();
        doSearch();
      }}
    >
      <input
        className="flex-1 bg-transparent py-2 pr-2 outline-none"
        placeholder="Search keyword..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="disabled:text-gray-400"
        disabled={!input}
        onClick={doSearch}
      >
        Search
      </button>
    </form>
  );
}
