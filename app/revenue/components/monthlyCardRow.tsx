import React from "react";

interface IRow {
  title: string;
  num: number;
}

const MonthlyCardRow: React.FC<IRow> = ({ title, num }) => {
  return (
    <div>
      <div className="flex justify-between items-center pb-2 pt-4">
        <h1 className="text-base text-gray-600">{title}</h1>
        <h1 className="text-blue-500 text-base">{num} hours</h1>
      </div>
      <div className="h-[1px] w-[100%] bg-gray-300"></div>
    </div>
  );
};

export default MonthlyCardRow;
