import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-halfScreen">
        <div className="w-full h-full grayscale">
          <img
            src="/public/footerLand.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-screen w-full bg-gradient-to-b from-[#1c1c1c] to-stone-950 flex flex-col justify-center items-center font-bebas gap-5">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-slate-300 text-6xl">end of the journey</h1>
            <h2 className="text-slate-500 text-3xl">follow us here</h2>
          </div>
          <div className="text-slate-300 flex gap-5">
            <FontAwesomeIcon icon={faGithub} size="4x" />
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
            <FontAwesomeIcon icon={faInstagram} size="4x" />
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
