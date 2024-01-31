import React, { useState } from 'react'
import DownloadApp from './DownloadApp'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

const Intro = () => {

  const [elementVisible , setElementVisible] = useState(false);
  const transition = {duration : 1 , type : "ease-out"}

  // transitions
  const backgraphic = {true : {left : '7rem'} , false : {left : '19rem'}}
  const p1 = {true : {top : '-16rem' ,} , false : {top : '-19rem' }}
  const p2 = {true : {left : '18rem' , top : '5rem'} , false : {left : '7rem'}}
  const p3 = {true : {left : '14rem' , top : '11.5rem'} , false : {left : '19rem'}}
  const p4 = {true : {left : '10rem' , top : '9.2rem'} , false : {left : '11.5rem'}}

  return (

    <VisibilitySensor onChange={(isVisible)=>{setElementVisible(isVisible)}} minTopValue={300}>
      <div className="intro bg-[#081730] flex items-center justify-between w-[100%] h-[40rem] relative rounded-b-[5rem] mt-[-1.2rem] z-[4]">
          <div className="i-left flex flex-col flex-1 px-[4rem] text-[3rem] h-[100%] justify-center items-start">
              <span >Experience the</span>
              <span><b>Best Quality Music</b></span>
              <span className='text-[15px] text-[#525D6E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi tenetur cum numquam tempora molestias deleniti. Laborum mollitia dolores ad distinctio odit?</span>

              <div className="download">
                  <span className='text-[20px]'>Download now on iOS and Android</span>
                  <DownloadApp />
              </div>
          </div>
          <div className="i-right flex-1 relative">

              <motion.img 
                transition={transition}
                animate={`${elementVisible}`}
                variants={backgraphic}

              className='absolute top-[-8rem] left-[19rem]' src={require('../img/backgraphics.png')} alt="" />
              
              <motion.img 
                transition={transition}
                animate={`${elementVisible}`}
                variants={p1}

              className='absolute top-[-25rem] left-[13rem] h-[34rem]' src={require('../img/p 1.png')} alt="" />
              
              <motion.img 
                transition={transition}
                animate={`${elementVisible}`}
                variants={p2}

              className='absolute top-[1rem] left-[14.8rem] w-[10.5rem]' src={require('../img/p 2.png')} alt="" />
              
              <motion.img 
                transition={transition}
                animate={`${elementVisible}`}
                variants={p3}

              className='absolute top-[9.5rem] left-[-10rem] w-[4rem]' src={require('../img/p 3.png')} alt="" />
              
              <motion.img 
                transition={transition}
                animate={`${elementVisible}`}              
                variants={p4}

              className='absolute top-[7.5rem] left-[11.5rem] w-[8rem]' src={require('../img/p 4.png')} alt="" />


          </div>
      </div>
    </VisibilitySensor>
  )
}

export default Intro
