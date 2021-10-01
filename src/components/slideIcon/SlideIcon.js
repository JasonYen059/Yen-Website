import React from 'react';
import "./SlideIcon.scss";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
// import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const SlideIcon = ({left,right,leftTitle,rightTitle}) => {
    return (
        <div className="icon-container">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,x:"-10vw"}}
        transition={{duration:0.3}}
        whileHover={{ scale: 1.1 }} 
        className="icon-div">
          <Link to={left} className="link">
            {/* <BsChevronCompactLeft className="icon" /> */}
            <span className="icon-font">{leftTitle}</span>
          </Link>
        </motion.div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0,x:"10vw"}}
        transition={{duration:0.3}}
        whileHover={{ scale: 1.1 }} className="icon-div">
          <Link to={right} className="link">
            <span className="icon-font">{rightTitle}</span>
            {/* <BsChevronCompactRight className="icon" /> */}
          </Link>
        </motion.div>
      </div>
    )
}

export default SlideIcon
