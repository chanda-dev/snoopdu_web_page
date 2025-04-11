import React from "react";

import SnoopeduHeader from "../../layouts/components/SnoopeduHeader";
import ImageSlide from "../../components/ImageSlide";
import AboutUs from "./AboutUs";
import Program from "./Program";
import Detail from "./Detail";
import Founder from "./Founder";
import ContactUs from "./ContactUs";
import Footer from "../../layouts/components/Footer";
import Course from "./Course";
const HomePage = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col items-center justify-center mt-[20%] md:flex md:flex-row md:px-[10%] lg:mt-[10%]">
          <div className="w-auto md:mr-5">
            <p className="font-bold md:text-[20px] lg:text-[40px] sm:text-[25px]">
              We provide ed-tech solutions, curriculums, and educators training
              for effective STEAM learning in the classroom.
            </p>
          </div>
          <ImageSlide />
        </div>
        <section id="course">
          <Course />
        </section>
        <section
          id="about_us"
          className="bg-[#eefbff] px-[10%] mt-[10%] sm:px-[4%]"
        >
          <AboutUs />
        </section>
        <section
          id="program"
          className="bg-secondary px-[10%] mt-[5%] sm:px-[4%] sm:mt-[5%]"
        >
          <Program />
        </section>
        <Detail />
        <div className="bg-secondary px-[10%] mt-[10%]">
          <Founder />
        </div>

        <section id="contact us" className="px-[10%]">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
