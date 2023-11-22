// components/RangeSlider.tsx
"use client";
// components/RangeSlider.tsx
import React, { useState } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  label: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step, label }) => {
  const [value, setValue] = useState(min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <div className="range-slider">
      <div className="range-label-top-left text-blue-800 text-lg  font-medium flex items-center justify-between ">
        <label>{label}</label>
        <span className="range-value text-blue-600 pr-5">{value}</span>
      </div>
      <div className="range-input-container w-full">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          id="rangeInput"
          style={{
            height: "0.5rem",
            WebkitAppearance: "none",
            borderRadius: 20,
            width: 600,
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
