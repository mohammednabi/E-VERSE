import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Rocket from "./Rocket";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const HeroSection1 = () => {
  const buttonRef = useRef();
  // const transitionRef = useRef();
  const [launch, setLaunch] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    const delay = 3500; // Delay in milliseconds (e.g., 3000 = 3 seconds)
    const externalURL = "https://www.google.com"; // Replace with your desired external URL

    setTimeout(() => {
      // window.location.href = externalURL; // Redirect to the external URL
      navigate("/articles");
    }, delay);
  };

  // const handlePageTransition = () => {
  //   setTimeout(() => {
  //     // transitionRef.current.style.transition = "all 2s";
  //     for (let i = 0; i < 200; i++) {
  //       setTimeout(() => {
  //         transitionRef.current.style.width = `${i}%`;
  //         transitionRef.current.style.height = `${i}%`;
  //       }, 200);
  //     }
  //   }, 3000);
  // };

  return (
    <div className="relative">
      {/* <div
        ref={transitionRef}
        className="lightTransition z-10  blur-xl  bg-slate-950 absolute "
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
      /> */}
      <div className="grid grid-cols-2 gap-5 relative">
        <div className="hero    -mt-28 ">
          <h1 className="text-9xl font-bebas bg-gradient-to-b from-slate-100 to-bodyColor  bg-clip-text text-transparent">
            e-verse
          </h1>
          <div className="text-2xl font-bebas text-slate-500 flex flex-col gap-1 text-center">
            <h1>Discover the Cosmos ,Unleash Your Curiosity.</h1>
            <h1 className="text-3xl">Welcome to E-Verse.</h1>
          </div>
          <div
            className="button relative cursor-pointer overflow-hidden font-bebas"
            onMouseOver={() => {
              buttonRef.current.style.transform = "translate(0,0)";
            }}
            onMouseLeave={() => {
              buttonRef.current.style.transform = "translate(-100%,0)";
            }}
            onClick={() => {
              setLaunch(true);
              handleClick();
              // handlePageTransition();
            }}
          >
            <div
              ref={buttonRef}
              className="transition-all duration-500 top-0 left-0  rounded-full -z-10 absolute -translate-x-full w-full  h-full bg-slate-300"
            />
            <h1> take a journey</h1>
          </div>
        </div>
        <Suspense fallback={null}>
          <Canvas shadows flat linear>
            <Rocket launch={launch} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default HeroSection1;
