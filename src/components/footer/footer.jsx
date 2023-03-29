import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            Cartsy Medicine - All right reserved - Design & Developed by MH, Inc
          </p>
          <div className="social">
            <BsFacebook className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
            <RiInstagramFill className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
