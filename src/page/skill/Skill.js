import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";
import SlideIcon from "../../components/slideIcon/SlideIcon";
import SkillToggle from "../../components/skillToggole/SkillToggle";

const Skill = () => {

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
        staggerChildren: 0.2,
      },
    },
  };


  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="skill-container"
    >
      <div className="title-container">
        <motion.span
          initial={{ opacity: 0, y: "-50vw" }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.5 }}
          className="skill-title"
        >
          SKILL
        </motion.span>
      </div>

      <SlideIcon
        left="/work"
        leftTitle="WORK"
        right="/about"
        rightTitle="ABOUT"
      />

      <div className="skill-content">
        <SkillToggle title="CODING"/>
        <SkillToggle title="DESIGN"/>
        <SkillToggle title="MUSIC"/>
        <SkillToggle title="EVENT"/>

        
      </div>
    </motion.div>
  );
};

export default Skill;
