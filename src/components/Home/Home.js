import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navbar/Navigation";
import TopNavber from "../Navbar/TopNavbar";
import Courses from "./Courses";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <>
      <TopNavber />
      <Navigation />
      <HomeMain />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
