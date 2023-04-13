import { PuffLoader } from "react-spinners";
import { NewsItem } from "./NewsItem";
import { useEffect, useState } from "react";

export const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetch("/news")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((data) => {
        setNewsItems(data);
      })
      .catch((error) => console.error);
  }, []);
  return (
    <div>
      <h1>News</h1>
      {newsItems.length <= 0 ? (
        <PuffLoader color="#7FFF00" />
      ) : (
        <ul>
          {newsItems.map((newsItem) => {
            return <NewsItem key={newsItem.id} data={newsItem} />;
          })}
        </ul>
      )}
    </div>
  );
};
