import React from "react";
import Image from "next/image";

interface IserviceCrard {
  title: String;
  desc: String;
  img: string;
}

const ServiceCard: React.FC<IserviceCrard> = ({ title, desc, img }) => {
  return (
    <div className="bg-white h-[20rem] w-[15rem] p-5 flex flex-col items-center justify-between">
      <div>
        <h1 className="font-semibold text-xl pb-5">{title}</h1>

        <div className="bg-pink-300 h-20 w-20 rounded-full flex items-center justify-center">
          <Image src={img} alt="Image" height={50} width={50} />
        </div>
      </div>
      <div>
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

export default ServiceCard;
