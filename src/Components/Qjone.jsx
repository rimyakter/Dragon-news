import React from "react";
import swimming from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playground from "../assets/playground.png";

const Qjone = () => {
  return (
    <div>
      <div className="mx-4 p-2 bg-base-200 my-4">
        <h1 className="font-bold text-2xl  mx-4 p-2 text-center">Q-Zone</h1>
        <img src={swimming} alt="swimming" />
        <img src={classroom} alt="classroom" />
        <img src={playground} alt="playground" />
      </div>
    </div>
  );
};

export default Qjone;
