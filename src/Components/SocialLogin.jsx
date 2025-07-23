import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2>Login With</h2>
      <div className="mt-4 space-y-3 ml-4">
        <button className="btn btn-outline btn-success font-bold ">
          <FcGoogle size={25} /> Login With Google
        </button>
        <button className="btn btn-outline btn-error font-bold ">
          <FaGithub size={25} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
