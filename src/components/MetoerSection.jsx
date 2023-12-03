import React from "react";
import { motion } from "framer-motion";

const MetoerSection = () => {
  return (
    <>
      <div className=" relative w-full h-halfScreen  text-slate-300 font-bebas flex overflow-hidden  justify-center items-center">
        <div className="relative z-20 flex flex-col gap-5  justify-center items-center">
          <motion.h1
            className="text-3xl md:text-6xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            Beware of meteorites
          </motion.h1>
          <motion.h2
            className="text-sm md:text-2xl w-3/4 text-center text-slate-500"
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
            Meteors can travel at high velocities, often exceeding 70,000
            kilometers per hour
          </motion.h2>
        </div>
        {/* metors */}
        <motion.div
          className=" w-28 h-2 rotate-45 absolute bg-gradient-to-r from-violet-600 to-yellow-500  shadow-2xl shadow-slate-400 rounded-full blur-sm top-1/3 -left-32"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 1700, y: 150 }}
          transition={{
            type: "spring",
            delay: 15,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 15,

            //   repeatType: "mirror",
          }}
        />
        <motion.div
          className=" w-28 h-2 rotate-45 absolute bg-gradient-to-l from-violet-600 to-yellow-500  shadow-2xl shadow-slate-400 rounded-full blur-sm top-1/3 -right-32"
          initial={{ x: 0, y: 0 }}
          animate={{ x: -1700, y: 150 }}
          transition={{
            type: "spring",
            delay: 20,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 20,

            //   repeatType: "mirror",
          }}
        />
      </div>
    </>
  );
};

export default MetoerSection;
