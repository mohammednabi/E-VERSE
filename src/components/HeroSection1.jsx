import { Canvas } from "@react-three/fiber";
import React, { Suspense, lazy, useRef, useState } from "react";
// import Rocket from "./Rocket";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Rocket = lazy(() => import("./Rocket"));

const HeroSection1 = () => {
  const buttonRef = useRef();

  // const transitionRef = useRef();
  const [launch, setLaunch] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    const delay = 3500; // Delay in milliseconds (e.g., 3000 = 3 seconds)

    setTimeout(() => {
      // window.location.href = externalURL; // Redirect to the external URL
      navigate("/images");
    }, delay);
  };

  return (
    <div className="relative">
      {/* this is for medium screen */}
      <div className="hidden md:grid   md:grid-cols-2 md:grid-rows-1 gap-5 relative">
        <div className="hero    -mt-28 ">
          <motion.h1
            className="text-8xl font-bebas bg-gradient-to-b from-slate-100 to-bodyColor  bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
              delay: 1,
            }}
          >
            e-verse
          </motion.h1>
          <div className="text-xl font-bebas text-slate-500 flex flex-col gap-1 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
                delay: 2,
              }}
            >
              Discover the Cosmos ,Unleash Your Curiosity.
            </motion.h1>
            <motion.h1
              className="text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
                delay: 3,
              }}
            >
              Welcome to E-Verse.
            </motion.h1>
          </div>
          <motion.div
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
              delay: 4,
            }}
          >
            <div
              ref={buttonRef}
              className="transition-all duration-500 top-0 left-0  rounded-full -z-10 absolute -translate-x-full w-full  h-full bg-slate-300"
            />
            <h1> take a journey</h1>
          </motion.div>
        </div>
        <Suspense fallback={null}>
          <Canvas shadows flat linear>
            <Rocket launch={launch} />
          </Canvas>
        </Suspense>
      </div>
      {/* ==================== */}
      {/* this is for small screen */}
      <div
        className="md:hidden grid   grid-cols-1 grid-rows-2 gap-5 relative -z-10"
        style={{ gridTemplateRows: "minmax(0,1fr) minmax(0,auto)" }}
        // style={{ gridTemplateRows: " minmax(0,auto)" }}
      >
        {/* <Suspense fallback={null}>
          <Canvas shadows flat linear>
            <Rocket launch={launch} />
          </Canvas>
        </Suspense> */}

        <div className="hero    -mt-28 ">
          <motion.h1
            className="text-6xl md:text-9xl font-bebas bg-gradient-to-b from-slate-100 to-bodyColor  bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
              delay: 1,
            }}
          >
            e-verse
          </motion.h1>
          <div className="text-lg md:text-2xl font-bebas text-slate-500 flex flex-col gap-1 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
                delay: 2,
              }}
            >
              Discover the Cosmos ,Unleash Your Curiosity.
            </motion.h1>
            <motion.h1
              className="text-xl md:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
                delay: 3,
              }}
            >
              Welcome to E-Verse.
            </motion.h1>
          </div>
          <motion.div
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
              delay: 4,
            }}
          >
            <div
              ref={buttonRef}
              className="transition-all duration-500 top-0 left-0  rounded-full -z-10 absolute -translate-x-full w-full  h-full bg-slate-300"
            />
            <h1> take a journey</h1>
          </motion.div>
        </div>
      </div>
      {/* ============ */}
    </div>
  );
};

export default HeroSection1;
