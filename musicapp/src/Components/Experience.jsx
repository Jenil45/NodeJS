import React, { useState } from 'react'
import Feature from './Feature'

const Experience = () => {

   return (

    <div className="experience bg-[#020917] h-[60rem] flex  flex-col items-center z-[3] relative justify-start pt-[16rem] mt-[-10rem] rounded-b-[5rem]">
        <img className='w-[5rem]' src={require('../img/Path 318.png')} alt="" />
        <span className='mt-[1rem] text-[1.6rem]'>An Amzing App Can  Change Your Daily Life</span>
        <span className='text-[1.6rem]'><b>Music Experience</b></span>
        <div className="feature-container flex items-center justify-center gap-[5rem] mt-[6rem] w-[100%] relative">
            <Feature icon="Group 2" title="For Live Music" />
            <Feature icon="music icon" title="For Live Music" />
            <Feature icon="Group 4" title="For Live Music" />
        </div>
    </div>
  )
}

export default Experience
