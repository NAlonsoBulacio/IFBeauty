import React from "react";
import { GoStar, GoStarFill } from "react-icons/go";

const Stars = ({height, starsRate}) => {
  console.log(starsRate);
  return (
    <>
      {starsRate === true ? (
        <div className={`flex ${height === "layout" ? "h-8" : "h-4"}`}>
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
          <GoStar className="text-yellow-400 " />
        </div>
      ) : (
        <div className={`flex ${height === "layout" ? "h-8" : "h-4"}`}>
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
          <GoStarFill className="text-yellow-400 " />
        </div>
      )}
    </>
  );
};

export default Stars;
