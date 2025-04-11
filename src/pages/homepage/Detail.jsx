import React from "react";
import { assets } from "../../assets/assets";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-scroll";
const Detail = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row">
      <div className="bg-[#F1FFF2] border-r border-[#E1F1E8]  py-10 px-[5%] sm:px-[2%]">
        <div className="flex sm:flex sm:flex-col">
          <img
            src={assets.MakerSpace}
            alt=""
            className="w-[40px] h-[40px] mr-5"
          />
          <p className="font-semibold text-[30px]">Makerspace</p>
        </div>
        <div className=" py-10 ">
          <p className="text-[16px] text-left">
            Students and Educators, join us in the makerspace to turn every
            ideas into tangible prototype and projects that will spark your
            innovative and entrepreneurial journey.
          </p>
        </div>
        <Link
          to={"https://web.facebook.com/snoopedu.learn?_rdc=1&_rdr#"}
          target="_blank"
        >
          <PrimaryButton text={"Learn more..."} />
        </Link>
      </div>
      <div className="bg-[#F1FFF2] border-r border-[#E1F1E8] px-[5%] py-10 sm-px[2%]">
        <div className="flex sm:flex sm:flex-col">
          <img
            src={assets.Curriculumn}
            alt=""
            className="w-[40px] h-[40px] mr-5"
          />
          <p className="font-semibold text-[30px]">
            Competencies Based Curriculum
          </p>
        </div>
        <div className=" py-10">
          <p className="text-[16px] text-left">
            Turn our ICT class into an interactive and explorative learning
            experience that build essential skills for future readiness with our
            students centric project based curriculum.
          </p>
        </div>

        <PrimaryButton text={"Learn more..."} />
      </div>
      <div className="bg-[#F1FFF2] border-r border-[#E1F1E8] px-[5%] py-10 sm:px-[2%]">
        <div className="flex sm:flex sm:flex-col">
          <img
            src={assets.MakerSpace}
            alt=""
            className="w-[40px] h-[40px] mr-5"
          />
          <p className="font-semibold text-[30px]">
            Schools Digital Transformation
          </p>
        </div>
        <div className=" py-10">
          <p className="text-[16px] text-left">
            Building capacity for educators and school leadership to lead
            sustainable digital transformation initiative in school with focus
            on community building and building environment for future leanring.
          </p>
        </div>
        <Link
          to={
            "https://www.canva.com/design/DAGYs3zcsSc/wlf1ga8ngmk04zJ_8_iRDA/edit"
          }
          target="_blank"
        >
          <PrimaryButton text={"Learn more..."} />
        </Link>
      </div>
    </div>
  );
};

export default Detail;
