import React from 'react'

const MusicPlayer = () => {
  return (
    <div className="musicplayer mt-[2rem] bg-[#232A4E] p-[2rem] w-[100%] flex justify-center flex-col rounded-[1rem]">
        <div className="m-up flex items-center justify-between">
            <div className="profile flex gap-[1rem] items-center ">
                <img src={require('../img/Mask Group 23.png')} className='w-[3.2rem] border-2 border-white rounded-[100%]' alt="" />
                <div className="profile-content flex flex-col">
                    <span>Tristiam Bone Dry</span>
                    <span className='text-[#525D6E]'>Unknown Artist</span>
                </div>
            </div>
            <div>
                <img src={require('../img/path.png')} className='w-[0.4rem]' alt="" />
            </div>
        </div>
        <div className="m-lower flex flex-1 mt-[1rem]">
            <div className="track flex gap-[1rem] items-center justify-center">
                <span className='text-[#525D6E]'>2:30</span>
                <img src={require('../img/Group 9.png')} className='w-[17rem]' alt="" />
                <span className='text-[#525D6E]'>4:30</span>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer
