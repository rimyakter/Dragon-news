import React from "react";
import { NavLink } from "react-router";
import loginImg from "../assets/user.png";

const Navbar = () => {
  return (
    <div className=" flex justify-around">
      <div></div>
      <div className="flex">
        <div className="navbar flex space-x-2 text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="login-bar flex space-x-2">
          <img className="w-12 h-12" src={loginImg} alt="" />
          <button className="btn bg-primary text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
