import React from 'react'
import { experiences } from '../lib/experiences'
import ExperienceList from './../../components/experiences/ExperienceCard';

const Experiences = () => {
  return (
    <div>
         <ExperienceList experiences={experiences}/>
    </div>
  )
}

export default Experiences