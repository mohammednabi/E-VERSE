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

const ImagesPage = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();
  //   const { scrollYProgress } = useScroll();

  const [imageClicked, setImageClicked] = useState(false);
  const [targetImage, setTargetImage] = useState();
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleClick = () => {
    //    const delay = 3500; // Delay in milliseconds (e.g., 3000 = 3 seconds)

    navigate("/");

    //    setTimeout(() => {
    //      // window.location.href = externalURL; // Redirect to the external URL
    //    }, delay);
  };

  const gridImages = [
    "https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/v1686795211/Space%20Connect/space-exploration-sc_fm1ysf.jpg",
    "https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/s/space/space-symposium-graphic_1920x1080.jpg?rev=2a22f490c9c644a5bf69ef3cce59813d",
    "https://universeh.eu/wp-content/uploads/2023/06/iStock-1368928330-1024x576.jpg",
    "https://starwalk.space/gallery/images/biggest-water-sourse-in-space/1920x1080.jpg",
    "https://c02.purpledshub.com/uploads/sites/48/2020/04/Things-never-knew-astronomy-e454e5d.jpg?w=1029&webp=1",
    "https://policyexchange.org.uk/wp-content/uploads/2022/09/FI.jpg",
    "https://www.wallpapers13.com/wp-content/uploads/2015/12/Real-space-wallpaper-HD-1920x1440.jpg",
    "https://gizmodo.com.au/wp-content/uploads/2022/02/14/national-space-industry-hub.jpg?quality=75",
    "https://spacenews.com/wp-content/uploads/2023/04/IRIDE.jpeg",
    "https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696464000&semt=ais",
    "https://w0.peakpx.com/wallpaper/296/443/HD-wallpaper-beautiful-univers-planets-cosmos-univers-light.jpg",
    "https://lh3.googleusercontent.com/u3Tqv_JIiC71eD0wVTU6TzHL3aLz1O-EDXMm2jw9xB3f1ZgLns_swLKTMZYqIWRIkcnBIoBP8k8CJ1yZFW3uGg3Qaq0H3c1m-vpz9cDOjUdnwW4=s750",
    "https://image.cnbcfm.com/api/v1/image/107291528-1692890566026-satellite_esa_clearspace-1_alternate.png?v=1692891475&w=929&h=523&vtcrop=y",
    "https://media.wtsp.com/assets/WTSP/images/1ca49dfc-2a17-4ff3-9d9f-9a0d4ecbf6aa/1ca49dfc-2a17-4ff3-9d9f-9a0d4ecbf6aa_1140x641.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaAMzC1v_LADaKo8voYGjrZWFXW7xoKt6NZWveVbkM5PAke0ucrZj3FfKM4kA-lmkqI4&usqp=CAU",
    "https://nineplanets.org/wp-content/uploads/2020/09/LIFT-Mars-the-Red-Planet-1600x900-1.jpg",
    "https://d3bkbkx82g74b8.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY2tcL3RyZW5kaW5nXC9zYXR1cm4tNTgxNzU1MF8xOTIwXzcxNjhkYzA4MTIxNDgwODdjYjYxNzBiNWFiZjMxOTkxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTQwMCwiZml0IjoiY292ZXIifX19",
    "https://www.nasa.gov/wp-content/uploads/2017/07/17-064.jpg",
  ];

  const handleImage = () => {
    setImageClicked(true);
    // console.log("this is my scroll", myScroll);
  };

  const cancelImage = () => {
    setImageClicked(false);
  };

  //   const handleDownLoad = () => {
  //     const link = document.createElement("a");
  //     link.href = "/src/rocket.png";
  //     link.download = "downloaded image from E-VERSE.jpg";
  //     link.click();
  //   };

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
          className=" relative  bg-black w-8/12 h-auto  aspect-video origin-center  "
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
            size="4x"
            className="text-slate-300 cursor-pointer absolute right-5 top-5"
            onClick={cancelImage}
          />
          <div className=" w-full h-full overflow-hidden ">
            <img src={targetImage} alt="" className="w-full h-auto " />
          </div>
        </motion.div>
      </motion.div>

      <div>
        <div className="relative w-full h-96 overflow-hidden">
          <img
            className="w-full h-full object-cover  "
            src="https://www.chromethemer.com/download/hd-wallpapers/dark-space-3840x2160.jpg"
            alt=""
            loading="lazy"
          />
          <div className="overlay2 w-full h-full absolute top-0 left-0 z-20 bg-bodyColor opacity-50" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-bodyColor z-10" />

          <div className="absolute w-full h-full top-0 left-0  z-30 grid grid-cols-2">
            <div className=" flex flex-col p-10 justify-center items-start gap-5">
              <motion.h1
                className=" text-7xl font-bebas text-slate-300 text-center"
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
                className=" text-xl font-bebas text-slate-500  w-96 "
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
                className="button relative cursor-pointer overflow-hidden font-bebas text-slate-300 w-1/2 text-center"
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
            <div className="w-full h-full p-5 flex flex-col justify-center items-start gap-5">
              <motion.div
                className="w-56 h-auto contrast-200"
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
                className="text-lg bg-gradient-to-b bg-clip-text from-slate-400 to-slate-600 font-bebas text-transparent border-2 border-slate-700 w-3/4 border-solid p-5 rounded-3xl"
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
                massive chunks. These rings are estimated to be as wide as
                280,000 kilometers (175,000 miles) but are exceptionally thin,
                with a thickness of only about 20 meters (66 feet).
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex gap-8 flex-wrap p-5 items-center justify-center  relative z-40">
          {gridImages.map((element, i) => (
            <ImageCard key={i} image={element} handleImage={handleImage} />
          ))}
        </div>
      </div>
    </main>
  );
};

const ImageCard = ({ image, handleImage }) => {
  return (
    <motion.div
      className="w-80 h-80 rounded-xl overflow-hidden  border-slate-300 border-1 border-solid cursor-pointer"
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
