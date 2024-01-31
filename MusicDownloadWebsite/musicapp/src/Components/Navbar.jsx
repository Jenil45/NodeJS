import React from 'react'
import CenterMenu from './CenterMenu'

const Navbar = () => {
    const buttonStyle = 'border-[3px] rounded-[10px] border-[#232A4E] p-[8px] hover:bg-[#232A4E]'

  return (

    <div className="header bg-[#081730] flex items-center justify-between h-[6rem] p-[1.2rem]">
        <img src={require('../img/MuzicLogo.png')} alt="" />
        <CenterMenu />
        <div className="buttons flex gap-[1.5rem] p-[2rem]">
            <button className={buttonStyle}>SignUp</button>
            <button className={buttonStyle}>LogIn</button>
        </div>
    </div>
  )
}

export default Navbar
