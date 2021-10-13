import React from "react";
import Blog from "./Blog";
import Courses from "./Courses";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <>
      <HomeMain />
      <Courses />
      <Blog />
    </>
  );
};

export default Home;
