import React, { useState } from "react";
import "./Work.css";
import facebook from "../../img/Facebook.png";
import amazon from "../../img/amazon.png";
import fiver from "../../img/fiverr.png";
import upwork from "../../img/Upwork.png";
import shopify from "../../img/Shopify.png";
// import { color } from 'd3'
import { motion } from "framer-motion";

const Work = () => {
  const transition = { duration: 2.5, type: "spring" };

  return (
    <div className="work">
      <div className="w-left">
        <span className="w-title1">Work for All these</span>
        <span className="w-title2">Brands & Clients</span>
        <span className="w-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut velit
          unde voluptates enim, officia obcaecati error iure atque omnis veniam?
          Odio accusamus iure id voluptates illum temporibus odit eum dolor?
        </span>
        <button className="w-button button">Hire Me</button>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          transition={transition}
          className="w-circle"
        >
          <div className="s-circle">
            <img src={upwork} alt="" />
          </div>
          <div className="s-circle">
            <img src={fiver} alt="" />
          </div>
          <div className="s-circle">
            <img src={amazon} alt="" className="amazon" />
          </div>
          <div className="s-circle">
            <img src={shopify} alt="" />
          </div>
          <div className="s-circle">
            <img src={facebook} alt="" />
          </div>
        </motion.div>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
      </div>
    </div>
  );
};

export default Work;
