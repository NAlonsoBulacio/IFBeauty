import React from "react";
 import { block } from 'million/react';

const StatementBar = 
 block(
  ({ statement, percentage }) => {
  return (
    <div className="p-2">
      <div className="flex items-start mb-2 space-x-1 text-left">
        <div className="text-4xl font-sans-500">{percentage}%</div>
        <div className="font-sans-300">{statement}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div className="transition-all ease-out duration-1000 bg-gradient-to-r from-[#1c4cfc] to-[#a4b6fafb] h-full rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
 );

const StatementList = 
block(
  () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 border-[1.5px] border-gray-300">
      <StatementBar statement="Presents fewer wrinkles." percentage={80} />
      <StatementBar statement="Achieved a clinically proven reduction in expression lines." percentage={97} />
      <StatementBar statement="Achieved a clinically proven increase in skin elasticity and firmness." percentage={90} />
    </div>
  );
}
 );

export default StatementList;