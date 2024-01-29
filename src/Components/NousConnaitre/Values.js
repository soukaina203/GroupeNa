// import React from 'react'

// function Values() {
//     return (
//         <div>
//              <h2 className="text-xl md:text-2xl mt-[4rem] lg:text-4xl text-[#3218BF]
//          text-center p-5 "><b>Nos Valeurs</b></h2>
//         <div  className='flex  items-center justify-center p-[5rem] pt-0'>

//         <div class="grid grid-cols-8 grid-rows-2 gap-1 [&>*]:rounded-sm ">
//             <div className="col-span-4 p-[5rem] bg-[#BEC4D0]">
//                 <h1 className='mb-2 text-4xl font-bold'>Innovation</h1>
//                 <p className='lg:w-[28rem] text-[20px]'>
//                 Créer et se renouveler sans cesse pour répondre au mieux à vos attentes de demain.
//                 </p>
//             </div>
//             <div className="col-span-2  flex justify-center items-center border-4 text-[#BEC4D0] border-[#BEC4D0]">
//             <h1 className='text-5xl font-bold bg-slate-300 '>Intégrité</h1>
//             </div>


//             <div className="col-span-2 bg-[#BEC4D0]">
//                 <img src='About/about1.jpeg' className='w-full h-full ' />
//             </div>

//             <div className="col-span-2 ">
//             <img src='About/about4.jpeg' className='w-full h-full ' />


//             </div>


//             <div className="col-span-2 p-[5rem] border-4 border-[#477AA9] text-[#477AA9] flex justify-center items-center">
//             <h1 className='text-5xl font-bold'>Proximité</h1>
//             </div>

//             <div className="col-span-4 bg-[#477AA9] text-white p-[5rem] ">
//             <h1 className='mb-2 text-4xl font-bold'>Performance</h1>
//                 <p className='lg:w-[29rem] text-[20px]'>
//                 Notre objectif : mettre notre culture de la performance au service d’une plus grande réussite de tous.
//                 </p>
//             </div>
//         </div>

//         </div>
//         </div>

//     )
// }

// export default Values

// src/components/AuditCompanyGrid.js

import React from 'react';
import { data } from './data';

const Values = () => {

    return (
        <div className=''>
            <div className='flex items-center justify-center p-4 pt-0'>
                <div className='grid md:grid-cols-4  auto-rows-[200px] w-3/4 gap-4 my-10'>
                    <div className=' p-[2rem] border-2 bg-neutral-100 rounded-xl md:col-span-2'>
                        <h1 className='text-2xl font-semibold text-left'>Innovation</h1>
                        <p className='w-[25rem] text-[20px] '>

                            Créer et se renouveler sans cesse pour répondre au mieux à vos attentes de demain.
                        </p>
                    </div>

                    <div className=' p-[2rem]  flex items-center justify-center border-2 bg-neutral-100 rounded-xl md:col-span-1'
                    
                    style={{ backgroundImage: `url('People/expert6.jpg')` }}>
                    
                    <h1 className='text-5xl font-semibold text-center text-white '>Intégrité</h1>
                    
                         </div>

                    <div className=' p-[2rem] border-2 bg-neutral-100 rounded-xl md:row-span-2'
                    style={{ backgroundImage: `url('People/exx1.jpg')` }}>
                        <h1 className='text-6xl font-semibold text-left text-white '>Nos Valeurs</h1>
                        
                    
                    </div>

                    <div className=' p-[2rem] border-2  flex items-center  justify-center rounded-xl md:row-span-1'
                    style={{ backgroundImage: `url('People/expert5.jpg')` }}>

                    <h1 className='text-5xl font-semibold text-center text-white '>Proximité</h1>
                    
                    </div>
                    <div className=' p-[2rem] border-2 bg-neutral-100 rounded-xl md:col-span-2'>
                    <h1 className='text-2xl font-semibold text-left'>Performance</h1>
                    <p className='w-[25rem] text-[20px] '>

                    Notre objectif : mettre notre culture de la performance au service d’une plus grande réussite de tous.</p>
                         </div>


                </div>
            </div>
        </div>

    );
};

export default Values;
