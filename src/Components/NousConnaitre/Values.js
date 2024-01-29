

import React from 'react';
import { data } from './data';
import { Zoom } from 'react-reveal';

const Values = () => {

    return (
        <Zoom>
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
        </Zoom>

    );
};

export default Values;
