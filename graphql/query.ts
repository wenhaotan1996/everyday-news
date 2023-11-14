export const getNews = `
  query News(
    $country: String
    $limit: Int
    $sort: String
    $keyword: String
    $categories: String
  ) {
    news(
      country: $country
      limit: $limit
      sort: $sort
      keyword: $keyword
      categories: $categories
    ) {
      author
      description
      image
      source
      time
      title
      url
    }
  }
`;
