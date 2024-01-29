import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Footer() {
  return (
 
<Zoom>
<footer className="bg-gray-300 ">
    <div className="w-full max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
      <h1 className="flex gap-2 py-4 pl-8 text-2xl font-bold  cursor-pointer md:ml-0 flew-row 
           text-[#3218BF] ">
            NexAudit
          </h1>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Accueil</h2>
            <ul className="font-medium text-gray-600 ">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">A propos</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Expertises</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline"> Nos Chiffres </a>
                </li>
              
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Nous Connaitre</h2>
            <ul class="text-gray-600 font-medium">
                <li class="mb-4">
                    <a href="#" className="hover:underline"> Nos Chiffres</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Nos Competences</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Nos Valeurs</a>
                </li>
              
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Nos Missions</h2>
            <ul class="text-gray-600 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Nos réalisation</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Nos But</a>
                </li>
               
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">CONTACT</h2>
            <ul class="text-gray-600 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">0537485965</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">info@NexAudit.com</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">adresse : 34, Angle Avenue Oqba et Fal Ouled Oumeir Agdal</a>
                </li>
              
            </ul>
        </div>
    </div>
   
    </div>
 
</footer>
</Zoom>
  )
}

export default Footer
