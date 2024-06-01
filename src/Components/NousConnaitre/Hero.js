import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-scroll";

function Hero() {
  return (
    <Zoom>
    <div className="w-5/6 mt-[2rem] mx-auto wrap ">
      <div className="grid justify-center grid-cols-10 place-content-center place-items-center">
        <div className="col-span-6 col-start-1 none md:block row-span-full">
          <img
            className="object-cover  hidden lg:block mt-[2.9rem]  z-[-1] w-[40rem] h-[40rem]"
            src="People/expert5.jpg"
            alt=""
          />
        </div>
        {/* Div of paragraphs  */}
        <div className="self-center max-w-3xl text-[15px] z-40 col-span-full mt-[3.9rem] lg:col-span-6 lg:col-end-11 p-7 text-white bg-[#00254F] row-span-full">
          <h1 className="mt-0 mb-2 text-2xl font-bold">
            Notre mission : œuvrer chaque jour pour offrir plus que l'attendu
          </h1>
          <p className="mb-2 text-xl">
            Notre vocation quotidienne est de surpasser les attentes en proposant des
            solutions exhaustives et intégrées, dépassant ainsi le cadre traditionnel. Nous conceptualisons des
            approches globales pour soutenir les leaders dans leurs opérations quotidiennes et tout au long du
            cycle de vie de leur entreprise. Que ce soit dans le domaine de l'expertise comptable, tant
            traditionnelle que digitale, des formalités juridiques et sociales, de l'audit, du conseil en droit des
            entreprises, de la corporate finance, de la stratégie ou de la gestion de patrimoine, la diversité de nos
            compétences nous permet d'accompagner nos clients avec excellence dans leur gestion quotidienne
            et dans la réalisation de leurs projets d'avenir.
          </p>
          <button className="mt-2 ml-2 bg-gray-900 md:ml-0">
          <Link to="contact" smooth={true} offset={-100} duration={500}>

            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
            </Link>
          </button>
        </div>
      </div>
    </div>
    </Zoom>
  );
}

export default Hero;
