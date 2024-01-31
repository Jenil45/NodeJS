import React from 'react'
import CenterMenu from './CenterMenu'
import { Facebook , Twitter , YouTube , LinkedIn } from '@material-ui/icons'

const Footer = () => {

    const iconStyle = 'rounded-[100%] border-2 border-white p-[12px] hover:cursor-pointer hover:bg-[#525D6E]' 

  return (
    <div className="footer bg-[#081730] h-[35rem] mt-[-10rem] pt-[15rem] flex flex-col items-center relative z-[0]">
        <CenterMenu />
        <div className="flex w-[100%] justify-center mt-[3rem] gap-[2rem]">
            <div className={iconStyle}>
                <Facebook />
            </div>
            <div className={iconStyle}>
                <Twitter />
            </div>
            <div className={iconStyle}>
                <YouTube />
            </div>
            <div className={iconStyle}>
                <LinkedIn />
            </div>
        </div>
        <span className='text-center w-[50%] mt-[4rem] text-[1rem] text-[#525D6E]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem expedita reprehenderit ipsam ratione repudiandae odio in nobis ipsa sint! Lorem ipsum d
        </span>
    </div>
  )
}

export default Footer
