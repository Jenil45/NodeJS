import React, { useContext } from 'react'
import { themeContext } from '../../Context';
import './Floatingbox.css'

const Floatingbox = ({img , txt1 , txt2}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="floatingdiv">
        <img src={img} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default Floatingbox
