
import React from 'react'
import Image from 'next/image'

interface IsmallLogo{
    title : string;
    img : string;
};

const SmallLogo :React.FC<IsmallLogo> = ({ title ,img }) => {
  return (
    <div className='w-[9rem] h-[9rem] bg-pink-500 rounded-full  text-center items-center flex justify-center'>
       <div>
    <Image alt="App Dev " src={img} height={60} width={60} />
    <h1 className="font-semibold text-xl">{title}</h1>
  </div></div>
  )
}

export default SmallLogo