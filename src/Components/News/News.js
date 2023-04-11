import { PuffLoader } from "react-spinners";
import { NewsItem } from "./NewsItem";
import { useEffect, useState } from "react";

export const News = () => {
  const [newsItems, setNewsItems] = useState([]);

  // const newsItems = [
  //   { id: 1, title: "Item One", dateTime: "04/15/23" },
  //   { id: 2, title: "Item Two", dateTime: "04/12/23" },
  //   { id: 3, title: "Item Three", dateTime: "04/09/23" },
  // ];
  useEffect(() => {
    fetch("http://localhost:4200/news")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setNewsItems(data);
      });
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
