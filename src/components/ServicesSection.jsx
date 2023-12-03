import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faBinoculars,
  faEarthOceania,
  faShuttleSpace,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Explore the Cosmos",
      content:
        "Discover stunning images, fascinating facts, and the latestdiscoveries about our universe.",
      icon: (
        <FontAwesomeIcon
          icon={faShuttleSpace}
          className="text-5xl md:text-7xl "
        />
      ),
    },
    {
      title: "Astro Photography",
      content:
        "Our website features a curated collection of stunning images, showcasing the beauty and grandeur of the cosmos.",
      icon: (
        <FontAwesomeIcon
          icon={faBinoculars}
          className="text-5xl md:text-7xl  "
        />
      ),
    },
    {
      title: "Community  ",
      content:
        "Connect with fellow space enthusiasts in our vibrant community. Join discussions, share your experiences, and exchange knowledge with like-minded individuals",
      icon: (
        <FontAwesomeIcon
          icon={faEarthOceania}
          className="text-5xl md:text-7xl  "
        />
      ),
    },
  ];

  return (
    <>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-10 md:p-10 p-10 pt-0 "
        transition={{ delayChildren: 1 }}
      >
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            title={s.title}
            content={s.content}
            icon={s.icon}
          />
        ))}
      </motion.div>
    </>
  );
};

const ServiceCard = ({ title, content, icon }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      // animate={{
      //   // y: [0, -50, 0, 50, 0],
      //   y: -10,
      //   // scale: [1, 1.1, 1, 1.1, 1],
      // }}
      transition={{
        // times: [1, 3, 1, 3, 1],
        duration: 2,
        // repeat: Infinity,
        type: "spring",

        // repeatType: "mirror",
        mass: 2,
        damping: 3,
        stiffness: 50,
        bounce: 0.25,
      }}
      // whileHover={{ y: -10 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      className="service-card"
    >
      <div className="mt-10">{icon}</div>
      <div className="flex flex-col items-center align-middle my-auto">
        <h1 className="capitalize font-bebas text-xl md:text-3xl">{title}</h1>
        <h2 className="text-sm text-center capitalize text-slate-500">
          {content}
        </h2>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
