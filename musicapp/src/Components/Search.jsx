import React, { useState } from 'react'
import MusicPlayer from './MusicPlayer'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

const Search = () => {

    const [elementVisible , setElementVisible] = useState(false);
    const transition = {duration : 1 , type : "ease-out"}
  
    // transitions
    const backgraphic = {true : {left : '-57rem'} , false : {left : '-69rem'}}
    const p1 = {true : {top : '9rem' ,} , false : {top : '19rem' }}
    const p2 = {true : {left : '18rem' , top : '5rem'} , false : {left : '7rem'}}
    const p3 = {true : {left : '14rem' , top : '11.5rem'} , false : {left : '19rem'}}
    const p4 = {true : {left : '10rem' , top : '9.2rem'} , false : {left : '11.5rem'}}

  return (
    <VisibilitySensor onChange={(isVisible)=>{setElementVisible(isVisible)}} minTopValue={900}>

    <div className="serach flex h-[60rem] bg-[#081730] mt-[-15rem] pt-[15rem] z-[2] px-[2rem] relative rounded-b-[5rem]">
        <div className="s-left flex-1">
            <motion.img
            transition={transition}
            animate={`${elementVisible}`}
            variants={backgraphic}

            className='absolute left-[-69rem]' src={require('../img/backgraphics.png')} alt="" />


            <motion.img
            transition={transition}
            animate={`${elementVisible}`}
            variants={p1}

            className='absolute w-[16rem] left-[5rem] top-[9rem]' src={require('../img/d1.png')} alt="" />
            <motion.img
            transition={transition}
            animate={`${elementVisible}`}
            variants={p2}

            className='absolute w-[9rem] left-[7rem] top-[25rem]' src={require('../img/d2.png')} alt="" />
            <motion.img
            transition={transition}
            animate={`${elementVisible}`}
            variants={p3}

            className='absolute w-[9rem] left-[16.5rem] top-[25.5rem]' src={require('../img/d3.png')} alt="" />
            <motion.img
            transition={transition}
            animate={`${elementVisible}`}
            variants={p4}

            className='absolute w-[13rem] left-[4rem] top-[44rem]' src={require('../img/d4.png')} alt="" />
            
        </div>
        <div className="s-right flex-1 pt-[9rem] flex flex-col items-start justify-start h-[100%]">
            <div className="searchbar flex justify-start w-[100%] ">
                <input type="text" placeholder='Enter any keyword or url' className='z-[10] bg-[#020917] p-3 rounded-[10px] h-[3rem] flex-[18]' value='' />
                <div className="searchImg h-[3rem] flex flex-1 items-center ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-3 rounded-xl">
                    <img src={require('../img/search.png')} className='w-[1.5rem]' alt="" />
                </div>
            </div>
            
            <div className="tild flex justify-start  mt-7 items-center w-[100%]">
                <img src={require('../img/Path 318.png')} className='w-[5rem]' alt="" />
            </div>
            <div className="detail flex flex-col gap-[0.2rem] mt-[1rem] text-[2rem]">
                <span>Search Music By</span>
                <span><b>Name or Direct URL</b></span>
                <span className='text-[14px] text-[#525D6E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem eaque iusto et fuga, quia vero laboriosam error esse voluptatibus? Doloremque, cum recusandae? Pariatur, voluptatibus earum? Doloremque velit distinctio vitae!</span>
            </div>

            <MusicPlayer />
        </div>
    </div>
    </VisibilitySensor>
    
  )
}

export default Search
