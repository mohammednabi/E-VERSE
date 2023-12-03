import React, { useEffect, useRef, useState } from "react";
import Transition1 from "../components/Transition1";
import Navbar from "../components/Navbar";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCancel,
  faElevator,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Import the functions you need from the SDKs you need

import { getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { imagesRef } from "../components/firebaseAllApp";
import Loader from "../components/Loader";

const ImagesPage = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();
  //   const { scrollYProgress } = useScroll();

  const [imageClicked, setImageClicked] = useState(false);
  const [targetImage, setTargetImage] = useState();
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [allImages, setAllImages] = useState([]);

  const handleClick = () => {
    navigate("/");
  };

  const handleImage = () => {
    setImageClicked(true);
  };

  const cancelImage = () => {
    setImageClicked(false);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (imageClicked) {
        console.log("from window : ", e.target.src);
        setTargetImage(e.target.src);
      }
    });
  }, [imageClicked]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollYPosition(window.scrollY);
    });
  }, [imageClicked]);

  useEffect(() => {
    if (imageClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }
  }, [imageClicked]);

  useEffect(() => {
    getDocs(imagesRef)
      .then((snapshot) => {
        let images = [];
        snapshot.docs.forEach((doc) => {
          images.push({ ...doc.data(), id: doc.id });
        });

        setAllImages(images);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-screen z-50  origin-top flex justify-center items-center "
        initial={{ scaleY: 0, backgroundColor: "transparent" }}
        animate={{
          scaleY: imageClicked ? 1 : 0,
          backgroundColor: "rgba(0,0,0,.7)",
        }}
        style={{ top: `${scrollYPosition}px` }}
      >
        <motion.div
          className=" relative  bg-black w-9/12 md:w-8/12 h-auto  aspect-video origin-center  "
          initial={{ scale: 0 }}
          animate={{
            scale: imageClicked ? 1 : 0,
          }}
          transition={{
            delay: 0.5,
            type: "spring",

            damping: 10,
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl md:text-3xl  text-slate-300 cursor-pointer absolute right-5 top-5"
            onClick={cancelImage}
          />
          <div className=" w-full h-full overflow-hidden ">
            <img
              src={targetImage}
              alt=""
              className="w-full h-auto "
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>

      <div>
        <div className="relative w-full h-128 overflow-hidden">
          <img
            className="w-full h-full object-cover  "
            src="https://www.chromethemer.com/download/hd-wallpapers/dark-space-3840x2160.jpg"
            alt=""
            loading="lazy"
          />
          <div className="overlay2 w-full h-full absolute top-0 left-0 z-20 bg-bodyColor opacity-50" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-bodyColor z-10" />

          <div
            className="absolute w-full h-full top-0 left-0  z-30 grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1"
            style={{ gridTemplateRows: "repeat(2,minmax(0,auto))" }}
          >
            <div className=" flex flex-col p-10 justify-center items-start gap-5">
              <motion.h1
                className=" text-3xl md:text-4xl lg:text-7xl font-bebas text-slate-300 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeInOut",
                }}
              >
                enjoy the space
              </motion.h1>
              <motion.h2
                className=" text-sm md:text-lg lg:text-xl font-bebas text-slate-500  w-3/4 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Welcome to our Space Exploration Gallery – a gateway to the
                wonders of the cosmos. Explore, discover, and embark on a
                celestial odyssey unlike any other.
              </motion.h2>
              <motion.div
                className="button relative cursor-pointer overflow-hidden font-bebas  text-slate-300 w-1/2 text-center"
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div
                  ref={buttonRef}
                  className="transition-all duration-500 top-0 left-0  rounded-full -z-10 absolute -translate-x-full w-full  h-full bg-slate-300"
                />
                <h1>go to home</h1>
              </motion.div>
            </div>
            <div className="w-full h-1/2 md:h-full p-5 flex md:flex-col justify-center items-start gap-10 md:gap-5  ">
              <motion.div
                className=" w-32 sm:w-40 md:w-56 h-auto contrast-200"
                initial={{ x: 0, y: 0 }}
                animate={{ x: 50, y: 10 }}
                transition={{
                  type: "tween",
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <motion.img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saturnx.png/1200px-Saturnx.png"
                  alt=""
                  loading="lazy"
                  className="w-full h-full "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
              </motion.div>
              <motion.h1
                className="text-xs  sm:text-sm lg:text-lg bg-gradient-to-b bg-clip-text from-slate-400 to-slate-600 font-bebas text-transparent border-2 border-slate-700 w-1/2 md:w-3/4 border-solid p-2 md:p-5 rounded-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                Saturn `s magnificent rings are not solid but are made up of
                countless tiny particles, ranging in size from grains of sand to
                massive chunks.{" "}
                <span className="hidden sm:block">
                  These rings are estimated to be as wide as 280,000 kilometers
                  (175,000 miles) but are exceptionally thin, with a thickness
                  of only about 20 meters (66 feet).
                </span>
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex gap-5 md:gap-8 flex-wrap p-5 items-center justify-center  relative z-40 mt-0 sm:-mt-10">
          {allImages.length > 0 ? (
            allImages.map((element) => (
              <ImageCard
                key={element.id}
                image={element.img}
                handleImage={handleImage}
              />
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-halfScreen">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

const ImageCard = ({ image, handleImage }) => {
  return (
    <motion.div
      className=" w-32 md:w-80 aspect-square rounded-xl overflow-hidden  border-slate-300 border-1 border-solid cursor-pointer"
      onClick={handleImage}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={image}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover rounded-xl"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
      />
    </motion.div>
  );
};

export default Transition1(ImagesPage);
