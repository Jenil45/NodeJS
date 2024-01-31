import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

// right side images
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import thumb from '../../img/thumbup.png'
import user from '../../img/boy.png'
import crown from '../../img/crown.png'
import smiley from '../../img/glassesimoji.png'
import Floatingbox from '../FloatingBox/Floatingbox';

import {motion} from 'framer-motion'
const Intro = () => {

    const transition = {duration : 2 , type : 'spring'}

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-content">
                <span>Hy! I am</span>
                <span>Jenil Thakor</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, aliquam error accusamus voluptates mollitia velit iure animi alias reiciendis aut hic magni maxime molestias numquam debitis magnam eos vel sapiente.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="">
                    <img src={Github} alt="" srcset="" />
                </a>
                <a href="">
                    <img src={Linkedin} alt="" srcset="" />
                </a>
                <a href="">
                    <img src={Instagram} alt="" srcset="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" srcset="" />
            <img src={vector2} alt="" srcset="" />
            <img src={user} alt="" srcset="" />

            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}

            src={smiley} alt="" srcset="" />

            <motion.div
                initial={{top:'-18%' , left:'80%'}}
                whileInView={{left:'70%'}}
                transition={transition} 
                className='floatingdiv'
            style={{top:'-8%' , left:'60%' }}>
                <Floatingbox img={thumb} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div
                initial={{left:'13rem' , top:'18rem' }}
                whileInView={{left:'2rem'}}
                transition={transition}

            style={{top:'70%' , left:'5%' }}>
                <Floatingbox img={crown} txt1="Java" txt2="Developer"/>
            </motion.div>

            {/* Blur containers */}
            <div className="blur" style={{background : "rgb(236 210 255"}}> </div>

            <div className="blur" style={{background : "#c1f5ff" , top:'60%' , left:'0%'}}> </div>
        </div>
    </div>      
  )
}

export default Intro
