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
import { Link } from "react-router-dom";

const Footer = () => {
  const facebookLink =
    "https://www.facebook.com/mohammed.nabil.1042/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true&locale=ar_AR";

  const githubLink = "https://github.com/mohammednabi";
  const linkedInLink = "https://www.linkedin.com/in/mohammed-nabil-790b951b4/";

  const instagramLink = "https://www.instagram.com/mo_nebo/";

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
              className="text-slate-300 text-4xl md:text-6xl"
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
              className="text-slate-500 text-xl md:text-3xl"
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
            <motion.div
              initial={{ scale: 1, rotateZ: 0 }}
              whileHover={{ scale: 1.1, rotateZ: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Link to={githubLink} target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl md:text-7xl"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 1, rotateZ: 0 }}
              whileHover={{ scale: 1.1, rotateZ: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Link to={linkedInLink} target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-4xl md:text-7xl"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 1, rotateZ: 0 }}
              whileHover={{ scale: 1.1, rotateZ: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Link to={instagramLink} target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-4xl md:text-7xl"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 1, rotateZ: 0 }}
              whileHover={{ scale: 1.1, rotateZ: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Link to={facebookLink} target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-4xl md:text-7xl"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
