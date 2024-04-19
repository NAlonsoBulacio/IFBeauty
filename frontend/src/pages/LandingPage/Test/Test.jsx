import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  calendar,
  shipping,
  returning,
  best_seller,
  product,
  product2,
  product3,
} from "../../../assets/index";
const Test = () => {
  const [images, setImages] = useState({
    img1: product,
    img2: product2,
    img3: product3,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h1>HOLA</h1>
      <div className="px-2 w-[30%]">
        <img src={images.img1} alt="" className="" />
      </div>
      <div className="w-[30%] flex lg:hidden">
        <Slider {...settings}>
        <div className="px-2 w-[30%]">
            <img src={images?.img1} alt="" />
          </div>
          <div className="px-2 w-[30%]">
            <img src={images.img1} alt="" />
          </div>
          <div className="px-2 w-[30%]">
            <img src={images.img1} alt="" />
          </div>
        </Slider>
      </div>
      <div className="py-12 w-[30%]">
        <Slider {...settings} className="">
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img
                src={product}
                alt="img_before"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img
                src={product2}
                alt="img_before"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img
                src={product3}
                alt="img_before"
              />
            </div>
          </div>
        </Slider>
        </div>
    </div>
  );
};

export default Test;
