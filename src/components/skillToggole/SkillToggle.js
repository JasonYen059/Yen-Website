import React, { useState, useEffect } from "react";
import "./SkillToggle.scss";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { ImSoundcloud } from "react-icons/im";

const SkillToggle = ({ title, items, link, linktype }) => {
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
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={toggleAnimate} className="toggle-container">
      <div className="toggle-title">
        {title}
        {showLink && (
          <div className="link-container">
            <a href={link} className="skill-link">
              {linkType ? (
                <AiFillGithub className="github" />
              ) : (
                <ImSoundcloud className="soundcloud" />
              )}
            </a>
          </div>
        )}
        </div>
      
      <motion.div variants={toggleAnimate} className="toggle-text-container">
        {items.map((item, i) => (
          <span key={i} className="toggle-text">
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillToggle;
