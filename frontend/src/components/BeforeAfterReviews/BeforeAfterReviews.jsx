import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../assets/star.svg";
import {before_after, before_after_acne} from "./index";
const BeforeAfterReviews = ({acne}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
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
    <div className="gap-y-8">
      <div className="w-full flex flex-wrap justify-center items-center gap-2 my-6">
        <div className="w-full flex justify-center">
          <div className="w-full flex h-6 justify-center">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-gray-700 font-sans-700 text-3xl lg:text-5xl">
            What Women Like You Are Saying
          </h1>
        </div>
        <div className="w-full">
          <h1 className="font-sans-300 text-lg lg:text-xl">
            Rated 4.8/5 by 1,000’s Happy Customers
          </h1>
        </div>
      </div>
     {acne ? <div className="py-12">
        <Slider {...settings} className="">
          { before_after_acne?.map((rev, index) => (<div key={index} className="px-2">
            <div
            
            className="w-auto flex flex-wrap justify-center items-start gap-4 overflow-hidden">
              <img
                src={rev.img}
                alt="img_before"
                className="rounded-3xl"
              />
              <div className="w-full">
                <p>
                  {rev.description}
                </p>
              </div>
              <div className="w-full flex justify-center items-center gap-2">
              
                <p className="font-sans-600 text-lg">{rev.name}</p>
              </div>
            </div>
          </div>))}
          
        </Slider>
     </div>
     : <div className="py-12">
        <Slider {...settings} className="">
          { before_after?.map((rev, index) => (<div key={index} className="px-2">
            <div
            
            className="w-auto flex flex-wrap justify-center items-start gap-4 overflow-hidden">
              <img
                src={rev.img}
                alt="img_before"
                className="rounded-3xl"
              />
              <div className="w-full">
                <p>
                  {rev.description}
                </p>
              </div>
              <div className="w-full flex justify-center items-center gap-2">
              
                <p className="font-sans-600 text-lg">{rev.name}</p>
              </div>
            </div>
          </div>))}
          
        </Slider>
      </div>}
    </div>
  );
};

export default BeforeAfterReviews;
