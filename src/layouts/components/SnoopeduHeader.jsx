import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { FaUserCircle } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { MdMenu } from "react-icons/md";
const SnoopeduHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 768) {
      setMenuOpen(false);
    }
  }, [width]);
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
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return width > 768 ? (
    <header
      className={`${
        isScrolled ? "bg-cream shadow-md" : "bg-transparent"
      } fixed top-0 left-0 w-full h-20 flex items-center justify-between px-10 z-50 transition-all duration-300`}
    >
      <a href="/" rel="noopener noreferrer">
        <div className="w-[96px] h-[60px] cursor-pointer">
          <img src={assets.Logo} alt="Snoopedu Logo" />
        </div>
      </a>
      <div className="flex justify-around w-[60%] font-semibold">
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
        <a
          href="/dashboard"
          className="hover:underline hover:decoration-2 cursor-pointer"
        >
          <p>Dashboard</p>
        </a>
      </div>

      <a className="cursor-pointer">
        <FaUserCircle className="w-10 h-10 text-primary" />
      </a>
    </header>
  ) : (
    <header className="absolute z-99">
      {menuOpen ? (
        <div className="bg-cream flex flex-col w-[400px] h-auto relative p-5">
          <div className="flex justify-between">
            <FaUserCircle className="w-10 h-10 text-primary" />
            <a href="/" rel="noopener noreferrer">
              <div className="w-[96px] h-[60px] cursor-pointer">
                <img src={assets.Logo} alt="Snoopedu Logo" />
              </div>
            </a>
            <MdMenu
              className="w-[36px] h-[36px] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="justify-between font-semibold">
            <div className="m-2">
              <ScrollLink
                to="course"
                smooth={true}
                duration={500}
                className="hover:underline hover:decoration-2 cursor-pointer"
              >
                <p className="bg-primary w-full p-5 rounded-[5px]">Course</p>
              </ScrollLink>
            </div>
            <div className="m-2">
              <ScrollLink
                to="about_us"
                smooth={true}
                duration={500}
                className="hover:underline hover:decoration-2 cursor-pointer"
              >
                <p className="bg-primary w-full p-5 rounded-[5px]">About Us</p>
              </ScrollLink>
            </div>
            <div className="m-2">
              <ScrollLink
                to="program"
                smooth={true}
                duration={500}
                className="hover:underline hover:decoration-2 cursor-pointer"
              >
                <p className="bg-primary w-full p-5 rounded-[5px]">Programs</p>
              </ScrollLink>
            </div>
            <div className="m-2">
              <ScrollLink
                to="contact us"
                smooth={true}
                duration={500}
                className="hover:underline hover:decoration-2 cursor-pointer"
              >
                <p className="bg-primary w-full p-5 rounded-[5px]">Contact</p>
              </ScrollLink>
            </div>
          </div>
          <div className="mx-2">
            <a
              className="hover:underline hover:decoration-2 cursor-pointer"
              href="/dashboard"
            >
              <p className="bg-primary w-full p-5 rounded-[5px] font-semibold">
                Dashboard
              </p>
            </a>
          </div>
        </div>
      ) : (
        <MdMenu
          className="w-[36px] h-[36px] cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default SnoopeduHeader;
