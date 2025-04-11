import React from "react";
import { Link } from "react-router";
import { assets } from "../../assets/assets";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className="bg-cream h-[200px] flex flex-col justify-center items-center mt-10">
      <div className="my-5">©Copyright 2023. All Rights Reserved.</div>
      <div className="w-[96px] h-[60px] mb-10">
        <img src={assets.Logo} alt="Snoopedu Logo" srcset="" />
      </div>
    </footer>
  );
};

export default Footer;
