import React from 'react';
import { services } from '../Home/MissionsData';
import { Zoom } from 'react-reveal';

function Specialties() {
  return (
    <Zoom>
  <div className='w-full h-full pb-6 mt-5 p-7 '>
        <h1 className='text-center font-bold text-2xl lg:text-4xl mb-3 text-[#003D8A] '>
            Construire Aujourd’hui,
            Anticiper Demain
        </h1>
  <div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto duration-500 transform place-items-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-6 gap-y-6 '>


        {services.map((e, index) => (
            <div key={e.image} 
            className='min-h-[460px] relative bg-cover bg-no-repeat md:w-full h-full col-span-1 lg:w-[25rem]'
                style={{ backgroundImage: `url('People/${e.image}.jpg')` }}>
                <div className='h-full max-w-xl p-10 pb-6 mx-auto my-auto duration-300 transform shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl'>
                    <div className='bg-white p-7'>
                        <h1 className='mb-2 text-xl font-bold text-left'>{e.title}</h1>
                        <p>{e.content}</p>
                    </div>
                </div>
            </div>
        ))}

    </div>
</div>

    </Zoom>
  );
}

export default Specialties;
