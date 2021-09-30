import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import man from "../../img/yellowcar.jpg";
import SlideIcon from "../../components/slideIcon/SlideIcon";


const About = () => {
  const container = {
    hidden: { opacity: 0 ,transition: {
      duration: 0.5}},
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemA = {
    hidden: { opacity: 0, x: "-100vw" },
    show: { opacity: 0.3, x: "-2vw", transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="about-container"
    >
      <div className="about-header">
        <div className="photo-container">
          <img className="yen" src={man} alt="yen" />
        </div>

        <motion.span variants={itemA} className="about-title">
          ABOUT
        </motion.span>
        
        <SlideIcon left="/skill" leftTitle="SKILL" right="/work" rightTitle="WORK"/>
      </div>

      <div className="introduce">
        <span className="intro-subtitle">WHY</span>
      </div>

      <div style={{ backgroundColor: "#f5f5f5" }} className="introduce">
        <span className="intro-subtitle">WHAT</span>
      </div>

      <div className="introduce">
        <span className="intro-subtitle">HOW</span>
      </div>
    </motion.div>
  );
};

export default About;
