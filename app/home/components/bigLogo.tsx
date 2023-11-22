import React from "react";
import Image from "next/image";

interface IbigLogo {
  title: string;
  img: string;
}

const BigLogo: React.FC<IbigLogo> = ({ title, img }) => {
  return (
    <div className="w-[12rem] h-[12rem] bg-green-500 rounded-full text-center items-center flex justify-center ">
      <div>
        <Image alt="App Dev " src={img} height={100} width={100} />
        <h1 className="font-semibold text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default BigLogo;
