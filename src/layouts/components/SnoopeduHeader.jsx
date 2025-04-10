import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { FaUserCircle } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const SnoopeduHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
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
    <header
      className={`${
        isScrolled ? "bg-cream shadow-md" : "bg-transparent"
      } fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 z-50 transition-all duration-300`}
    >
      <ScrollLink to="home" smooth={true} duration={500}>
        <div className="w-[96px] h-[60px] cursor-pointer">
          <img src={assets.Logo} alt="Snoopedu Logo" />
        </div>
      </ScrollLink>
      <div className="flex justify-around w-[40%] font-semibold">
        <ScrollLink
          to="course"
          smooth={true}
          duration={500}
          className="hover:underline hover:decoration-2 cursor-pointer"
        >
          <p>Course</p>
        </ScrollLink>
        <ScrollLink
          to="about_us"
          smooth={true}
          duration={500}
          className="hover:underline hover:decoration-2 cursor-pointer"
        >
          <p>About Us</p>
        </ScrollLink>
        <ScrollLink
          to="program"
          smooth={true}
          duration={500}
          className="hover:underline hover:decoration-2 cursor-pointer"
        >
          <p>Programs</p>
        </ScrollLink>
        <ScrollLink
          to="contact us"
          smooth={true}
          duration={500}
          className="hover:underline hover:decoration-2 cursor-pointer"
        >
          <p>Contact</p>
        </ScrollLink>
      </div>
      <a>
        <FaUserCircle className="w-10 h-10 text-primary" />
      </a>
    </header>
  );
};

export default SnoopeduHeader;
