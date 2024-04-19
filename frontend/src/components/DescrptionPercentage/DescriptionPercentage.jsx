import React, { useState, useRef } from "react";
import StatementList from ".././ProgressBar/ProgressBar";
import Slider from "react-slick";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoWithPreview from "./VideoPreview";

const DescriptionPercentage = () => {

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
    <div className="flex flex-wrap justify-between items-start h-auto lg:h-[550px] xl:space-x-0">
      <div className="w-full lg:w-[50%] flex flex-wrap justify-start items-start space-y-4">
        <h2 className="w-full font-roboto-400 text-xl text-center lg:text-left text-yellow-700">
          Estudio Clinico
        </h2>
        <h1 className="font-roboto-400 text-3xl lg:text-5xl text-center lg:text-left">
          Resultados demostrados al cabo de 90 días
        </h1>
        <p>
          Hemos desarrollado y registrado la fórmula Anti-aging Infalible con la
          Caléndula Marigold® que ha sido científicamente comprobada con
          estudios clínicos realizados por dermatólogos del Hospital
          Universitario Sagrado Corazón (Barcelona, España). Estos fueron los
          resultados:
        </p>
        <StatementList />
      </div>
      {/* <Slider {...settings} > */}
          <VideoWithPreview
            videoSrc="https://cdn.shopify.com/videos/c/o/v/1f4eab19489349e48af156e40bcf7ad5.mp4"
            posterSrc="https://cdn.accentuate.io/7105770193071/-1675836209392/poster-image-v1675924900212.png?446x766"
          />
          <VideoWithPreview
            videoSrc="https://cdn.shopify.com/videos/c/o/v/9807f673cea143efa2369e992d8d5a96.mp4"
            posterSrc="https://cdn.accentuate.io/7105770193071/-1675836209392/video-capture-1024-v1675928914418.png?360x640"
          />
        
      {/* </Slider> */}
    </div>
  );
};

export default DescriptionPercentage;
