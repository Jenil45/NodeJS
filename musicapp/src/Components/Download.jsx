import React from 'react'
import DownloadApp from './DownloadApp'

const Download = () => {
  return (
    <div className="download flex flex-col bg-[#020917] h-[50rem] mt-[-10rem] pt-[15rem] rounded-b-[5rem] items-center text-center relative z-[1]">
        <img src={require('../img/Path 318.png')} className='w-[5rem]' alt="" />
        <div className="i-left flex flex-col flex-1 mt-[-10rem] px-[4rem] gap-[1rem] text-[3rem] h-[100%] justify-center items-center">
            <span >Download The Best Music</span>
            <span><b>App Now!</b></span>
            <span className='text-[15px] text-[#525D6E]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi tenetur cum numquam tempora molestias deleniti. Laborum mollitia dolores ad distinctio odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quisquam incidunt doloremque veniam modi corporis mollitia cum similique voluptatem </span>

            <div className="download mt-[3rem]">
                <DownloadApp />
            </div>
        </div>
    </div>
  )
}

export default Download
