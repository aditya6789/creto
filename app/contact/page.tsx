import React from "react";
import Image from "next/image";
import ContactCard from "./components/contactCard";
import CardComputer from "../../public/contact_card_computer.svg";
import CardImform from "../../public/contact_image_inform.svg";

const ContactPage = () => {
  return (
    <div className="p-3 h-screen">
      <h1 className="text-center text-white text-4xl font-bold ">
        What's Creto?
      </h1>

      <h2 className="text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate
        recusandae sequi facere, natus veniam nostrum alias doloribus id quod
        atque quibusdam ut. Eaque in at consectetur quaerat, iusto porro?
        Voluptatem, aliquam. Molestiae, nihil? facere, natus veniam nostrum
        alias doloribus id quod atque quibusdam ut. Eaque in at consectetur
        quaerat, iusto porro? Voluptatem, aliquam. Molestiae, nihil?
      </h2>
      <div className="flex justify-between items-center p-5">
        <div className="pr-7">
          <Image
            src={CardComputer}
            alt="Image"
            height={250}
            width={250}
            className="items-center"
          />
          <ContactCard
            name="Aditya Paswan"
            position="CEO"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, voluptas necessitatibus nesciunt, beatae corrupti, delectus atque velit quia odio laboriosam nisi modi itaque."
          />
        </div>
        <div className="flex flex-col items-center">
          <ContactCard
            name="Anurag Shakya"
            position="CTO"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, voluptas necessitatibus nesciunt, beatae corrupti, delectus atque velit quia odio laboriosam nisi modi itaque."
          />
          <div className="pl-[17rem] pt-5">
            <Image
              src={CardImform}
              alt="Image"
              height={245}
              width={245}
              className="items-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
