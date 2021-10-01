import React from 'react';
import "./SlideDown.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {FiChevronsDown} from "react-icons/fi";

const SlideDown = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 ,y:"-10vh"}}
        animate={{ opacity: 1,y:0}}
        transition={{ duration: 1 }}
        className="home-button-container">
          <Link to="/">
            <FiChevronsDown className="home-button"/>
          </Link>
        </motion.div>
    )
}

export default SlideDown
