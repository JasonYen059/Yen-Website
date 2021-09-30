import React, { useState, useEffect } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [X, setX] = useState(0);
  const [windowSize, setWindowSize] = useState(undefined);

  const setmouseEvent = (e) => {
    let xmove = e.nativeEvent.clientX - windowSize / 2;
    setX(-xmove);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    }
    
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <div className="text-container">
        <span className="text-title">JASON YEN</span>
        <span className="text-subtitle">FRONT-END DEVELOPER</span>
      </div>

      <motion.div
        animate={{ x: X }}
        className="link-container"
        onMouseMove={setmouseEvent}
      >
        <Link to="/about" className="link-title">
          <motion.span whileHover={{ scale: 1.1 }}>ABOUT</motion.span>
        </Link>
        <Link to="/work" className="link-title">
          <motion.span whileHover={{ scale: 1.1 }}>WORK</motion.span>
        </Link>
        <Link to="/skill" className="link-title">
          <motion.span whileHover={{ scale: 1.1 }}>SKILL</motion.span>
        </Link>
      </motion.div>

      <div className="footer-container">
        <span>JasonYen © 2021. All Right Reserved.</span>
      </div>
    </motion.div>
  );
};

export default Home;
