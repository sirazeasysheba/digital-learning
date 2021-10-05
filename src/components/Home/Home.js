import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navbar/Navigation";
import TopNavber from "../Navbar/TopNavber";
import Courses from "./Courses";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <div>
      <TopNavber />
      <Navigation />
      <HomeMain />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
