import React from 'react'
import Hero from './Hero'
import EmployeeWord from './EmployeeWord'
import Video from './Video'
import Values from './Values'
import Chiffres from './Chiffres'
import Headers from '../Home/Header'
function NousConnaitre() {
  return (
    <div>
      <Headers /> 
      <Hero />
      <EmployeeWord />
      <Chiffres />
        <Video />
        <Values/>
    </div>
  )
}

export default NousConnaitre
