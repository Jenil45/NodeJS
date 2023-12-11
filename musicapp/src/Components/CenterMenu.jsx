import React from 'react'

const CenterMenu = () => {
    const listyle = 'hover:cursor-pointer border-b-[4px] border-[transparent] hover:border-[#525D6E] pb-[4px]'
  return (
    <div className="menu flex">
        <ul className='flex gap-[2rem]'>
            <li className={listyle}>Home</li>
            <li className={listyle}>About</li>
            <li className={listyle}>Performer</li>
            <li className={listyle}>Event Schedule</li>
        </ul>
    </div>
  )
}

export default CenterMenu
