import React from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
const banner = [
  assets.Banner_1,
  assets.Banner_2,
  assets.Banner_3,
  assets.Banner_4,
];

const ImageSlide = () => {
  return (
    <div className=" w-[728px] h-[400px] rounded-2xl cursor-pointer">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlide;
