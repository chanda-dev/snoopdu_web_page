import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Program = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const cards = [
    { img: assets.SmartClass },
    { img: assets.Summer },
    { img: assets.Invertor },
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="px-[10%] py-[5%] font-bold">
      <div>
        <p className="text-[40px]">Our Programs</p>
        <div className="flex justify-end">
          <button
            onClick={handlePrevious}
            className="rounded-[50%] bg-primary w-[36px] h-[36px] flex justify-center items-center mr-2 cursor-pointer"
          >
            <GrFormPrevious className="w-[25px] h-[25px] text-secondary" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-[50%] bg-primary w-[36px] h-[36px] flex justify-center items-center ml-2 cursor-pointer"
          >
            <GrFormNext className="w-[25px] h-[25px] text-secondary" />
          </button>
        </div>
        <div className="mt-10">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="h-[323px] px-5 bg-secondary mb-10 flex justify-center items-center"
              >
                <img
                  src={card.img}
                  alt={`Card ${index + 1}`}
                  className="rounded-[14px] cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Program;
