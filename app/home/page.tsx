import React from "react";
import SmallLogo from "./components/smallLogo";
import BigLogo from "./components/bigLogo";
import HeroButton from "./components/heroButton";
import  Dev from "../../public/dev.svg"
import  Marketing from "../../public/marketing.svg"
import Design from "../../public/design.svg"


const HomePage: React.FC = () => {
  return (
    <div className=" flex items-center justify-between  w-full h-screen">
      {/* hero logo */}
      <div className=" justify-between pr-5 pb-10">
        <div className="pb-20">
          <SmallLogo title={"App"} img={Design}/>
        </div>
        <BigLogo title={"Web"} img={Dev}/>
      </div>
      {/* hero body */}
      <div>
        <h1 className=" text-7xl text-white font-bold text-center ">
          Getting the <span className="text-purple-500">best freelancer</span>{" "}
          for your <span className=" text-green-300">ambitious projects</span>
        </h1>
        <div className=" flex justify-between items-center p-10">
          <HeroButton
            color={"bg-purple-500"}
            label={"Find the Perfect gig"}
            title={"Freelancer"}
          />
          <HeroButton
            color={"bg-green-300"}
            label={"Find the Perfect gig"}
            title={"Freelancer"}
          />
        </div>
      </div>

      {/* hero logo 2*/}
      <div className=" justify-between">
        <div className="pb-12">
          <BigLogo title={"Marketing"} img={Marketing} />
        </div>

        <SmallLogo title={"App"} img={Dev} />
      </div>
    </div>
  );
};

export default HomePage;
