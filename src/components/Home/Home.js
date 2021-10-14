import React from "react";
import LazyLoad from "react-lazyload";
import Blog from "./Blog";
import Courses from "./Courses";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <>
      <LazyLoad height={800}>
        <HomeMain />
      </LazyLoad>

      <Courses />
      <Blog />
    </>
  );
};

export default Home;
