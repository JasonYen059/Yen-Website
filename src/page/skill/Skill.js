import React, { useEffect } from "react";
import "./Skill.scss";
import { motion } from "framer-motion";
import SlideIcon from "../../components/slideIcon/SlideIcon";
import SkillToggle from "../../components/skillToggole/SkillToggle";
import SlideDown from "../../components/slideIcon/SlideDown";


const Skill = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const items = [
    {
      id: 1,
      text: [
        "HTML5",
        "CSS_SCSS",
        "JavaScript",
        "jQuery",
        "Vue框架",
        "Vue Cli開發",
        "VueX狀態管理",
        "React框架",
        "React Hooks",
        "React Router",
        "Redux Toolkit",
        "Component 結構管理",
        "CRUD API 操作",
        "Git_Github",
        "Bootstrap 4",
        "Framer Motion",
      ],
    },
    {
      id: 2,
      text: [
        "Illustrator",
        "Photoshop",
        "Rhino _ 3D Modeling",
        "Product Design"
      ],
    },
    {
      id: 3,
      text: [
        "FL Studio _ Music DAW",
        "Ableton Live _ Music DAW",
        "Music Produce",
        "Drum"
      ],
    },
    {
      id: 4,
      text: [
        "實體活動規劃與執行",
        "行銷製作物規劃與製作",
        "活動會場佈置"
      ]
    },
  ];

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
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8 }}
          className="skill-title"
        >
          SKILL
        </motion.span>

        <SlideDown/>
      </div>

      <SlideIcon
        left="/work"
        leftTitle="WORK"
        right="/about"
        rightTitle="ABOUT"
      />

      <div className="skill-content">
        <SkillToggle title="CODING" items={items[0].text} link='https://github.com/JasonYen059' linktype="github"/>
        <SkillToggle title="DESIGN" items={items[1].text} link='none' linktype="none"/>
        <SkillToggle title="MUSIC" items={items[2].text} link='https://soundcloud.com/imptiwpikyzo/tracks' linktype="soundcloud"/>
        <SkillToggle title="EVENT" items={items[3].text} link='none' linktype="none"/>
      </div>
    </motion.div>
  );
};

export default Skill;
