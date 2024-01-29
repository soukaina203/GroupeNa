import React from 'react'
import { services } from '../Home/MissionsData'
function Specialties() {
    return (
        <div className='w-full h-full pb-6 mt-5 p-7'>
            <div className='container grid w-auto grid-cols-1 p-10 duration-500 transform place-content-center sm:grid-cols-2 md:p-8 lg:grid-cols-3 2xl:grid-cols-6 gap-x-4 gap-y-4 '>

                <h1 className='col-span-2 text-4xl font-bold p-7 text-[#003D8A] w-fit '>
                    Construire Aujourd’hui,
                    Anticiper Demain
                </h1>

              {services.map((e)=>{
                return(
                    <div className='min-h-[460px] relative  bg-cover bg-no-repeat md:w-full h-full col-span-2 lg:w-[25rem]'
                    style={{ backgroundImage: `url('People/${e.image}.jpg')` }} >
                    {/* this */}
                    {/* <div className='absolute top-auto   bottop-auto mx-auto my-auto min-h-[419px] h-full  lg:p-11'> */}
                    <div className='h-full max-w-sm p-10 pb-6 mx-auto my-auto duration-300 transform shadow-md cursor-pointer hover:-translate-y-1n hover:shadow-xl'>

                        <div className='bg-white p-7'>
                            <h1 className='mb-2 text-xl font-bold text-left'> {e.title}</h1>
                         <p className=''> 
                         {e.content}
                        </p>
                        </div>
                    </div>
                </div>
                )
              })}
               

         


            </div>
        </div>
    )
}

export default Specialties
