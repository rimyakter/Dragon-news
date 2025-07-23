import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mx-4 mt-10">
      <h1 className="text-lg font-bold">Find Us On</h1>
      <div className="join join-vertical w-full ">
        <button className="btn justify-start join-item bg-transparent">
          <FaFacebook className="mr-3 text-blue-400 "></FaFacebook>
          FaceBook
        </button>
        <button className="btn justify-start join-item bg-transparent">
          <FaTwitter className="mr-3 text-blue-400"></FaTwitter>Twitter
        </button>
        <button className="btn justify-start join-item bg-transparent">
          <FaInstagram className="mr-3 text-blue-400"></FaInstagram>Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
