import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo_blanco } from "../../assets";
import VideoPlayer from "./VideoPlayer";
// import { block } from 'million/react';

const VideoWithPreview =
//  block(
  () => {
  const VideosUrl = [
    "https://res.cloudinary.com/doczyujqf/video/upload/v1714653349/IF%20Beauty/I_loveee_skin_care_skincare_nightskincare_vitaminc_retinol_niacinamide_moisturizer_fnvxby.mp4",
    "https://res.cloudinary.com/doczyujqf/video/upload/v1714653684/IF%20Beauty/iF.iPSO_FACTO_I_have_been_trialling_these_products_from_iPSO_FACTO_and_I_am_loving_them_especially_this_mist_Let_me_tell_you_about_them_and_the_best_bit_I_have_a_discount_code_for_you_4021548D_l51ncg.mp4",
     "https://res.cloudinary.com/doczyujqf/video/upload/v1714653801/IF%20Beauty/Using_our_IF_Beauty_-_clean_Australian_skincare_brand._Great_little_exfoliant_and_peel_to_use_in_your_weekly_skin_care_routine._More_videos_to_follow_the_scrub_and_removal_skin_skincareroutine_skinca._ssh6y6.mp4",
     "https://res.cloudinary.com/doczyujqf/video/upload/v1714653851/IF%20Beauty/HOLd_UP_I_found_prob_the_best_smelling_mask_EVER_and_i_am_just_saying_this_Blueberry_Oxygen_Mask_Cranberry_Glycolic_From_ifbeautyaus_15_off_using_my_CODE_store_wide_40215DI_have_NEVER_EVER_1_esdomv.mp4",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className=" py-12 w-full lg:w-[40%] h-auto lg:h-[550px]">
      <Slider {...settings} className="">
        {VideosUrl?.map((video, index) => (
          <VideoPlayer url={video} key={index}/>
        ))}
        {/* { VideosUrl?.map((video) => (
          <VideoPlayer url={video} />
        ))
        } */}
        {/* <div className="w-[100%] lg:w-[30%] px-2 ">
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
        </div> */}
        {/* <div className="w-[100%] lg:w-[30%] px-2">
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
        </div> */}
        {/* <div className="w-[100%] lg:w-[30%] px-2">
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
        </div> */}
        {/* <div className="px-2">
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
        </div> */}
      </Slider>
    </div>
  );
}
// );

export default VideoWithPreview;
