import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import { Link } from 'react-router-dom'

function Footer() {
  return (
 
<Zoom>
<footer className="bg-gray-100 ">

<div className="container flex flex-col items-center justify-between m-auto md:flex-row ">
          <h1 className="flex gap-2 py-4 pl-8 text-2xl font-bold  cursor-pointer md:ml-0 flew-row 
           text-[#3218BF] ">
            NexAudit
          </h1>
          <ul className="items-center pr-10 text-base font-medium cursor-pointer lg:flex">
            <li className="px-6 py-4 duration-500 hover:pointer-auto" >
              <Link to="/home" >  0537485965 </Link>
            </li>


            <li className="px-6 py-4 duration-500 hover:pointer-auto " >
              <Link to="/connaitre" >
              info@NexAudit.com

              </Link> </li>
            <li className="px-6 py-4 duration-500 " >
              <Link to="/missions" >   adresse : 34, Angle Avenue Oqba et Fal Ouled Oumeir Agdal </Link>
            </li>



          </ul>
</div>
 
</footer>
</Zoom>
  )
}

export default Footer
