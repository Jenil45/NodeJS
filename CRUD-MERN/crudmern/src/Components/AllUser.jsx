import React, { useEffect, useState } from 'react'
import { deleteUser } from '../Api/deleteUser'
import { getUser } from '../Api/getUser'
import bulb from '../images/bulb.png'

const AllUser = () => {

  const rowStyle = 'w-[100%] bg-[#cb5f5f] text-white text-[1.2rem]'
  const columnStyle = 'border-[2px] w-[15rem] border-black p-[0.7rem]'

  const rowStyle1 = 'w-[100%] bg-white text-black  text-[1.2rem] '
  const columnStyle1 = 'border-[2px] border-black p-[0.7rem] text-center'

  const buttonStyle = 'p-[8px] bg-[#cb5f5f] mx-[6px] text-white rounded border-white border-[1px] w-[5rem] hover:bg-transparent hover:text-black hover:border-black'

  const [playerInfo , setPlayerInfo] = useState([])

  useEffect(() => {
      getAllPlayer()
  }, [])

  const getAllPlayer = async () => {
    let answer = await getUser()
    // console.log(answer.data);
    setPlayerInfo(answer.data)
    console.log(playerInfo);
  }

  const deletePlayer = async (id) => {
    const answer = await deleteUser(id)
    console.log(answer);
      alert(answer.message)

  }


  return (
    <div className="alluser flex flex-col height-[60rem] items-center justify-center mt-[0rem] gap-[2rem]">
      {playerInfo.length>0 ?  
      <div className='text-center flex flex-col h-[60rem] items-center justify-start mt-[5rem] gap-[2rem]'>

      <span className='text-[2rem]  '>All Players Details</span>
      <table className='w-[100%]'>
          <tr className={rowStyle}>
            <th className={columnStyle}>Player Name</th>
            <th className={columnStyle}>T-shirt No</th>
            <th className={columnStyle}>Highest Run</th>
            <th className={columnStyle}>About</th>
            <th className={columnStyle}>
              <span>About/Delete</span>
            </th>
          </tr>

          {playerInfo.map((data , index) => (
            <tr index={index} className={rowStyle1}>
              <td className={columnStyle1}>{data.pname}</td>
              <td className={columnStyle1}>{data.pno}</td>
              <td className={columnStyle1}>{data.prun}</td>
              <td className={columnStyle1}>{data.pabout}</td>
              <td className={columnStyle1}>
                <a href= {`/edituser/${data._id}`}>
                  <span className={buttonStyle}>
                    Edit
                  </span>
                </a>
                <a href='' onClick={() => deletePlayer(data._id)}>
                  <span className={buttonStyle}>
                    Delete
                  </span>
                </a>
              </td>
            </tr>
            // console.log(data.pname);
          ))}

      </table>
      </div>

          :
          <div>
            <img src={bulb} className='w-[20rem]' alt="" />
            <span className='h-[20rem] text-[2.5rem] text-center w-[100%] bg-red'>Nothing to show</span>
          </div>
           }
    </div>
  )
}

export default AllUser
