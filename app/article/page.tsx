import LiveTime from "@/components/LiveTime";
import Link from "next/link";
import NotFoundPage from "../not-found";

type Props = {
  searchParams: News;
};

export default function ArticlePage({ searchParams: article }: Props) {
  return article?.url ? (
    <article className="mx-auto max-w-md overflow-x-hidden px-3 py-6 md:max-w-lg md:py-10 lg:max-w-2xl">
      {article.image && (
        <img
          className="w-full overflow-hidden rounded-lg object-contain shadow-lg"
          src={article.image}
          alt={article.title}
        />
      )}

      <h1 className="py-4 font-serif text-4xl capitalize lg:py-6">
        {article.title}
      </h1>

      <div className="flex space-x-4 divide-x-2 text-sm font-bold">
        <h2>By: {article.author ?? "unknown"}</h2>
        <h2 className="pl-4">Source: {article.source ?? "unkonwn"}</h2>
        <p className="pl-4 font-normal">
          <LiveTime date={article.time} />
        </p>
      </div>

      <p className="py-6">{article.description}</p>

      {article.url && (
        <div className="flex w-full justify-center">
          <Link
            className="rounded-lg bg-red-400 px-4 py-2 font-semibold capitalize text-white transition-transform duration-200 ease-out hover:scale-105"
            href={article.url}
            target="_blank"
            prefetch={false}
          >
            Take me to Source
          </Link>
        </div>
      )}
    </article>
  ) : (
    <NotFoundPage />
  );
}
