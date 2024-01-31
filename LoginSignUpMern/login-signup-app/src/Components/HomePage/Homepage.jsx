import React from 'react'
import './Homepage.css'

const Homepage = ({name , setPermision}) => {
  return (
    <div className="homepage">
      <h1>Hello {name}</h1>
      <button className="button" onClick={() => setPermision({})}>LogOut</button>
    </div>
  )
}

export default Homepage
