import React, { useEffect, useState ,  } from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import { getUserDetail } from '../Api/getUserDetail';
import { updateUser } from '../Api/updateUser';

const EditUser = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getPlayerDetail()
    } , [])

    const inputStyle = 'p-[0.5rem] w-[18rem] border-black border-[1px] rounded-[6px]';
    const [playerDetail , setPlayerDetail] = useState({
        pname : '',
        pno : '',
        prun : '',
        pabout : ''
    })

    const handleChange = (e) => {
        console.log(playerDetail);
        const {name , value} = e.target;
        setPlayerDetail({
            ...playerDetail ,
            [name] : value
        })
    }

    const updatePlayerDetail = async () => {
        if(playerDetail.pname && playerDetail.pno && playerDetail.prun && playerDetail.pabout)
        {
            const answer = await updateUser(playerDetail , id)
            console.log(answer.data);
            if(answer.data)
            {
                alert("Record updated successfully")
                navigate('/alluser')
            }
        }
        else
        {
            alert("Please fill all details")
        }
    }

    const getPlayerDetail = async () => {
        const response = await getUserDetail(id)
        console.log(response);
        setPlayerDetail(response.data)
    }
  return (
    <div className="edituser h-[50rem] flex flex-col gap-[1rem] items-center justify-start mt-[5rem] w-[50%] m-auto shadow-gray-100">
        <span className='text-[2rem]'>Update Details</span>
        <form action="" className='flex flex-col gap-[1rem]'>
            <input name='pname' value={playerDetail.pname} type="text" placeholder='Enter a Player Name' className={inputStyle}   onChange={handleChange} />
            <input name='pno' value={playerDetail.pno} type="number" placeholder='Enter a Player T-shirt No' className={inputStyle}  onChange={handleChange} />
            <input name='prun' value={playerDetail.prun} type="number" placeholder='Enter a Player highest run ' className={inputStyle} onChange={handleChange} />
            <input name='pabout' value={playerDetail.pabout} type="text" placeholder='Tell about player' className={inputStyle} onChange={handleChange} />
            <button type="button" onClick={updatePlayerDetail} className='p-[0.5rem] bg-[#cb5f5f] rounded-[6px] text-white w-[10rem] m-auto mt-[1rem] hover:bg-white hover:border-[#cb5f5f] border-[2px] hover:text-black'>Update</button>
        </form> 
    </div>
  )
}

export default EditUser
