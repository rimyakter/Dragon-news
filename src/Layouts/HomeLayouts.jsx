import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      {/* header section */}
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav className="mt-5 mb-10 w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>

      {/* main section */}
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
