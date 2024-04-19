import React from "react";
import { life } from "../../assets/index";
const ImageDescription = () => {
  return (
    <div>
      <div className="h-[600px] w-full rounded-2xl overflow-hidden">
        <div className="h-1/2 w-full overflow-hidden">
          <img src={life} alt="" className="w-full object-cover" />
        </div>
        <div className="h-1/2 bg-slate-800 p-8 text-left space-y-3">
          <div>
            <h1 className="text-3xl font-sans-600 text-gray-300">Hair-Free Guarantee</h1>
          </div>
          <div>
            <h1 className="text-md font-sans-600 text-gray-500">We love our Bleame™ Crystal Hair Eraser and are confident you will too! That’s why we’re offering a 30-Day, Risk-Free Guarantee. If you’re not satisfied, we’ll gladly issue a full refund in accordance with our Return & Refund Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDescription;
