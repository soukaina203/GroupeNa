import React from 'react'
import { Zoom } from 'react-reveal'

function EmployeeWord() {

  return (
    <Zoom >
    <div className='flex items-center justify-center lg:gap-[5rem]  p-[9rem]'>
      <div className='flex flex-col items-center gap-[4rem] justify-center md:flex-row'>
        <img src="employees/pep.png" className='w-[15rem] h-[10rem] lg:w-[25rem] lg:h-[22rem]' alt=''/>
        <div className="self-center  bg-gray-100 max-w-4xl text-[14px] lg:text-[18px]  z-40 col-span-6 col-end-11 p-7   row-span-full
         ">
        
          <p className="mb-2 text-[19px]  p-5  " >
            Chez NexAudit, l'excellence et l'innovation sont ancrées au cœur de notre ADN. Forts d'une expertise de plus d'une décennie, nous sommes devenus un acteur prépondérant dans le domaine de l'audit et de la consultation financière. Notre parcours a été façonné par la vision audacieuse de nos fondateurs, des experts chevronnés qui ont discerné la nécessité d'un cabinet d'audit novateur et orienté vers l'avenir. Nous avons tracé notre chemin en alliant tradition et modernité, établissant des normes élevées en matière de professionnalisme et de 
            qualité. 
          <p className='mt-2 font-semibold text-[19px] text-black '> Aneddam Chaimae | Expert-Comptable Associé Chez NexAudit </p>
          </p>

        </div>
      </div>
    </div>
    </Zoom>
  )
}




export default EmployeeWord
