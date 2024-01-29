import React from "react";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
// import {Link } from 'react-router-dom'

const About = () => {
  return (

    <>

      <Zoom>{/*Using Zoom Effect*/}

        <section className="overflow-hidden pt-20 pb-12   lg:pt-[120px] 
      lg:pb-[90px]
         dark:bg-dark">
          <div className="container mx-auto ">
            <div className="flex flex-wrap items-center justify-center -mx-4">
              <div className="w-full px-4 lg:w-4/12">
                <div className="flex items-center -mx-4 sm:-mx-5">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-1">
                      <img
                        src="People/expert1.jpg"
                        alt=""
                        className=" w-full lg:w-[16rem] lg:h-[16rem] "
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="People/expert5.jpg"
                        alt=""
                        className=" w-full lg:w-[16rem] lg:h-[16rem] "
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 mt-[3rem] sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4 ">
                      <img
                        src="People/expert6.jpg"
                        alt=""
                        className="w-full lg:w-[16rem] lg:h-[16rem] "
                      />

                    </div>
                    <div className="relative z-10 my-5 ">
                      <img
                        src="About/about3.jpeg"
                        alt=""
                        className="w-full lg:w-[16rem] lg:h-[16rem] "
                      />

                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
                <div className="mt-10 lg:mt-0 lg:ml-4">
                  <span className="block pl-2 mb-4 text-xl font-bold md:pl-0 w-fit underline1 text-primary">
                    A Propos de nous
                  </span>
                  <h2 className="mb-5 pl-2 md:pl-0 text-3xl text-[#003D8A] font-bold text-dark  sm:text-[40px]/[48px]">
                    NexAudit - Redéfinir l'audit pour demain   </h2>
                  <p className="pl-2 mb-5 text-base md:pl-0 text-body-color dark:text-dark-6">
                    Fondé il y a plus de 5ans , NexAudit s'est imposé comme un leader dans l'audit et la consultation
                    financière. Notre parcours, marqué par l'alliance entre tradition et modernité, reflète notre
                    engagement envers l'éthique, la transparence et l'innovation.
                  </p>
                  <p className="pl-2 mb-4 text-base md:pl-0 text-body-color dark:text-dark-6">
                    De la construction d'une équipe
                    dévouée à des partenariats durables, nous avons évolué avec les besoins du marché, devenant un
                    cabinet d'audit de premier plan reconnu pour son expertise financière de pointe. Aujourd'hui,
                    NexAudit demeure résolument engagé à façonner l'avenir de l'audit avec excellence et innovation
                    continue.

                  </p>
                  <button className="ml-2 bg-[#003D8A] md:ml-0">

                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Nous Contacter
                      <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Zoom>
    </>
  );
};

export default About;
