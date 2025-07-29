import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-2xl px-5 py-2 font-bold">
                Register Your Account
              </h1>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                />
                <label className="label">Photo Url</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Your Photo Url"
                />
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

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
              <p className="text-xs font-semibold">
                Already Have An Account?{" "}
                <Link
                  className="text-secondary  font-bold underline"
                  to="/auth/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
