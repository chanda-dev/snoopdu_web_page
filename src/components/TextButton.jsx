import React from "react";

const TextButton = ({ text, onClick }) => {
  return (
    <div className=" cursor-pointer">
      <button className="cursor-pointer " onClick={onClick}>
        <p className="text-primary text-[20px]">{text}</p>
      </button>
    </div>
  );
};

export default TextButton;
