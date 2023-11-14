export const revalidateTime = 60 * 60;

export function sortNewsImageFirst(news: News[]): News[] {
  return (
    news
      ?.map((article, index) => ({ article, index }))
      .sort(
        (a, b) =>
          a.index -
          b.index -
          (a.article.image ? news.length : 0) +
          (b.article.image ? news.length : 0),
      )
      .map((item) => item.article) ?? []
  );
}
