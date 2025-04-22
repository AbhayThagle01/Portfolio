import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox=({text, link, btnText})=>(
  <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
      </Link>
  </div>
  )
const renderContent={
  1:(
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Abhay Thagle</span>👋<br/>A software Enthusiasm</h1>
  ),  
  2:(
    <InfoBox
    text="Gained hands-on experience with a wide range of technologies and skills through academic projects and industry internships"
    link='/about'
    btnText='Learn more'
    />

  ),  
  3:(
    <InfoBox
    text="Collaborated with diverse teams to build innovative projects, turning creative ideas into impactful solutions"
    link='/projects'
    btnText='visit my porfolio'
    />
  ),  
  4:(
    <InfoBox
    text="Feel free to reach out with any questions — I'm always happy to help and share more!"
    link='/contact'
    btnText="Let's talk"
    />
  ),  
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
