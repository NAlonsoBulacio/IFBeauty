import React from "react";
import { item_age, item_animal, item_fresh, item_sun } from "../../assets";
const BenefitsandVideo = ({ acne }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 font-sans-200 my-6">
      <div className="w-full">
        <h1 className="text-senter font-sans-700 text-3xl text-gray-700">
          Making your skin look younger and healthier is now much easier!
        </h1>
      </div>
      <div className="w-full ">
        <p className="text-center font-sans-400 text-md text-gray-600 px-3 lg:px-[140px]">
          Not all serums provide effective results, as some brands may offer
          products with ingredients or formulas that have been proven not to
          work, simply because they are cheaper. At If Beauty, our mission is to
          provide the best serum possible, with ingredients that have been
          proven to work over our 30 years of working with our patients.
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
              src={item_animal}
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
              Rest assured, our products are cruelty-free, ensuring no harm to
              animals.
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src={item_age}
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              {acne ? "Higher self-esteem Smooth" : "Anti Aging"}
            </h1>
          </div>
          <div>
            <h1>
              Turn back the clock with our powerful anti-aging formula,
              restoring youthful radiance.
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src={item_fresh}
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
              Revitalize your skin with the invigorating pink grapefruit aroma,
              leaving you refreshed!
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src={item_sun}
              alt=""
              className="w-[50%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              {acne ? "Acne-Free " : "Sun Damage Repair"}
            </h1>
          </div>
          <div>
            <h1>
              Restore your skin's natural radiance with our acne damage repair
              solution.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsandVideo;
