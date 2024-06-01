import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Citation() {
  return (
    <Zoom>
      <div className='flex items-center justify-center p-12 bg-gray-100 md:p-24'>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <img src="employees/a1.png" alt='' className='' />
          <h1 class="mb-4 text-xl font-semibold tracking-tight  leading-none
        p-5 md:text-2xl lg:text-[1.9rem]  w-full max-w-3xl text-[#332c80] lg:mt-[2rem]">"Chez nous, la satisfaction de nos clients transcende
            tout. c'est notre boussole, notre motivation quotidienne."
            <p className='mt-2 font-normal text-black text-[21px]'>  Malik Chase | CAC Chez NexAudit </p>

          </h1>
        </div>
      </div>
    </Zoom>
  )
}

export default Citation
