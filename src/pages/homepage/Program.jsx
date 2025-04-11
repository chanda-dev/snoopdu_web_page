import React, { useRef, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowDimensions from "../../utils/useWindowDimensions";
const Program = () => {
  const { width } = useWindowDimensions();
  const sliderRef = useRef(null);
  const [amountCard, setAmountCard] = useState(2); // Use state to manage amountCard

  useEffect(() => {
    if (width < 660) {
      setAmountCard(1);
    } else if (width < 768) {
      setAmountCard(2);
    } else if (width < 1024) {
      setAmountCard(2);
    } else {
      setAmountCard(4);
    }
  }, [width]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: amountCard,
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
    <div className="px-[6%] py-[5%] font-bold md:px-0">
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
                className="h-[323px] bg-secondary mb-5 pr-10 md:pr-5"
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
