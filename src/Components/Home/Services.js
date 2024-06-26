

import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { services } from './MissionsData';

function Services() {
  const [currentService, setCurrentService] = useState(0);

  const handleNextService = () => {
    setCurrentService((currentService + 1) % services.length);
  };

  const handlePreviousService = () => {
    setCurrentService((currentService - 1 + services.length) % services.length);
  };

  return (
    <Zoom>
      <div className="hidden p-16 overflow-x-hidden md:block sm:p-24 lg:p-32">
        <h2 class="text-xl md:text-2xl lg:text-4xl text-[#003D8A]
         text-center p-4 "><b>Nos expertises</b></h2>

        <div className="relative items-center block 
        rounded-lg min-h-[18rem] shadow-xl md:flex">
          <div className="relative w-full h-full bg-[#003D8A] rounded-t-lg md:w-2/5 md:rounded-t-none md:rounded-l-lg">
            <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black ">

              {/* HERE i want to have a background color here but to takes the full width and hight  */}
              <h1 className='w-[20rem] p-[3rem] md:p-[3rem] lg:p-0   text-2xl font-semibold text-[#003D8A] '>{services[currentService].title}</h1>



            </div>
            <div className="absolute inset-0 flex items-center justify-center w-full h-full text-white fill-current bg-slate-700">
              {/* ... SVG remains the same ... */}
            </div>
          </div>
          <div className="flex items-center w-full h-full rounded-lg md:w-3/5">
            <div className="p-12 text-xl md:pr-24 md:pl-16 md:py-12">
              <p className="text-gray-600 ">
                <span className="text-gray-900 ">{services[currentService].title}</span>
                {services[currentService].content}
              </p>

            </div>
            {/* ... SVG remains the same ... */}
          </div>
          <button
            className="absolute top-0 left-0 w-12 h-12 mt-32 -ml-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline"
            onClick={handlePreviousService}
          >
            <span className="block" >&#x279c;</span>
          </button>
          <button
            className="absolute top-0 right-0 w-12 h-12 mt-32 -mr-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline"
            onClick={handleNextService}
          >
            <span className="block">&#x279c;</span>
          </button>
        </div>
        <div className="flex items-center justify-between pt-5 ">
          {/* ... Logo buttons remain the same ... */}
        </div>
      </div>
      <div className="p-4 sm:p-16 lg:p-32 md:hidden">
        <h2 className="text-xl md:text-2xl lg:text-4xl text-[#003D8A] text-center p-4">
          <b>Nos expertises</b>
        </h2>

        <div className="relative items-center block rounded-lg min-h-[18rem] shadow-xl md:flex">
          <div className="relative w-full h-full rounded-t-lg md:w-2/5 md:rounded-t-none md:rounded-l-lg">
            {/* Background color with full width/height on all screens */}
            <div className="absolute inset-0 w-full h-full bg-gray-300 opacity-0 "></div>

            <h1 className="w-full p-4 md:p-[3rem] lg:p-0 text-2xl font-semibold  text-[#003D8A]">
              {services[currentService].title}
            </h1>

            {/* SVG remains the same */}
            {/* ... */}
          </div>
          <div className="flex items-center w-full h-full rounded-lg md:w-3/5">
            <div className="p-4 md:pr-24 md:pl-16 md:py-12">
              <p className="text-gray-600 ">
                <span className="text-gray-900 ">
                  {services[currentService].title}
                </span>
                {services[currentService].content}
              </p>
            </div>
            {/* SVG remains the same */}
            {/* ... */}
          </div>
          {/* Navigation buttons responsive across screens */}
          <button
            className="absolute right-0 mr-4 text-2xl text-indigo-600 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline sm:hidden md:block lg:block"
            onClick={handleNextService}
          >
            <span className="block">&#x279c;</span>
          </button>
          <button
            className="absolute left-0 ml-4 text-2xl text-indigo-600 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline sm:hidden md:block lg:block"
            onClick={handlePreviousService}
          >
            <span className="block">&#x279c;</span>
          </button>
          <button
            className="absolute right-0 mr-4 text-2xl text-indigo-600 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline sm:block md:hidden lg:hidden"
            onClick={handleNextService}
          >
            <span className="block">&#x279c;</span>
          </button>
          <button
            className="absolute left-0 ml-4 text-2xl text-indigo-600 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline sm:block md:hidden lg:hidden"
            onClick={handlePreviousService}
          >
            <span className="block">&#x279c;</span>

          </button>
        </div>
        <div className="flex items-center justify-between pt-5 ">
          {/* ... Logo buttons remain the same ... */}
        </div>
      </div>
    </Zoom>
  );
}

export default Services;
