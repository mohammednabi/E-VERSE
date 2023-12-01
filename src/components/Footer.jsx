import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="w-full h-halfScreen">
        <div className="w-full h-full grayscale">
          <img
            src="/footerLand.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-screen w-full bg-gradient-to-b from-[#1c1c1c] to-stone-950 flex flex-col justify-center items-center font-bebas gap-5">
          <div className="flex flex-col gap-2 justify-center items-center">
            <motion.h1
              className="text-slate-300 text-6xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              end of the journey
            </motion.h1>
            <motion.h2
              className="text-slate-500 text-3xl"
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
              follow us here
            </motion.h2>
          </div>
          <motion.div
            className="text-slate-300 flex gap-5"
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
            <FontAwesomeIcon icon={faGithub} size="4x" />
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
            <FontAwesomeIcon icon={faInstagram} size="4x" />
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
