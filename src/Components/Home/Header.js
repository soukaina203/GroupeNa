import React from 'react'
import { Link } from 'react-router-dom'
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Header() {

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white ">
        <div className="container flex items-center justify-between m-auto ">
          <h1 className="flex gap-2 py-4 pl-8 text-2xl font-bold  cursor-pointer md:ml-0 flew-row 
           text-[#3218BF] ">
            NexAudit
          </h1>
          <ul className="items-center hidden pr-10 text-base font-semibold cursor-pointer lg:flex">
            <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto" >
              <Link to="/home" >  Accueil </Link>
            </li>


            <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto " >
              <Link to="/connaitre" >
                Nous Connaitre

              </Link> </li>
            <li className="px-6 py-4 duration-500 underlineHover" >
              <Link to="/missions" >  Nos Missions </Link>
            </li>
            <li className="px-6 py-4 duration-500 underlineHover" > <Link to="/team" >  Team </Link> </li>



          </ul>


          {/* phone & tablet */}
          <button className=" lg:hidden group">
            <GiHamburgerMenu className="mr-5 text-2xl" />



            <div class="absolute top-0 w-8/12 h-screen ml-auto mr-auto transition-all flex items-center duration-500 bg-gray-900 text-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
              <ul class="flex flex-col items-center justify-center w-[98%]  font-semibold  m-2">
                <li class=" px-6 py-4 w-full duration-500 uppercase  hover:bg-gray-800">
                  <Link to="/home" >  Accueil </Link>

                </li>

                <li class="w-full px-6 py-4 duration-500 uppercase  hover:bg-gray-800 ">
                  <Link to="/connaitre" >
                    Nous Connaitre

                  </Link>
                </li>

                <li class="w-full px-6 py-4 duration-500 uppercase  hover:bg-gray-800 ">
                  <Link to="/missions" >  Nos Missions </Link>

                </li>

                <li class="w-full px-6 py-4 uppercase duration-500  hover:bg-gray-800 ">
                  <Link to="/team" smooth={true} offset={-200} duration={400}>
                    Team
                  </Link>
                </li>


              </ul>
            </div>


          </button>

        </div>
      </nav>
    </div>
  )
}

export default Header