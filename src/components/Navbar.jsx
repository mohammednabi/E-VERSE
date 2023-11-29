import React, { useRef } from "react";

const Navbar = () => {
  const childRef1 = useRef();
  const childRef2 = useRef();
  const childRef3 = useRef();
  const childRef4 = useRef();
  const childRef5 = useRef();

  const refs = [childRef1, childRef2, childRef3, childRef4, childRef5];

  const navElements = ["articles", "images", "community"];
  return (
    <>
      <div className="flex text-slate-300 font-bebas w-full h-16  items-center justify-between p-10 ">
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
              key={element}
            >
              <h1>{element}</h1>
              <div
                ref={refs[index]}
                className="transition-all bg-slate-300 w-0 h-1"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
