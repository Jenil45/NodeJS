import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import glass from '../../img/glasses.png'
import heart from '../../img/heartemoji.png'
import humble from '../../img/humble.png'
import resume from '../../Resume/CV.pdf'
import {motion} from 'framer-motion'


const Services = () => {

    const transition = {duration : 2 , type : 'spring'}

  return (
    <div className="services" id='Services'>
        <div className="s-left">
            <span className="s-title1">My Awesome</span>
            <span className="s-title2">services</span>
            <span className="s-content"> qui officia accusantium eligendi repellendus nemo quam magnam molestiae nihil, amet ea consectetur expedita ad voluptatibus delectus error fugiat.</span>
            <a href={resume} download>
                <button className="button s-button">Download CV</button>
            </a>
        </div>
        <div className="s-right">
            <motion.div
                initial={{left:'20rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}
            >
                <Card img={heart} title="Design" detail="Figma , Adobe , Phototshop , Blender" />
            </motion.div>
            <motion.div
                initial={{left:'-10rem'}}
                whileInView={{left:'-2rem'}}
                transition={transition}
            >
                <Card img={glass} title="Design" detail="Figma , Adobe , Phototshop , Blender" />
            </motion.div>
            <motion.div
                initial={{left:'20rem'}}
                whileInView={{left:'12rem'}}
                transition={transition}            
            >
                <Card img={humble} title="Design" detail="Figma , Adobe , Phototshop , Blender" />
            </motion.div>
        </div>

        <div className="s-blur blue-blur"></div>
        <div className="s-blur pink-blur"></div>
    </div>
  )
}

export default Services
