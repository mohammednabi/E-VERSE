import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const childRef1 = useRef();
  const childRef2 = useRef();
  const childRef3 = useRef();
  const childRef4 = useRef();
  const childRef5 = useRef();

  const refs = [childRef1, childRef2, childRef3, childRef4, childRef5];

  const [menuTaped, setMenuTaped] = useState(false);

  const navElements = [
    { title: "articles", link: "/articles" },
    { title: "images", link: "/images" },
    { title: "community", link: "/community" },
  ];
  return (
    <>
      {/* this is medium screen navbar */}
      <div className="hidden md:flex text-slate-300 font-bebas w-full h-16  items-center justify-between p-10 ">
        <div className="logo flex gap-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              fill="rgb(203 213 225)"
              d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
            ></path>
            <path
              fill="rgb(203 213 225)"
              d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            ></path>
          </svg>
          <h1 className="uppercase text-3xl font-bold font-bebas">e-verse</h1>
        </div>
        <div className="flex items-center justify-center gap-5 text-xl font-smooch font-semibold capitalize ">
          {navElements.map((element, index) => (
            <div
              className="flex flex-col gap-1"
              onMouseMove={() => {
                refs[index].current.style.width = "100%";
              }}
              onMouseLeave={() => {
                refs[index].current.style.width = "0";
              }}
              key={element.title}
            >
              <Link to={element.link}>
                <h1>{element.title}</h1>
              </Link>

              <div
                ref={refs[index]}
                className="transition-all bg-slate-300 w-0 h-1"
              />
            </div>
          ))}
        </div>
      </div>
      {/* == this is medium screen navbar== */}

      {/* this is small screen navbar */}
      <div className="md:hidden flex text-slate-300 font-bebas w-full h-16  items-center justify-between p-10 ">
        <div className="logo flex gap-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              fill="rgb(203 213 225)"
              d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
            ></path>
            <path
              fill="rgb(203 213 225)"
              d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            ></path>
          </svg>
          <h1 className="uppercase text-xl font-bold font-bebas">e-verse</h1>
        </div>
        <motion.div className="relative ">
          <motion.div
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: menuTaped ? 180 : 0 }}
          >
            <FontAwesomeIcon
              icon={faList}
              className="cursor-pointer text-2xl"
              onClick={() => {
                setMenuTaped(!menuTaped);
              }}
            />
          </motion.div>
          <motion.div
            className="absolute bg-slate-300 w-auto z-50 h-auto right-0 rounded-sm p-3 text-3xl origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: menuTaped ? 1 : 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {navElements.map((el, i) => (
              <Link key={i} to={el.link}>
                <h1 className="text-bodyColor">{el.title}</h1>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/*== this is small screen navbar ==*/}
    </>
  );
};

export default Navbar;
