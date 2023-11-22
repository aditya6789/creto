"use client";
import React from "react";
import TextField from "./components/textfield";
import RangeSlider from "./components/rangeSlider";
import RevenueCard from "./components/revenueCard";
import { useState } from "react";

const buttons = Array.from({ length: 4 }, (_, i) => i + 1);

const RevenuePage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const ButtonName = [
    { name: "Easy Start" },
    { name: "Essentials" },
    { name: "Advance" },
    { name: "Complete" },
  ];

  return (
    <div className="h-screen p-7">
      <div className="pt-3">
        <h1 className="text-white text-center text-4xl font-semibold pb-10">
          Calculate How much Revenue your <br />
          earn with Clio
        </h1>
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="flex items-center justify-between pb-10">
              <div className="pr-5">
                <TextField label="#of billable staff" />
              </div>
              <TextField label="#of billable staff" />
            </div>

            <div className="pb-10">
              <div className="pb-7">
                <RangeSlider
                  label="Daily Hour spent on billable task"
                  max={20}
                  min={0}
                  step={1}
                />
              </div>
              <RangeSlider label="Hourly Rate" max={20} min={0} step={1} />
            </div>
            <h1 className="text-lg text-blue-800 font-medium pb-4">
              Clio Plan
            </h1>
            <div className="flex space-x-4">
              {ButtonName.map((button, index) => (
                <button
                  key={index}
                  className={`border  px-8 py-2 ${
                    selectedButton === index
                      ? "bg-blue-500 text-black"
                      : "bg-transparent text-white"
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
                  {button.name}
                </button>
              ))}
            </div>
          </div>
          <RevenueCard />
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;
