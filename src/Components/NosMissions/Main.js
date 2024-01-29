import React from "react";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Main() {
  return (
    <Zoom>
      <div className="w-5/6 mt-[2rem] mx-auto wrap">
        <div className="grid justify-center grid-cols-10 place-content-center place-items-center">
          <div className="col-span-6 col-start-1 none md:block row-span-full">
            <img
              className="object-cover rounded-lg hidden md:block   p-12 z-[-1] w-[45rem] h-[40rem]"
              src="People/exx1.jpg"
              alt=""
            />
          </div>
          {/* Div of paragraphs  */}
          <div className="self-center max-w-xl text-[15px]  z-40 col-span-6 col-end-11 p-7 text-white  bg-black  row-span-full
         ">
            <h1 className="mt-0 mb-2 text-2xl font-bold">
              Nos métiers : le groupe NA
            </h1>
            <p className="mb-2">
              Nous imaginons des solutions globales et intégrées pour accompagner les dirigeants, entreprises et entités de toutes tailles et de tout secteur.

              Expertise comptable, formalités juridiques et sociales, Audit, Droit, Gestion de Patrimoine, Conseil en stratégie, la diversité de nos expertises nous permet d’accompagner nos clients dans leur quotidien et leurs projets d’avenir.
            </p>
            <button className="mt-2 ml-2 bg-[#29405d] md:ml-0">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Nous Contacter
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default Main;
