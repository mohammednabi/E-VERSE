import React from "react";
import Navbar from "../components/Navbar";
import HeroSection1 from "../components/HeroSection1";
import ServicesSection from "../components/ServicesSection";
import StarsBackground from "../components/StarsBackground";
import ThirdSection from "../components/ThirdSection";
import ReadArticlesSection from "../components/ReadArticlesSection";
import MetoerSection from "../components/MetoerSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="relative  ">
        <div className="relative z-10">
          <Navbar />
          <HeroSection1 />
          <ServicesSection />
          <MetoerSection />
          <ThirdSection />
          <ReadArticlesSection />
          <Footer />
        </div>
        <StarsBackground />
      </div>
    </>
  );
};

export default Home;
