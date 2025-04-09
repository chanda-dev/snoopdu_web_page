import React from "react";
import { Link } from "react-router";
import { assets } from "../../assets/assets";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
const SnoopeduHeader = () => {
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
    <header
      className={`${
        isScrolled ? "bg-cream " : "bg-transparent items-center"
      } "my-10 h-24 flex justify-around items-center sticky z-99"`}
    >
      <Link>
        <div className="w-[96px] h-[60px]">
          <img src={assets.Logo} alt="Snoopedu Logo" srcset="" />
        </div>
      </Link>
      <div className="flex justify-around w-[40%]  font-semibold">
        <Link className="hover:underline hover:decoration-2">
          <p>About Us</p>
        </Link>
        <Link className="hover:underline hover:decoration-2">
          <p>Programs</p>
        </Link>
        <Link className="hover:underline hover:decoration-2">
          <p>Contact</p>
        </Link>
        <Link className="hover:underline hover:decoration-2">
          <p>Course</p>
        </Link>
      </div>
      <Link>
        <FaUserCircle className="w-10  h-10 text-primary" />
      </Link>
    </header>
  );
};

export default SnoopeduHeader;
