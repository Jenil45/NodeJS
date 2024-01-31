import React, { createContext, useContext, useState } from 'react'
import './Toggle.css'
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import { themeContext } from '../../Context';


const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleDark = () => {
    theme.setState({type : 'toggle'});
  }

  return (

        <div className="toggle" onClick={handleDark}>
            <Moon />
            <Sun />

            <div className="t-button" style={darkMode?{left:'2px'} : {right : '2px'}} >

            </div>
        </div>
  )
}

export default Toggle
