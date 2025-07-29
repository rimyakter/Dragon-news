import React, { use } from "react";
import Header from "../Components/Header";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { login } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 py-5 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-2xl px-5 py-5 font-bold">
                Login Your Account
              </h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
              <p className="text-xs font-semibold">
                Don't Have An Account?{" "}
                <Link
                  className="text-secondary  font-bold underline"
                  to="/auth/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
