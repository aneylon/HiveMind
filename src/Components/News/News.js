import { NewsItem } from "./NewsItem";

export const News = () => {
  const newsItems = [
    { id: 1, title: "Item One", dateTime: "04/15/23" },
    { id: 2, title: "Item Two", dateTime: "04/12/23" },
    { id: 3, title: "Item Three", dateTime: "04/09/23" },
  ];
  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsItems.map((newsItem) => {
          return <NewsItem data={newsItem} />;
        })}
      </ul>
    </div>
  );
};
