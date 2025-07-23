import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCart from "../Components/NewsCart";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [filteredNews, SetFilteredNews] = useState([]);
  //   filter matching categories data from all fetch data
  useEffect(() => {
    if (id == 0) {
      SetFilteredNews(data);
      return;
    } else if (id == 1) {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      SetFilteredNews(filterNews);
      return;
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      SetFilteredNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="mb-5">
        Total
        <span className="text-secondary font-bold">
          {" "}
          {filteredNews.length}{" "}
        </span>
        Category Found
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {filteredNews.map((news) => (
          <NewsCart key={news.id} news={news}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
