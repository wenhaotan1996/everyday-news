import { revalidateTime, sortNewsImageFirst } from "@/app/util";
import NewsList from "@/components/NewsList";
import client from "@/graphql/client";
import { getNews } from "@/graphql/query";

type Props = { params: { category: string } };

export const revalidate = revalidateTime;

export default async function CategoryPage({ params: { category } }: Props) {
  const news: News[] = (await client.query(getNews, { categories: category }))
    ?.news;
  const sortedNews = sortNewsImageFirst(news);

  return <NewsList news={sortedNews} />;
}
