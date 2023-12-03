import React, { useEffect, useRef, useState } from "react";

import Transition1 from "../components/Transition1";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { articlesRef } from "../components/firebaseAllApp";
import { getDocs } from "firebase/firestore";
import Loader from "../components/Loader";
// import { allArticles } from "../components/allArticles";

const Articles = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();
  //   const { scrollYProgress } = useScroll();
  const [allArticles, setAllArticles] = useState([]);

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    getDocs(articlesRef)
      .then((snapshot) => {
        let articles = [];
        snapshot.docs.forEach((doc) => {
          articles.push({ ...doc.data(), id: doc.id });
        });

        setAllArticles(articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="relative w-full h-halfScreen flex flex-col gap-5 justify-center items-center font-bebas ">
        <div className="absolute w-full h-halfScreen -z-10 overflow-hidden">
          <motion.img
            initial={{ x: 0, y: 0, scale: 1.1 }}
            animate={{ x: 10, y: 5, scale: 1.1 }}
            transition={{
              type: "spring",
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="w-full object-cover"
            src="https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.webp?w=1600&h=900&q=88&f=c996c8bb5a1fec0ad419b2af7d5d1341"
            alt=""
            loading="lazy"
          />
          <div className="bg-gradient-to-b from-bodyColor/50 to-bodyColor absolute top-0 left-0  z-10 w-full h-full "></div>
        </div>
        <h1 className="text-3xl md:text-7xl text-slate-300">
          disocver the space
        </h1>
        <h2 className="text-center w-3/4 text-sm md:text-3xl text-slate-500">
          increase your knowledge about the space by reading some articles about
          the cusmos
        </h2>
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
      <div className="w-full h-auto flex flex-col gap-5">
        {allArticles.length > 0 ? (
          allArticles.map((article, i) => (
            <Article
              key={article.id}
              title={article.title}
              content={article.content}
              image={article.img}
              position={i}
              caption={article.caption}
              id={article.id}
            />
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-halfScreen">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

const Article = ({ title, content, image, position, caption, id }) => {
  return (
    <div className="flex justify-center ">
      {position % 2 === 0 ? (
        <div
          className=" grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 w-10/12 h-fit border-1 border-solid border-slate-300 overflow-hidden p-5  gap-5 rounded-3xl bg-gradient-to-b from-bodyColor to-black"
          style={{ gridTemplateRows: "repeat(2,minmax(0,auto))" }}
        >
          <div className="flex flex-col w-full h-full font-bebas gap-5">
            <h1 className="text-xl md:text-4xl text-slate-300">{title}</h1>
            <h2 className="text-sm md:text-2xl text-slate-500 w-full h-auto ">
              {caption}
            </h2>
            <Link to={`/article?read=${id}`}>
              <motion.h3
                className="text-slate-400 text-xl md:text-3xl cursor-pointer "
                whileHover={{ x: 5 }}
              >
                read the article ↦
              </motion.h3>
            </Link>
          </div>
          <div className="w-full h-fit  flex justify-center items-center">
            <div className="w-full h-1/2">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 w-10/12 h-fit border-1 border-solid border-slate-300 overflow-hidden p-5  gap-5 rounded-3xl bg-gradient-to-b from-bodyColor to-black"
          style={{ gridTemplateRows: "repeat(2,minmax(0,auto))" }}
        >
          <div className="w-full h-fit flex justify-center items-center">
            <div className="w-full h-full ">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-full font-bebas gap-5">
            <h1 className="text-xl md:text-4xl text-slate-300">{title}</h1>
            <h2 className="text-sm md:text-2xl text-slate-500 w-full h-auto ">
              {caption}
            </h2>
            <Link to={`/article?read=${id}`}>
              <motion.h3
                className="text-slate-400 text-xl md:text-3xl cursor-pointer "
                whileHover={{ x: 5 }}
              >
                read the article ↦
              </motion.h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transition1(Articles);
