import React from "react";
import { FaLeaf } from "react-icons/fa";
const BenefitsandVideo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full">
        <h1 className="text-senter font-sans-700 text-3xl text-gray-700">
        Making your skin look younger and healthier is now much easier!
        </h1>
      </div>
      <div className="w-full ">
        <p className="text-center font-sans-400 text-md text-gray-600 px-3">
        Not all creams provide effective results, as some brands may offer products with ingredients or formulas that have been proven not to work, simply because they are cheaper. At If Beauty, our mission is to provide the best cream possible, with ingredients that have been proven to work over our 30 years of working with our patients.
        </p>
      </div>
      <div className="w-full flex justify-center py-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.shopify.com/videos/c/o/v/7e8ec8551dd14572bc6f291c3a33378e.mp4"
          className="w-[80%] lg:w-[30%] rounded-full"
        />
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://res.cloudinary.com/doczyujqf/image/upload/v1713798991/Doctor%20Sales/IF/notesting_ssbvod.png"
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              No Animal Testing 
            </h1>
          </div>
          <div>
            <h1>
            Rest assured, our products are cruelty-free, ensuring no harm to animals.
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://res.cloudinary.com/doczyujqf/image/upload/v1713799015/Doctor%20Sales/IF/skincare-svgrepo-com_vptcqd.svg"
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              Anti Aging
            </h1>
          </div>
          <div>
            <h1>
            Turn back the clock with our powerful anti-aging formula, restoring youthful radiance.
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://res.cloudinary.com/doczyujqf/image/upload/v1713798990/Doctor%20Sales/IF/smells_sjdhca.png"
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              Fresh Smell
            </h1>
          </div>
          <div>
            <h1>
              
Revitalize your skin with the invigorating pink grapefruit aroma, leaving you refreshed!
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://res.cloudinary.com/doczyujqf/image/upload/v1713799139/Doctor%20Sales/IF/sun_i0zfqp.png"
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
            Sun Damage Repair
            </h1>
          </div>
          <div>
            <h1>
            Restore your skin's natural radiance with our sun damage repair solution.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsandVideo;
