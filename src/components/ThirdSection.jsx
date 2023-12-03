import React from "react";
import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <>
      <div className="  w-full h-fit">
        <motion.h1
          className="text-slate-300 text-center text-3xl md:text-6xl pt-10 uppercase font-bebas"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          enjoy your sight
        </motion.h1>
        <div className="w-full h-full rounded-3xl grid grid-cols-3 grid-rows-1 p-10 gap-2 overflow-hidden relative">
          {/* <div className="absolute w-96  h-full bg-transparent rounded-full -top-44 -left-52 border-2 border-slate-300 border-dashed"/> */}
          <motion.div
            className="bg-transparent overflow-hidden rounded-3xl w-full h-full relative z-10"
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
            <motion.img
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                type: "spring",
              }}
              alt=""
              src="https://img.freepik.com/free-photo/spaceship-orbits-dark-galaxy-glowing-blue-comet-generated-by-ai_188544-9662.jpg?w=1060&t=st=1701096294~exp=1701096894~hmac=08a9aeea72730a766141de39ebccf9c92def85803a58931dc9083da0f435ad01"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="bg-transparent overflow-hidden rounded-3xl w-full h-full relative z-10"
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
            <motion.img
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                type: "spring",
                delay: 1,
              }}
              alt=""
              src="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-3_1562-748.jpg?w=1060&t=st=1701177815~exp=1701178415~hmac=2c9a9ede7267561b9715bb101d48df95ca0fb5b8d37ffa86ee411fdc7a7345ac"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="bg-transparent rounded-3xl w-full h-full grid grid-rows-2 gap-2">
            <motion.div
              className="bg-transparent overflow-hidden rounded-3xl w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
                delay: 3,
              }}
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  type: "spring",
                  delay: 2,
                }}
                src="https://img.freepik.com/free-photo/night-sky-glows-with-iridescent-deep-space-generative-ai_188544-11285.jpg?w=1060&t=st=1701096097~exp=1701096697~hmac=145302d1a0819b272ee9dff6013c3741da0394137e7af0038d33d193d719f86f"
                alt=""
                className="w-full h-full object-cover "
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="bg-transparent overflow-hidden rounded-3xl w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
                delay: 4,
              }}
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  type: "spring",
                  delay: 3,
                }}
                src="https://img.freepik.com/premium-photo/moon-background-with-astronaut-image-ai-generated-art_856480-172.jpg?w=1060"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
