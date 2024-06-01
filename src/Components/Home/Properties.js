import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import { HiOutlineMapPin } from "react-icons/hi2";
import { GrUserExpert } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import { GiStarsStack } from "react-icons/gi";

function Properties() {
  const Props = [
    { title: "d'experience reconue", years: "10 ans", icon: <GiStarsStack className='w-10 text-white h-14' /> },
    { title: "Cabinets d'excellence", years: "7 ", icon: <HiOutlineMapPin className='w-10 text-white h-14' /> },
    { title: "expertises pour vous accoumpagner", years: "10", icon: <GrUserExpert className='w-8 text-white h-14' /> },
    { title: "collaboration a votre service ", years: "20", icon: <GrGroup className='w-8 text-white h-14' /> },
  ]
  return (
    <Zoom>
      {/* bg-[#29405d] */}
    <div className='w-full p-6 bg-[#29405d] text-white '>
      <div className='container grid items-center justify-center w-auto grid-cols-1 p-10 ml-auto mr-auto duration-500 transform place-content-center sm:grid-cols-2 md:p-8 lg:grid-cols-2 2xl:grid-cols-4 gap-x-4 gap-y-4 '>
        {Props.map((e) => {
          return (
            <div key={e.id} className='flex h-full max-w-sm gap-2 p-3 pb-2 mx-auto my-auto duration-300 cursor-pointer'>
              {e.icon}
              <div className='flex flex-col  w-[12rem]'>
                <h1 className='text-3xl font-bold'>{e.years}</h1>
                <h3>{e.title}</h3>
              </div>

            </div>
          );
        })}
      </div>
    </div>
    </Zoom>
  )
}

export default Properties


