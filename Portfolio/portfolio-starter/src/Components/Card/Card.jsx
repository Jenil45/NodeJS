import React from 'react'
import './Card.css'

const Card = ({img , title , detail}) => {
  return (
    <div className="card">
        <img src={img} alt="" />
        <span className="c-title">{title}</span>
        <span className="c-detail">{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card
