import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";

const NotFound = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    //    const delay = 3500; // Delay in milliseconds (e.g., 3000 = 3 seconds)

    navigate("/");

    //    setTimeout(() => {
    //      // window.location.href = externalURL; // Redirect to the external URL
    //    }, delay);
  };

  return (
    <motion.div
      className="w-full h-screen bg-bodyColor  flex items-center flex-col gap-5 justify-center relative overflow-hidden"
      initial={{ backgroundColor: "rgb(0 ,4 ,14)" }}
      animate={{ backgroundColor: "rgb(69 ,10 ,10)" }}
      transition={{
        type: "spring",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 2,
        duration: 2,
      }}
    >
      <motion.div
        className="border-slate-300 bg-transparent border-2 z-10 border-solid p-48 px-96 rounded-3xl flex flex-col items-center justify-center gap-5"
        initial={{ x: 0, y: 0 }}
        animate={{ x: 10, y: 2 }}
        transition={{
          type: "tween",
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          // mass: 1,
          // damping: 3,
          // stiffness: 50,
          // bounce: 0.25,
        }}
      >
        <div>
          <motion.h1
            className="text-9xl text-center text-red-600  font-bebas"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 10, y: 2 }}
            transition={{
              type: "spring",
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              mass: 1,
              damping: 3,
              stiffness: 50,
              bounce: 0.25,
            }}
          >
            take care
          </motion.h1>
          <motion.h1
            className="text-5xl text-center text-slate-300 font-bebas"
            initial={{ x: 0, y: 0 }}
            animate={{ x: 10, y: 2 }}
            transition={{
              type: "spring",
              delay: 1,
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              mass: 0.5,
              damping: 3,
              stiffness: 50,
              bounce: 0.25,
            }}
          >
            you go wrong way
          </motion.h1>
        </div>

        <div
          className="button relative cursor-pointer z-50 overflow-hidden font-bebas text-slate-300 hover:text-bodyColor"
          onMouseOver={() => {
            buttonRef.current.style.transform = "translate(0,0)";
          }}
          onMouseLeave={() => {
            buttonRef.current.style.transform = "translate(-100%,0)";
          }}
          onClick={() => {
            handleClick();
            // handlePageTransition();
          }}
        >
          <div
            ref={buttonRef}
            className="transition-all duration-500 top-0 left-0  rounded-full -z-10 absolute -translate-x-full w-full  h-full bg-slate-300"
          />
          <h1 className=""> back to home</h1>
        </div>
      </motion.div>

      {/* nyazek */}
      <motion.div
        className="nayzek w-16 h-16 absolute bg-orange-500 rounded-full blur-md -top-32 left-5"
        initial={{ y: 0 }}
        animate={{ y: 1000 }}
        transition={{
          type: "spring",
          delay: 1,
          duration: 5,
          repeat: Infinity,
          mass: 2,
          //   repeatType: "mirror",
        }}
      />
      <motion.div
        className="nayzek w-16 h-16 absolute bg-red-500 rounded-full blur-md -top-32 right-5"
        initial={{ y: 0 }}
        animate={{ y: 1000 }}
        transition={{
          type: "spring",
          delay: 3,
          duration: 5,
          repeat: Infinity,
          mass: 2,
          //   repeatType: "mirror",
        }}
      />
      <motion.div
        className="nayzek w-16 h-16 absolute bg-red-500 rounded-full blur-md -top-32 left-32"
        initial={{ y: 0 }}
        animate={{ y: 1000 }}
        transition={{
          type: "spring",
          delay: 2,
          duration: 5,
          repeat: Infinity,
          mass: 2,
          //   repeatType: "mirror",
        }}
      />
      <motion.div
        className="nayzek w-16 h-16 absolute bg-orange-500 rounded-full blur-md -top-32 right-32"
        initial={{ y: 0 }}
        animate={{ y: 1000 }}
        transition={{
          type: "spring",
          delay: 5,
          duration: 5,
          repeat: Infinity,
          mass: 2,
          //   repeatType: "mirror",
        }}
      />
      {/* nyazek */}
    </motion.div>
  );
};

export default NotFound;
