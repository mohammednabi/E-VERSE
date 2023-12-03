import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Transition1 from "./Transition1";
import { getDocs } from "firebase/firestore";
import { articlesRef } from "./firebaseAllApp";
import Loader from "./Loader";
import { motion } from "framer-motion";

const SingleArticle = () => {
  const [targetArticle, setTargetArticle] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramValue = searchParams.get("read");

    getDocs(articlesRef)
      .then((snapshot) => {
        let articles = [];
        snapshot.docs.forEach((doc) => {
          articles.push({ ...doc.data(), id: doc.id });
        });

        const target = articles.find((article) => {
          return article.id === paramValue;
        });

        setTargetArticle(target);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {targetArticle ? (
        <Article article={targetArticle} />
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <Loader />
        </div>
      )}
      <div className="font-bebas p-5">
        <Link to={`/articles`}>
          <motion.h3
            className="text-slate-400 text-xl md:text-3xl cursor-pointer "
            whileHover={{ x: 5 }}
          >
            read more Articles ↦
          </motion.h3>
        </Link>
      </div>
    </>
  );
};

const Article = ({ article }) => {
  return (
    <div className="flex flex-col gap-5 w-full h-auto p-5">
      <div className="w-full h-1/2 md:h-halfScreen overflow-hidden rounded-xl flex justify-center">
        <img
          className="w-auto h-1/2 md:h-full object-contain  border-2 border-slate-300 border-solid rounded-xl"
          src={article.img}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="w-full h-auto font-bebas p-5 border-1 border-slate-300 border-dashed flex flex-col gap-5">
        <h1 className="text-slate-300 text-3xl md:text-7xl">{article.title}</h1>
        <h2 className="text-slate-500 text-sm md:text-3xl">
          {article.content}
        </h2>
      </div>
    </div>
  );
};

export default Transition1(SingleArticle);
