import NewsList from "@/components/NewsList";
import { getNews } from "@/graphql/query";
import { revalidateTime, sortNewsImageFirst } from "../util";
import client from "@/graphql/client";

type Props = {
  searchParams: {
    keyword: string;
  };
};

export const revalidate = revalidateTime;

export default async function SearchPage({ searchParams: { keyword } }: Props) {
  const news: News[] = (
    await client.query(getNews, {
      keyword: keyword.toLowerCase().replace(/[^a-z0-9]/gim, "-"),
      sort: "popularity",
    })
  )?.news;
  const sortedNews = sortNewsImageFirst(news);
  return (
    <div className="py-6">
      <h1 className="ml-2 text-lg font-bold capitalize underline decoration-red-400 underline-offset-4">
        Searched Results for: <span className="text-xl">{keyword}</span>
      </h1>
      <NewsList news={sortedNews} />
    </div>
  );
}
