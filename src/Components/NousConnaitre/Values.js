

import React from 'react';
import { data } from './data';
import { Zoom } from 'react-reveal';

const Values = () => {

    return (
        <Zoom>

   <div class="relative p-6 mt-[5rem] md:mt-[3rem] bg-white sm:p-12 md:p-20 lg:m-[1rem]">
                <div class="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-[1fr,1fr,1fr,1fr] md:grid-rows-[1fr,1fr,1fr,1fr] lg:m-[6rem]">

                    <div class="col-span-1 row-span-2 p-[3.5rem] bg-[#00254F] text-white  sm:p-12 lg:p-[8rem] md:col-span-3 lg:m-[1rem]">
                        <h1 className='text-2xl font-semibold text-left'>Innovation</h1>
                        <p className=' mt-2 md:mt-0 max-w-xl text-[17px] md:text-[20px] '>

                            Créer et se renouveler sans cesse pour répondre au mieux à vos attentes de demain.
                        </p>
                    </div>


                    <div class="col-start-1 row-span-2  p-[7rem] sm:col-start-1 md:col-start-4 bg-slate-400 sm:p-12 lg:p-[2rem] lg:m-[1rem]" 
                    style={{ backgroundImage: `url('People/exx1.jpg')` }}>

                    <h1 className='text-5xl font-semibold text-center text-white lg:text-black '>Intégrité</h1>

                    </div>


                    <div class="col-start-1 row-span-2 p-[6rem] md:col-span-2 md:row-span-4 bg-slate-400 sm:p-12 lg:p-[9rem] lg:m-[1rem] bg-cover"
     style={{ backgroundImage: `url('People/exx2.jpg')` }}>
                            <h1 className='text-5xl font-semibold text-center text-white lg:text-left '>Nos Valeurs</h1>

                        
                      </div>


                    <div  style={{ backgroundImage: `url('bento/one.jpg')` }}
                        class="col-span-1 col-start-1 row-span-2 row-start-3 p-[7rem] lg:m-[1rem] sm:col-span-1 md:col-span-2 sm:col-start-1 md:col-start-3 md:row-span-2 bg-slate-400 sm:p-12 lg:p-[9rem]">
                        
                        <h1 className='text-5xl font-semibold text-center text-white '>Proximité</h1>
                        
                        
                        </div>


                    <div
                        class="col-span-1 col-start-1  lg:m-[1rem] row-span-2 row-start-5 p-[5rem] sm:col-span-1 md:col-span-2 sm:col-start-1 text-white md:col-start-3 bg-[#29405d] sm:p-12 lg:p-[9rem]">
                        <h1 className='text-2xl font-semibold text-left'>Performance</h1>
                            <p className='mt-2 md:mt-0 max-w-xl text-[17px] md:text-[20px] '>

                                Notre objectif : mettre notre culture de la performance au service d’une plus grande réussite de tous.</p>
                     
                        </div>


                 


               
                </div>
            </div>




          
        </Zoom>

    );
};

export default Values;
