import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-4 p-4 items-center w-11/12 mx-auto bg-base-200">
      <h2 className="bg-secondary p-3 text-white">Latest</h2>
      <Marquee className="flex gap-5" pauseOnHover="true">
        <p className="text-sm font-bold">
          Floodwaters have begun to recede from most areas of Feni.
        </p>
        <p className="text-sm font-bold">
          where continuous rainfall and hilly run-off since June 8.
        </p>
        <p className="text-sm font-bold">
          Caused embankments to collapse at 12 points.
        </p>
        <p>
          Along the Muhuri, Kahua, and Silonia rivers, inundating large parts of
          Parshuram.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
