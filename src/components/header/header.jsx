import React from "react";
import Medicine from "../../assets/images/Medicine.svg";
import Card from "./card";
import User from "./user";
import { AiOutlineSearch } from "react-icons/ai";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src={Medicine} alt="Medicine" />
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
