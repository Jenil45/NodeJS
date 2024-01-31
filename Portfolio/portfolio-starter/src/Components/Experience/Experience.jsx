import React, { useContext } from 'react'
import { themeContext } from '../../Context';
import './Experience.css'

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience-container' id='Experience'>
    <div className='e-title'>Experience</div>
    <br />
    <div className="experience">
        <div className="content">
            <div className="circle" style={darkMode?{backgroundColor : 'white' , color:'black'} : {backgroundColor : ''}}>8+</div>
            <span className="e-text1">years</span>
            <span className="e-text2">Experience</span>
        </div>
        <div className="content">
            <div className="circle" style={darkMode?{backgroundColor : 'white' , color:'black'} : {backgroundColor : ''}}>20+</div>
            <span className="e-text1">completed</span>
            <span className="e-text2">Projects</span>
        </div>
        <div className="content">
            <div className="circle" style={darkMode?{backgroundColor : 'white' , color:'black'} : {backgroundColor : ''}}>5+</div>
            <span className="e-text1">companies</span>
            <span className="e-text2">Work</span>
        </div>
    </div>
    </div>

  )
}

export default Experience
