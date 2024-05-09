import React, { useState, useRef } from "react";
import StatementList from ".././ProgressBar/ProgressBar";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoWithPreview from "./VideoPreview";
// import { block } from 'million/react';
const DescriptionPercentage = 
// block(
  () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-wrap justify-center items-start h-auto lg:h-[550px] xl:space-x-0">
      <div className="w-full lg:w-[60%] flex flex-wrap justify-start items-start space-y-4 ">
        <h2 className="w-full font-sans-400 text-xl text-left text-teal-700">
          IF Beauty
        </h2>
        <h1 className="font-sans-400 text-3xl lg:text-5xl text-left">
          90 days results
        </h1>
        <p className="text-left w-auto lg:w-[90%]">
        We have developed the Proprietory formula that its ingredients have been scientifically tested with clinical studies conducted by dermatologists in Australia. These were the results:
        </p>
        <StatementList />
      </div> 
      <VideoWithPreview />
    </div>
  );
}
// );

export default DescriptionPercentage;
