import React, { useRef, useEffect, useState } from "react";
import CourseCard from "./CourseCard";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowDimensions from "../utils/useWindowDimensions";
const CourseList = ({
  courses,
  filter,
  itemFilter,
  anotherFilter,
  anotherItemFilter,
}) => {
  const { width } = useWindowDimensions();
  const sliderRef = useRef(null);
  const [amountCard, setAmountCard] = useState(2);
  useEffect(() => {
    if (width < 368) {
      setAmountCard(1);
    } else if (width < 768) {
      setAmountCard(1);
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
    arrows: false,
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const filteredCourses = courses.filter((course) => {
    if (filter === "rating") {
      return (
        course.rating >= itemFilter &&
        course[anotherFilter] === anotherItemFilter
      );
    } else if (filter && itemFilter) {
      return course[filter] === itemFilter;
    }

    return true;
  });

  return (
    <div>
      <div>
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
        <div className="mt-10 flex flex-col pl-[12%] md:pl-[10%] lg:pl-[2%]">
          <Slider ref={sliderRef} {...settings}>
            {filteredCourses.map((course, index) => (
              <div key={index}>
                <CourseCard
                  courseName={course.courseName}
                  thumbnail={course.thumbnail}
                  amountUser={course.amountUser}
                  description={course.description}
                  instrutor={course.instrutor}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
