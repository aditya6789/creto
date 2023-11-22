import React from "react";
import MonthlyCardRow from "./monthlyCardRow";

const MonthlyData = [
  { title: "Monthly admin hour saved", num: 20, id: 1 },
  { title: "Monthly cost of clio", num: 20, id: 2 },
  { title: "Monthly cost of clio Payment", num: 20, id: 3 },
  { title: "Return on investment", num: 20, id: 4 },
];

const RevenueCard = () => {
  return (
    <div className="bg-white h-[29rem] w-[25rem] p-8">
      <h1 className="text-2xl text-center font-medium ">
        Estimated monthly revenue increase
      </h1>
      <h1 className="text-center text-4xl text-blue-500 font-bold pt-5 pb-5">
        20,000
      </h1>
      {MonthlyData.map((monthly) => (
        <MonthlyCardRow
          key={monthly.id}
          title={monthly.title}
          num={monthly.num}
        />
      ))}
      <h1 className="text-xl text-blue-500 text-center font-semibold pt-6 ">
        Download your Customise Report
      </h1>
    </div>
  );
};

export default RevenueCard;
