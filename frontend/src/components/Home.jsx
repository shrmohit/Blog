import React from "react";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Blog from "./Blog";
import HeroSection from "./Herosection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
