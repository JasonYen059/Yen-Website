import React,{useState} from 'react';
import "./SkillToggle.scss";
import { motion, AnimatePresence } from "framer-motion";

const SkillToggle = ({title}) => {
    const [toggle, setToggle] = useState(false);
    const toggleAnimate = {
        hidden: { opacity: 0, y: "100vh" },
        show: { opacity: 1, y: 0, transition: { duration: 1 } },
      };
    return (
        <motion.div variants={toggleAnimate} className="toggle-container">
          <div
            className="toggle-title"
            onClick={() => setToggle(!toggle)}
          >
            {title}
          </div>
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0,height:0 }}
                animate={{ opacity: 1,height:"auto"}}
                exit={{ opacity: 0,height:0 }}
                className="toggle-text-container"
              >
                <span className="toggle-text">
                  Vue
                  <br />
                  React
                  <br />
                  CSS,HTML,SCSS
                  <br />
                  BOOTSTRAP
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
    )
}

export default SkillToggle
