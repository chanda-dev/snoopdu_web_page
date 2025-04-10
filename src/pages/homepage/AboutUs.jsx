import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
const AboutUs = () => {
  return (
    <div className=" px-[10%] py-[5%]">
      <div className=" flex h-[60%]">
        <div className="w-[30%] mr-10">
          <p className="font-bold text-[40px]">Our mission</p>
        </div>
        <div className="w-[70%]">
          <p className=" text-[25px]">
            To bring interactive learning experiences in digital literacy and
            computer science to schools through empowering educators, developing
            robust learning curriculum, and leveraging on education technology.
          </p>
          <div className="flex justify-between">
            <div>
              <p className="text-[#08668D] text-[40px]">200</p>
              <p className=" text-[20px]">Educators</p>
            </div>
            <div>
              <p className="text-[#08668D] text-[40px]">8000</p>
              <p className=" text-[20px]">Students</p>
            </div>
            <div>
              <p className="text-[#08668D] text-[40px]">100</p>
              <p className=" text-[20px]">Classrooms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cream rounded-2xl flex justify-around items-center mt-[10%] h-[200px]">
        <div className="  w-[60%]">
          <p className="text-[30px] text-center">
            Want to start coding class at your school or workplace?
          </p>
        </div>
        <PrimaryButton text={"Partner with Us"} />
      </div>
    </div>
  );
};

export default AboutUs;
