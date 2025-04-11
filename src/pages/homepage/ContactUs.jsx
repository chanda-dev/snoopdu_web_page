import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const ContactUs = () => {
  return (
    <div className="bg-[#eefbff]  mt-[10%] p-10">
      <div>
        <p className="text-[40px] font-bold">Contact Us</p>
        <p className="text-[20px]">
          Contact us for consultancy and partnership
        </p>
        <div className="flex flex-col md:flex md:flex-row md:justify-around">
          <div className="bg-secondary rounded-[12px] p-[15px] min-h-[108px] w-auto mb-2">
            <p className="text-[20px] font-bold">Email</p>
            <p className="text-[16px]">poumsocheata@gmail.com</p>
          </div>
          <div className="bg-secondary rounded-[12px] p-[15px] min-h-[108px] w-auto mb-2">
            <p className="text-[20px] font-bold">Email</p>
            <p className="text-[16px]">poumsocheata@gmail.com</p>
          </div>
          <div className="bg-secondary rounded-[12px] p-[15px] min-h-[108px] w-auto">
            <p className="text-[20px] font-bold">Email</p>
            <p className="text-[16px]">poumsocheata@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[5%]">
          <div>
            <p className="text-[20px] font-bold">Follow Us</p>
          </div>
          <div className="flex ">
            <Link
              to={
                "https://web.facebook.com/snoopedu.learn/?ref=page_internal&_rdc=1&_rdr#"
              }
              className="w-[26px] h-[26px] mr-5"
              target="_blank"
            >
              <FaFacebook className="w-full h-full" />
            </Link>
            <Link
              to={"https://www.instagram.com/snoopedu.inc?utm_medium=copy_link"}
              className="w-[26px] h-[26px] mr-5"
              target="_blank"
            >
              <FaInstagramSquare className="w-full h-full" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/chansocheatapoum/"}
              className="w-[26px] h-[26px]"
              target="_blank"
            >
              <FaLinkedin className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
