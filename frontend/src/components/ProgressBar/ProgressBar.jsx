import React from "react";

const StatementBar = ({ statement, percentage }) => {
  return (
    <div className="p-2">
      <div className="flex items-start mb-2 space-x-1 text-left">
        <div className="text-4xl font-sans-500">{percentage}%</div>
        <div className="font-sans-300">{statement}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div className="transition-all ease-out duration-1000 bg-gradient-to-r from-teal-600 to-teal-400 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const StatementList = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 border-[1.5px] border-gray-300">
      <StatementBar statement="Presents fewer wrinkles." percentage={76} />
      <StatementBar statement="Achieved a clinically proven reduction in expression lines." percentage={69} />
      <StatementBar statement="Achieved a clinically proven increase in skin elasticity and firmness." percentage={90} />
    </div>
  );
};

export default StatementList;