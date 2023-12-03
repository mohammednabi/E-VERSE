import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <>
      <div className="flex gap-5 w-full h-full justify-center items-center">
        <motion.div
          className="bg-slate-300 w-5 h-5 md:w-10 md:h-10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="bg-slate-300 w-5 h-5 md:w-10 md:h-10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.5,
          }}
        />
        <motion.div
          className="bg-slate-300 w-5 h-5 md:w-10 md:h-10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1,
          }}
        />
      </div>
    </>
  );
};

export default Loader;
