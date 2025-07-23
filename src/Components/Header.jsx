import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const now = new Date();
  const formattedDate = format(now, "EEEE, MMMM dd, yyyy");
  return (
    <div className="flex flex-col items-center space-y-4 my-10">
      <img className="w-1/4" src={logo} alt="logo" />
      <p className="text-sm text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent">{formattedDate}</p>
    </div>
  );
};

export default Header;
