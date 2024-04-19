import React, { useState } from "react";
import star from "../../assets/star.svg";
import QuestionsAnswersHome from "../QuestionsAnswersHome/QuestionsAnswersHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  calendar,
  shipping,
  returning,
  best_seller,
  product,
  product2,
  product3,
} from "../../assets/index";

const ProductDetail = () => {
  const [images, setImages] = useState({
    img1: product,
    img2: product2,
    img3: product3,
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [selectedVariant, setSelectedVariant] = useState(2);
  const variants = [
    {
      id: 1,
      variant: "Single Pack",
      price: 23,
      compare_price: 40,
      free_shipping: false,
    },
    {
      id: 2,
      variant: "Double Pack",
      price: 35,
      compare_price: 60,
      free_shipping: true,
    },
    {
      id: 3,
      variant: "Triple Pack",
      price: 43,
      compare_price: 70,
      free_shipping: true,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleSelectedVariant = (variant) => {
    setSelectedVariant(variant);
  };
  return (
    <div className="bg-white flex flex-wrap lg:flex-nowrap py-4 lg:py-10">
      <div className="block lg:hidden py-8 w-[100%]">
        <Slider {...settings} className="">
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img src={product} alt="img_before" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img src={product2} alt="img_before" />
            </div>
          </div>
          <div className="px-2">
            <div className="w-auto flex flex-wrap justify-center items-start gap-4 rounded-xl overflow-hidden">
              <img src={product3} alt="img_before" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="hidden lg:flex flex-col gap-6 lg:w-2/4">
        <div className="hidden lg:block sticky top-0">
          <img
            src={activeImg}
            alt=""
            className="w-full h-auto aspect-square object-cover rounded-xl"
          />
          <div className="h-24 flex justify-between">
            <div className="flex flex-row justify-center space-x-6 h-24 overflow-hidden">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-full justify-start items-start w-full lg:w-1/2 px-0 lg:px-10 space-y-2">
        <div className="w-full flex h-6 ">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <h1 className="text-gray-500 text-xl mx-2">(1319 Reviews)</h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <h1 className="text-5xl text-left text-gray-800 font-sans-600">
            Collagen Boost and Repair Vit C + Peptides + Stem Cells
          </h1>
        </div>
        <div className="w-full flex justify-start items-start text-[12px]">
          NEW: 🏆 2024 RATED HAIR REMOVAL INNOVATION
        </div>
        <div className="w-full flex justify-start items-start py-4">
          <h1 className="text-gray-700 font-sans-500 text-left">
            If you’re tired of razor cuts, painful waxing or expensive lasers —
            our hair eraser is for you!
          </h1>
        </div>
        <div className="w-full flex justify-start items-start">
          <ul className="text-left text-md lg:text-xl">
            <li>💜 Guarantees to remove unwanted hair</li>
            <li>🍑 Gently exfoliates dead skin cell</li>
            <li>✨ Painless and Non-toxic</li>
            <li>🌱 Eco-Friendly and Reusable (~1 year)</li>
          </ul>
        </div>
        <div className="w-full flex flex-wrap gap-3 py-4">
          <div className="flex items-center w-full">
            <div className="flex-grow rounded-md h-[2px] bg-amber-600"></div>
            <div className="px-4 font-sans-400">Bundle and Save</div>
            <div className="flex-grow h-[2px] bg-amber-600"></div>
          </div>
          {variants?.map((variant) => {
            const savings = variant.compare_price - variant.price;
            return (
              <div
                className={`${
                  variant.id === selectedVariant ? "bg-yellow-100" : ""
                } relative h-24 w-full border-yellow-500 border-2 rounded-md flex gap-4 py-4 px-4 lg:px-8 cursor-pointer  hover:bg-yellow-400`}
                onClick={() => handleSelectedVariant(variant.id)}
              >
                <div
                  className={`${
                    variant.id === selectedVariant ? "bg-yellow-600" : ""
                  } w-6 h-6  rounded-full border-yellow-600 border-2 mt-[6px]`}
                ></div>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col justify-start">
                    <div className="flex gap-2">
                      <p className="font-sans-500 text-gray-600 text-xl">
                        {variant.variant}
                      </p>
                      {variant.free_shipping ? (
                        <div className="p-2 py-1 border-amber-600 text-amber-600 text-sm font-sans-400 border-2 rounded-md">
                          Free Shipping
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="text-left">You Save ${savings}</p>
                  </div>
                  <div>
                    <p className="text-xl font-sans-500 text-amber-600">
                      ${variant.price}
                    </p>
                    <p className="font-sans-400 text-gray-600 line-through">
                      ${variant.compare_price}
                    </p>
                  </div>
                </div>
                {variant.id === 2 ? (
                  <div className="absolute w-10 lg:w-12 top-[-18px] lg:top-[-10px] right-[-14px] lg:right-[-23px]">
                    <img
                      src={best_seller}
                      alt="best-seller"
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <p className="font-sans-400">
            Free 2~5 Day Shipping from Nevada, USA 🇺🇸
          </p>
          <a href="https://ifbeauty.com.au/cart/41854498111663:1">
            <button className="w-full rounded-md bg-amber-600 text-2xl font-sans-500 text-gray-200 px-2 py-4">
              👉🏻 Add To Bag
            </button>
          </a>
        </div>
        <div className="w-full flex justify-center items-center py-6  gap-6">
          <div className="flex justify-center flex-wrap w-[138px] gap-2">
            <div className="w-20">
              <img src={shipping} alt="" className="w-full" />
            </div>
            <h1 className="text-center text-sm" s>
              Free Shipping
            </h1>
          </div>
          <div className="flex justify-center flex-wrap w-32 gap-2">
            <div className="w-20">
              <img src={calendar} alt="" className="w-full" />
            </div>
            <h1 className="text-center text-sm">30-Day Returns</h1>
          </div>
          <div className="flex justify-center flex-wrap w-32 gap-2">
            <div className="w-20">
              <img src={returning} alt="" className="w-full" />
            </div>
            <h1 className="text-center text-sm">Easy Exchanges</h1>
          </div>
        </div>
        <div className="w-full">
          <QuestionsAnswersHome />
        </div>
        <div className="w-full">phrase</div>
      </div>
    </div>
  );
};

export default ProductDetail;
