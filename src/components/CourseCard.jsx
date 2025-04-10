import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { assets } from "../assets/assets";
import { IoIosStarOutline } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
const CourseCard = ({
  courseName,
  description,
  thumbnail,
  amountUser,
  instrutor,
}) => {
  return (
    <div className="w-[292px] h-[350px] border border-primary rounded-2xl cursor-pointer hover:shadow-primary hover:shadow-sm">
      <div>
        <img
          src={thumbnail}
          alt=""
          className="object-cover w-full h-[180px] rounded-t-[16px]"
        />
      </div>
      <div className="p-2">
        <div>
          <p className="text-[20px] font-semibold">{courseName}</p>
        </div>
        <div>
          <p className=" line-clamp-1">{description}</p>
        </div>
        <div className="flex items-center mt-4">
          <FaUserFriends className="mr-5 h-[24px] w-[24px]" />
          <p>{amountUser}</p>
        </div>
        <div className="flex items-center mt-2">
          <FaChalkboardTeacher className="mr-5 h-[24px] w-[24px]" />
          <p>{instrutor}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex">
            <IoIosStarOutline className="text-orange-500 h-[24px] w-[24px]" />
            <IoIosStarOutline className="text-orange-500 h-[24px] w-[24px]" />
            <IoIosStarOutline className="text-orange-500 h-[24px] w-[24px]" />
            <IoIosStarOutline className="text-orange-500 h-[24px] w-[24px]" />
            <IoIosStarOutline className="h-[24px] w-[24px]" />
          </div>
          <div>
            <IoBookmarkOutline className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
