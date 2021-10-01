import React, { useState, useEffect } from "react";
import "./SkillToggle.scss";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { ImSoundcloud } from "react-icons/im";

const SkillToggle = ({ title, items, link, linktype }) => {
  const [toggle, setToggle] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [linkType, setLinkType] = useState(true);

  useEffect(() => {
    if (link !== "none") {
      setShowLink(true);
    }
    if (linktype === "github") {
      setLinkType(true);
    } else {
      setLinkType(false);
    }
  }, [link, linktype]);

  const toggleAnimate = {
    hidden: { opacity: 0, y: "100vh" },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={toggleAnimate} className="toggle-container">
      <div className="toggle-title" onClick={() => setToggle(!toggle)}>
        {title}
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="toggle-text-container"
          >
            {showLink && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="link-container"
              >
                <a href={link} className="skill-link">
                  {linkType ? (
                    <AiFillGithub className="github"/>
                  ) : (
                    <ImSoundcloud className="soundcloud"/>
                  )}
                </a>
              </motion.div>
            )}
            {items.map((item, i) => (
              <span key={i} className="toggle-text">
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillToggle;
