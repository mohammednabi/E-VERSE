import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ReadArticlesSection = ({}) => {
  const buttonRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    //    const delay = 3500; // Delay in milliseconds (e.g., 3000 = 3 seconds)

    navigate("/articles");

    //    setTimeout(() => {
    //      // window.location.href = externalURL; // Redirect to the external URL
    //    }, delay);
  };

  const articlesCards = [
    {
      title: "how to avoid the meteor",
      image:
        "https://daily.jstor.org/wp-content/uploads/2019/03/how_to_avoid_a_meteor_1050x700.jpg",
      position: "top-0 left-0 z-10",
      delay: 1.5,
    },
    {
      title: "NASA's Perseverance Rover: Unveiling Mars' Secrets",
      image:
        "https://media.istockphoto.com/id/1300652810/photo/mars-planet-3d-render-illustration-high-detailed-surface-features.jpg?s=612x612&w=0&k=20&c=V11fm3CB2JD1nmndQRTgBK-w4NOp72DXdxiOj2b9SHk=",
      position: "top-20 left-16 z-30",
      delay: 3,
    },
    {
      title: "our solar system will be in danger in few years ",
      image:
        "https://www.timeforkids.com/wp-content/uploads/2018/08/Planets-HERO.jpg",
      position: "top-8 left-60 z-20",
      delay: 2,
    },
    {
      title: "oxford : aliens may be more like us than we think",
      image:
        "https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/Aliens.jpg",
      position: "top-20 right-16 z-20",
      delay: 3.5,
    },
    {
      title: "new vichile was launched by nasa",
      image:
        "https://global.jaxa.jp/projects/rockets/h3/images/h3_main_001.jpg",
      position: "top-0 right-0 z-10",
      delay: 2.5,
    },
  ];

  return (
    <>
      <div className="grid h-128  grid-cols-2 p-10  mt-20">
        <div className="flex justify-center items-center flex-col gap-5">
          <motion.h1
            className="text-6xl text-slate-300 uppercase font-bebas"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            read some articles
          </motion.h1>
          <motion.h2
            className="text-xl text-slate-500 font-bebas text-center w-8/12"
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
            increase your knowledge about space and cosmos , read some articles
            that are full of valuable information
          </motion.h2>
          <motion.div
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
            <h1 className="">take a look</h1>
          </motion.div>
        </div>
        <div className="relative">
          {articlesCards.map((article, i) => (
            <div key={i} className={`absolute ${article.position} `}>
              <ArticleCard
                title={article.title}
                image={article.image}
                delay={article.delay}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ArticleCard = ({ title, image, delay }) => {
  return (
    <motion.div
      className="w-72 h-96 bg-bodyColor shadow-slate-900 shadow-2xl rounded-3xl  flex flex-col gap-5 justify-start bg-transparent-300 border-1 border-slate-300 border-solid "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="h-4/6 w-full  rounded-3xl  top-0 ">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-3xl object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-bebas  text-slate-300 text-center ">
          {title}
        </h1>
      </div>
    </motion.div>
  );
};

export default ReadArticlesSection;
