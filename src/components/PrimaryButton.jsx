import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div className=" border border-primary rounded-[7px] py-[10px] px-[20px] hover:bg-primary cursor-pointer">
      <button className="cursor-pointer">{text}</button>
    </div>
  );
};

export default PrimaryButton;
