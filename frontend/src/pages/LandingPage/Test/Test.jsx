import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { product, product2, product3 } from "../../../assets/index";

const Test = () => {
  const [images] = useState({
    img1: product,
    img2: product2,
    img3: product3,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
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
          slidesPerRow: 1,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <h1>HOLA</h1>
      <div className="px-2 w-[30%]">
        <img src={images.img1} alt="" />
      </div>
      <div className="py-12 w-[100%]">
        <Slider {...settings} className="">
          <div className="w-[100%] px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <video
                autoPlay={true}
                muted={true}
                controls={false}
                src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
              />
            </div>
          </div>
          <div className="w-[100%] px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
              <video
                autoPlay={true}
                muted={true}
                controls={false}
                src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
              />
              <div className="absolute bottom-2 left-4 flex">
                <img src="" alt="" /> IF Beauty
              </div>
            </div>
          </div>
          <div className="w-[100%] px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <video
                autoPlay={true}
                muted={true}
                controls={false}
                src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <video
                autoPlay={true}
                muted={true}
                controls={false}
                src="https://cdn.shopify.com/videos/c/o/v/9807f673cea143efa2369e992d8d5a96.mp4"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Test;
