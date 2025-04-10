import React from "react";

import SnoopeduHeader from "../../layouts/components/SnoopeduHeader";
import ImageSlide from "../../components/ImageSlide";
import AboutUs from "./AboutUs";
import Program from "./Program";
import Detail from "./Detail";
import Founder from "./Founder";
import ContactUs from "./ContactUs";
import Footer from "../../layouts/components/Footer";
const HomePage = () => {
  return (
    <div className="">
      <SnoopeduHeader />
      <div className="">
        <div className="flex items-center justify-center px-[10%] mt-[10%]">
          <div className="w-[26%] mr-7">
            <p className="font-bold text-[40px]">
              We provide ed-tech solutions, curriculums, and educators training
              for effective STEAM learning in the classroom.
            </p>
          </div>
          <ImageSlide />
        </div>
        <section id="course"></section>
        <section id="about_us" className="bg-[#eefbff] px-[10%] mt-[10%]">
          <AboutUs />
        </section>
        <section id="program" className="bg-secondary px-[10%] mt-[5%]">
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
      <Footer />
    </div>
  );
};

export default HomePage;
