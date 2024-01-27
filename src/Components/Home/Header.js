import React from 'react'
import { Link } from 'react-router-dom'
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";

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
            <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto" > <Link to="home" smooth={true} offset={-100} duration={500}>  Accueil </Link> </li>

          
            <li className="px-6 py-4 duration-500 underlineHover hover:pointer-auto " > <Link to="about" smooth={true} offset={-100} duration={500}>
               Nous Connaitre
              
              </Link> </li>
            <li className="px-6 py-4 duration-500 underlineHover" > <Link to="mission" smooth={true} offset={-100} duration={500}>  Nos Missions </Link> </li>
            <li className="px-6 py-4 duration-500 underlineHover" > <Link to="team" smooth={true} offset={-100} duration={500}>  Team </Link> </li>



          </ul>


          {/* phone & tablet */}
          <button className=" lg:hidden group">
            <GiHamburgerMenu className="mr-5 text-2xl" />



            <div class="absolute top-0 w-8/12 h-screen ml-auto mr-auto transition-all flex items-center duration-500 bg-indigo-900 text-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
              <ul class="flex flex-col items-center justify-center w-[98%]  font-semibold  m-2">
                <li class=" px-6 py-4 w-full duration-500 uppercase rounded-lg  hover:bg-purple-700">
                  <Link to="home" smooth={true} duration={400}>
                    Accueil
                  </Link>
                </li>

                <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-purple-700 rounded-lg">
                  <Link to="about" smooth={true} duration={400}>
                    À Propos
                  </Link>
                </li>

                <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-purple-700 rounded-lg">
                  <Link to="mission" smooth={true} offset={-200} duration={400}>
                    Mission
                  </Link>
                </li>

                <li class="w-full px-6 py-4 uppercase duration-500 hover:bg-purple-700 rounded-lg">
                  <Link to="team" smooth={true} offset={-200} duration={400}>
                    Team
                  </Link>
                </li>

                <li class="w-full px-6 py-4 duration-500  uppercase hover:bg-purple-700 rounded-lg">
                  <Link to="services" smooth={true} offset={-200} duration={400}>
                    Services
                  </Link>
                </li>

                <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-purple-700 rounded-lg">
                  <Link to="contact" smooth={true} offset={-200} duration={400}>
                    Contact
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