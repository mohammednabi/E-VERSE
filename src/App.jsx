import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import StarsBackground from "./components/StarsBackground";
import HeroSection1 from "./components/HeroSection1";
import ServicesSection from "./components/ServicesSection";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";
import { motion, AnimatePresence } from "framer-motion";
import ImagesPage from "./pages/ImagesPage";

function App() {
  // const overlayRef = useRef();
  // const [pageChanged, setPageChanged] = useState(false);

  // const changePage = (page) => {
  //   setPageChanged(page);
  // };

  // useEffect(() => {
  //   let currentUrl = window.location.href;
  //   console.log("URL changed", currentUrl);

  //   if (pageChanged) {
  //     overlayRef.current.style.transform = "translate(0,0)";
  //   }

  //   setPageChanged(false);
  // }, [pageChanged]);

  // useEffect(() => {
  //   const circle = document.createElement("div");
  //   const circleSize = 50;
  //   circle.classList.add("star");
  //   circle.style.width = `${circleSize}px`;
  //   circle.style.height = `${circleSize}px`;
  //   circle.style.boxShadow = " 10px 10px 100px -2px rgb(46 16 101)";

  //   document.body.appendChild(circle);

  //   window.addEventListener("mousemove", (e) => {
  //     // console.log(e);
  //     const mouseX = e.pageX;
  //     const mouseY = e.pageY;
  //     circle.style.top = `${mouseY - 0.5 * circleSize}px`;
  //     circle.style.left = `${mouseX - 0.5 * circleSize}px`;

  //   });
  // }, []);

  const location = useLocation();

  return (
    <div className="relative">
      {/* <div className="absolute -translate-x-full bg-bodyColor w-full h-full z-50"></div> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
