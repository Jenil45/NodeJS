import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'
import ReactVisibilitySensor from 'react-visibility-sensor';

const Feature = ({icon , title}) => {


  return (
      <div className="feature flex flex-col items-center bg-[#081730] p-[1rem] rounded-[1rem] justify-center w-[15rem] text-center ">
          <img src={require(`../img/${icon}.png`)} className='w-[3rem]' alt="" />
          <span className='mt-[2rem]'><b>{title}</b></span>
          <span className='mt-[2.2rem] text-[#707070]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. in rem ut similique!</span>
          <span className='mt-[3rem] text-[#E600FF]'>Learn More</span>
      </div>
    
  )
}

export default Feature
