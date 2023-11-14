import { decode, encode } from "html-entities";
import Link from "next/link";
import LiveTime from "./LiveTime";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 px-4 py-6 md:grid-cols-2 lg:grid-cols-3">
      {news.map((article) => (
        <article
          className="pointer-events-none flex flex-col overflow-hidden rounded-lg bg-slate-200 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-300 hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-800"
          key={article.url}
        >
          {article.image && (
            <img
              className="h-56 w-full object-cover"
              src={article.image}
              alt={article.title}
            />
          )}
          <div className="mt-4 flex flex-1 flex-col px-3">
            <div className="flex-1">
              <h2 className="line-clamp-3 text-center font-serif text-lg font-bold">
                {decode(article.title)}
              </h2>
              <p className="mt-2 line-clamp-3 flex-1 text-sm">
                {decode(article.description)}
              </p>
            </div>
            <footer className="ml-auto flex space-x-1 py-4 text-right text-xs italic text-gray-400">
              <p>{article.source} -</p>
              <LiveTime date={article.time} />
            </footer>
          </div>

          <Link
            className="pointer-events-auto flex h-10 items-center justify-center rounded-b-lg bg-red-400 text-white"
            prefetch={true}
            href={`/article?${Object.entries(article)
              .filter(
                ([key, _]) =>
                  !(typeof key === "string" && key.charAt(0) === "_"),
              )
              .map(([key, value]) => `${key}=${decode(value)}`)
              .join("&")}`}
          >
            Read More
          </Link>
        </article>
      ))}
    </div>
  );
}
