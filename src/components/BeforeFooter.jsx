import React from "react";
import { motion } from "framer-motion";

const BeforeFooter = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center font-bebas gap-5 mt-10">
        <div className="flex gap-5  justify-center items-center w-fit overflow-hidden">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 40 40"
            initial={{ scale: 0, rotateZ: 0 }}
            whileInView={{ scale: 1, rotateZ: 720 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <path
              fill="rgb(203 213 225)"
              d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
            ></path>
            <path
              fill="rgb(203 213 225)"
              d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            ></path>
          </motion.svg>
          <motion.h1
            className="text-slate-300 text-5xl md:text-6xl"
            initial={{ x: -192 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 2 }}
          >
            e-verse
          </motion.h1>
        </div>
        <motion.h2
          className="text-slate-500 text-2xl md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 4 }}
        >
          live your journey
        </motion.h2>
      </div>
    </>
  );
};

export default BeforeFooter;
