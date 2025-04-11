import React from "react";
import { Link } from "react-router";
const ProfileOverLay = () => {
  return (
    <div className="bg-primary w-[200px] h-auto p-2 absolute left-1/2 translate-x-[600px]">
      <Link to={"/dashboard"}>
        <p className="bg-secondary p-2">Dashboard</p>
      </Link>
    </div>
  );
};
export default ProfileOverLay;
