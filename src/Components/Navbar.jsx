import React, { use } from "react";
import { Link, NavLink } from "react-router";
import loginImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You logged Out Sucessfully");
      })
      .catch((error) => {
        alert("error");
      });
  };
  return (
    <div className=" flex justify-between">
      <div className="text-secondary flex items-center   ">
        {user && <p className="border rounded-lg p-5">{user.email}</p>}
      </div>
      <div className="flex">
        <div className="navbar flex space-x-2 text-accent justify-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="login-bar flex space-x-2 items-center">
          <img className="w-12 h-12" src={loginImg} alt="" />
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-sm bg-primary text-white"
            >
              LogOut
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-sm bg-primary text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
