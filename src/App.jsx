import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import StarsBackground from "./components/StarsBackground";
import HeroSection1 from "./components/HeroSection1";
import ServicesSection from "./components/ServicesSection";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    const circle = document.createElement("div");
    const circleSize = 50;
    circle.classList.add("star");
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
    circle.style.boxShadow = " 10px 10px 100px -2px rgb(46 16 101)";

    document.body.appendChild(circle);
    // circle.style.transition = "all .05s";
    window.addEventListener("mousemove", (e) => {
      // console.log(e);
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      circle.style.top = `${mouseY - 0.5 * circleSize}px`;
      circle.style.left = `${mouseX - 0.5 * circleSize}px`;
      // circle.style.top = `${Number(circle.style.top.slice(0, 5)) + 100}px`;
      // console.log("this is circle top : ", circle.style.top);

      // setTimeout(() => {
      //   document.body.removeChild(circle);
      // }, 50);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
