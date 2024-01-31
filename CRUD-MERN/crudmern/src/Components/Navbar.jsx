import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar flex items-center p-[1.2rem] text-white bg-[#cb5f5f] justify-between">
        <div className="n-left flex-1 text-[1.6rem]"><a href="/">CRUD</a></div>        
        <div className="n-right flex-1">
            <ul className='text-[1.2rem] flex gap-[2rem] justify-end'>
                <Link to="/adduser">
                    <li>Add User</li>
                </Link>
                <Link to="/alluser">
                    <li>All User</li>
                </Link>
            </ul>
        </div>        
    </div>
  )
}

export default Navbar
