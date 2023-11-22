import React from "react";

interface IContactCard {
  name: string;
  position: string;
  desc: string;
}

const ContactCard: React.FC<IContactCard> = ({ name, position, desc }) => {
  return (
    <div className="border w-65 h-45 rounded-3xl p-5 mt-10">
      <h2 className="text-white font-semibold text-l mb-2">{name}</h2>
      <h2 className="text-white font-medium text-sm mb-10">{position} Creto</h2>

      <h2 className="text-white font-normal text-base mb-2">{desc}</h2>
    </div>
  );
};

export default ContactCard;
