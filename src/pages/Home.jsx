import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection1 from "../components/HeroSection1";
import ServicesSection from "../components/ServicesSection";
import StarsBackground from "../components/StarsBackground";
import ThirdSection from "../components/ThirdSection";
import ReadArticlesSection from "../components/ReadArticlesSection";
import MetoerSection from "../components/MetoerSection";
import Footer from "../components/Footer";
import { useScroll } from "framer-motion";

import Transition1 from "../components/Transition1";

const Home = () => {
  const { scrollYProgress, scrollY } = useScroll();

  // useEffect(() => {
  //   console.log("this is my scroll", myScroll);
  // });

  return (
    <>
      <div className="relative  ">
        <div className="relative z-10">
          {/* <motion.div
            className="progress-bar sticky top-0 left-0 h-2 w-full z-50 bg-slate-300"
            style={{ scaleX: scrollYProgress }}
          ></motion.div> */}
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

export default Transition1(Home);
