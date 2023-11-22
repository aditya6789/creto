import React from 'react'

interface IHeroButton{
    title:String;
    label:String;
   
    color : String;
};

const HeroButton : React.FC<IHeroButton>  = ({title , label ,   color}) => {
  return (
    <div className='items-center' >
        <h1 className='text-center text-gray-500 text-xl font- pb-5'>
            {title}
        </h1>
       <div className={`px-20 py-3 ${color} rounded-3xl `} > {label} </div>
    </div>
  )
}

export default HeroButton