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
              src="https://cdn.accentuate.io/7105770193071/21150527029423/Easy-to-use-(7069bc)-v1644651560187.png?200x200"
              alt=""
              className="w-[70%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              Easy to Use
            </h1>
          </div>
          <div>
            <h1>
              Simply rub it to your skin in circular motion for a hair-free
              body!
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://cdn.accentuate.io/7105770193071/21150527815855/Non-Violent-(7069bc)-v1644651652333.png?200x200"
              alt=""
              className="w-[70%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              Easy to Use
            </h1>
          </div>
          <div>
            <h1>
              Simply rub it to your skin in circular motion for a hair-free
              body!{" "}
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://cdn.accentuate.io/7105770193071/21150527291567/Peace-of-Mind-(7069bc)-v1644651643275.png?200x200"
              alt=""
              className="w-[70%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              Easy to Use
            </h1>
          </div>
          <div>
            <h1>
              Simply rub it to your skin in circular motion for a hair-free
              body!{" "}
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap justify-center px-2 lg:px-8">
          <div className="w-auto flex justify-center">
            <img
              src="https://cdn.accentuate.io/7105770193071/21150527586479/Travel-Safe-(7069bc)-v1644651647656.png?200x200"
              alt=""
              className="w-[70%]"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-center text-lg font-sans-700 text-gray-700">
              Easy to Use
            </h1>
          </div>
          <div>
            <h1>
              Simply rub it to your skin in circular motion for a hair-free
              body!{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsandVideo;
