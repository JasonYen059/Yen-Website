import React from "react";
import "./SlideIcon.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SlideIcon = ({ left, right, leftTitle, rightTitle }) => {
  return (
    <div className="icon-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: "-10vw" }}
        whileHover={{ scale: 1.1 }}
        className="icon-div"
      >
        <Link to={left} className="link">
          <span className="icon-font">{leftTitle}</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: "10vw" }}
        whileHover={{ scale: 1.1 }}
        className="icon-div"
      >
        <Link to={right} className="link">
          <span className="icon-font">{rightTitle}</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default SlideIcon;
