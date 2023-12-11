import React from 'react'

const DownloadApp = () => {

    const dImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem] hover:cursor-pointer'
  return (
    <div className='d-container mt-[1rem]'>
        <div className="d-images flex gap-[1.2rem]">
            <img className={dImgStyle} src={require('../img/App Store.png')} alt="" />
            <img className={dImgStyle} src={require('../img/Google Play.png')} alt="" />
        </div>
      
    </div>
  )
}

export default DownloadApp
