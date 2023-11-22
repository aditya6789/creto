import React from "react";
import ServiceCard from "./components/serviceCard";
import CardImage1 from "../../../../public/card1.svg";
import CardImage2 from "../../../../public/card2.svg";

const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: "Discover Explore the Products",
      desc: "Effective strategies to help you reach customer",
      img: CardImage1,
    },
    {
      id: 2,
      title: "Discover Explore the Products",
      desc: "Effective strategies to help you reach customer",
      img: CardImage1,
    },
    {
      id: 3,
      title: "Discover Explore the Products",
      desc: "Effective strategies to help you reach customer",
      img: CardImage2,
    },
    {
      id: 4,
      title: "Discover Explore the Products",
      desc: "Effective strategies to help you reach customer",
      img: CardImage2,
    },
  ];
  return (
    <div className="h-screen">
      <h1 className="text-center text-white font-bold text-[2rem] p-12">
        Provide Awesome Service <br /> with our Tools
      </h1>
      <div className="pl-2">
        <div className="flex items-center justify-between">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              desc={service.desc}
              img={service.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
