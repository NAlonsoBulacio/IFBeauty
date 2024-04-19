import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo_blanco } from "../../assets";
const VideoWithPreview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 6000,
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
    <div className="py-12 w-[100%]">
      <Slider {...settings} className="">
        <div className="w-[100%] px-2 ">
          <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
            <video
              autoPlay={true}
              muted={true}
              controls={false}
              src="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
            />
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
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
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
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
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden relative">
            <video
              autoPlay={true}
              muted={true}
              controls={false}
              src="https://cdn.shopify.com/videos/c/o/v/9807f673cea143efa2369e992d8d5a96.mp4"
            />
            <div className="absolute bottom-2 left-4 flex items-center space-x-2">
              <div className="rounded-full bg-white w-[30px] h-[30px] flex justify-center items-center overflow-hidden">
                <img src={logo_blanco} alt="" className="w-6" />
              </div>
              <h1 className="font-sans-600 text-white">IF Beauty</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default VideoWithPreview;
