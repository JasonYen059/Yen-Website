import React, { useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import man from "../../img/yellowcar.jpg";
import SlideIcon from "../../components/slideIcon/SlideIcon";
import SlideDown from "../../components/slideIcon/SlideDown";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
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

        <div className="title-container">
          <motion.span
            initial={{ opacity: 0, y: "-50vw"}}
            animate={{ opacity: 0.3, y:0 }}
            transition={{ duration: 0.8 }}
            className="about-title"
          >
            ABOUT
          </motion.span>

          <SlideDown />
        </div>
      </div>

      <SlideIcon
        left="/skill"
        leftTitle="SKILL"
        right="/work"
        rightTitle="WORK"
      />

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
