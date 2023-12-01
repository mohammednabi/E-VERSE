import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Transition1 = (OgComponent) => {
  const TransitionComponent = () => (
    <>
      {/* first transition */}
      {/* <motion.div
        className="slide-in fixed top-0 left-0 w-full h-full bg-slate-700 origin-bottom "
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
      />
      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-full bg-slate-700 origin-top "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
      /> */}
      {/* ===first transition=== */}

      {/* second transition */}
      <motion.div
        className="bg-stone-950 fixed top-0 left-0 w-full h-full blur-3xl origin-center rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 0 }}
        exit={{ scale: 3.5 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
      />
      <motion.div
        className="bg-stone-950  fixed top-0 left-0 w-full h-full blur-3xl  origin-center rounded-full"
        initial={{ scale: 3.5 }}
        animate={{ scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
      />

      {/* ==second transition== */}

      {/* third transition */}
      {/* <motion.div
        className="bg-orange-300 fixed top-0 left-0 w-full h-full blur-3xl origin-center "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
      />
      <motion.div
        className="bg-orange-300  fixed top-0 left-0 w-full h-full blur-3xl origin-center"
        initial={{ opacity: 1, scale: 0 }}
        animate={{ opacity: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ zIndex: 100 }}
      /> */}
      {/*== third transition ==*/}

      {/* the component of the page  */}
      <OgComponent />
      {/*== the component of the page == */}
    </>
  );

  return TransitionComponent;
};

export default Transition1;
