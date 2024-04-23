import React from "react";
import { life } from "../../assets/index";
const ImageDescription = () => {
  return (
    <div>
      <div className="lg:flex h-[600px] w-full rounded-2xl overflow-hidden">
        <div className="h-1/2 w-full overflow-hidden">
          <img src={life} alt="" className="w-full object-cover" />
        </div>
        <div className="h-1/2 bg-slate-800 p-8 text-left space-y-3">
          <div>
            <h1 className="text-3xl font-sans-600 text-gray-300">
              IF Beauty Guarantee
            </h1>
          </div>
          <div>
            <h1 className="text-md font-sans-600 text-gray-500">
            At If Beauty, our mission is to provide the best cream possible, with ingredients that have been proven to work over our 30 years of working with our patients. We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDescription;
