import React, { useState } from 'react'
import { addUser } from '../Api/addUser';
import {useNavigate} from 'react-router-dom'

const AddUser = () => {

    const navigate = useNavigate();

    const inputStyle = 'p-[0.5rem] w-[18rem] border-black border-[1px] rounded-[6px]';
    const [player , setPlayer] = useState({
        pname : '',
        pno : '',
        prun : '',
        pabout : ''
    })

    const handleChange = (e) => {
        console.log(player);
        const {name , value} = e.target;
        setPlayer({
            ...player ,
            [name] : value
        })
    }

    const addPlayerDetail = async () => {
        if(player.pname && player.pno && player.prun && player.pabout)
        {
            const answer = await addUser(player)
            console.log(answer.data);
            if(answer.data)
            {
                alert("Record inserted successfully")
                navigate('/alluser')
            }
        }
        else
        {
            alert("Please fill all details")
        }
    }

  return (
    <div className="adduser h-[50rem] flex flex-col gap-[1rem] items-center justify-start mt-[5rem] w-[50%] m-auto shadow-gray-100">
        <span className='text-[2rem]'>Add User</span>
        <form action="" className='flex flex-col gap-[1rem]'>
            <input name='pname' value={player.pname} type="text" placeholder='Enter a Player Name' className={inputStyle}   onChange={handleChange} />
            <input name='pno' value={player.pno} type="number" placeholder='Enter a Player T-shirt No' className={inputStyle}  onChange={handleChange} />
            <input name='prun' value={player.prun} type="number" placeholder='Enter a Player highest run ' className={inputStyle} onChange={handleChange} />
            <input name='pabout' value={player.pabout} type="text" placeholder='Tell about player' className={inputStyle} onChange={handleChange} />
            <button type="button" onClick={addPlayerDetail} className='p-[0.5rem] bg-[#cb5f5f] rounded-[6px] text-white w-[14rem] m-auto mt-[1rem] hover:bg-white hover:border-[#cb5f5f] border-[2px] hover:text-black'>Add User</button>
        </form> 

    </div>
  )
}

export default AddUser
