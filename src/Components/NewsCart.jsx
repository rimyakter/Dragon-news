import React from "react";
import { FaRegBookmark, FaRegEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {author.published_date.slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mt-4 leading-snug">{title}</h2>

      {/* Image */}
      <figure className="mt-4">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <span className="font-semibold">{formattedDate}</span> | Tag Cloud
          Tags: {tags.join(", ")} – {details.slice(0, 180)}...
        </p>
        <span className="text-orange-600 font-semibold cursor-pointer">
          Read More
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <AiFillStar key={i} />
          ))}
          <span className="text-gray-700 font-medium ml-2">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
