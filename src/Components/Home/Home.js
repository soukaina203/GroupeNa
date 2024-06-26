import React from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Home() {
  return (
    <Zoom>{/*Using Zoom Effect*/}
<section className=" bg-gray-900  mt-[4rem]  h-screen w-full flex overflow-hidden justify-center items-center">
<video src= 
"Videos/Home.mp4"
            autoplay="{true}" loop muted 
            className="absolute z-[-1] opacity-35 w-auto min-w-full min-h-full max-w-none"> 
        </video>
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
     
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight font leading-none 
         md:text-5xl lg:text-6xl text-white font-roboto-condensed">NexAudit - Redéfinir l'audit pour demain</h1>
        <p class="mb-8 text-lg font-normal  lg:text-2xl
         sm:px-16 xl:px-48  text-gray-400">Découvrez une nouvelle ère de l'audit et de la gestion financière, où l'innovation et la précision 
         tracent la voie vers l'excellence.</p>
        <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link to="contact" smooth={true} offset={-100} duration={500}>

            <a href='/' className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Nous Contacter
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </Link>
                <RouterLink to="/connaitre">
            <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center text-white bg-gray-700 rounded-lg ">
                <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Nous Connaitre 

            </a>  
                </RouterLink>
        </div>
      
    </div>
</section>
</Zoom>
  )
}

export default Home