import React, { useEffect, useState } from "react";
import "./About.scss";
import Exp from "../../components/about-exp/Exp";
import { motion } from "framer-motion";
import yenbg from "../../img/yenbg2.jpg";
import yen from "../../img/yenPhoto.jpg";
import SlideIcon from "../../components/slideIcon/SlideIcon";
import SlideDown from "../../components/slideIcon/SlideDown";
import { FiMail, FiPhone } from "react-icons/fi";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const About = () => {
  const [mail, setMail] = useState(false);
  const [phone, setPhone] = useState(false);

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
          <img className="yen" src={yenbg} alt="yen" />
        </div>

        <div className="title-container">
          <motion.span
            initial={{ opacity: 0, y: "-50vw" }}
            animate={{ opacity: 0.3, y: 0 }}
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
        <div className="introduce-top">
          <img className="yenPhoto" src={yen} alt="yenPhoto" />
          <span className="name">嚴晨霖</span>
          <span className="name">Jason Yen</span>
          <div className="info-link">
            <button
              className="info-link-a"
              onClick={() => {
                setMail(!mail);
                setPhone(false);
              }}
            >
              <FiMail />
            </button>
            <button
              className="info-link-a"
              onClick={() => {
                setPhone(!phone);
                setMail(false);
              }}
            >
              <FiPhone />
            </button>
            <a className="info-link-a" href="https://github.com/JasonYen059">
              <AiFillGithub />
            </a>
            <a className="info-link-a" href="https://www.instagram.com/jsn059/">
              <AiFillInstagram />
            </a>
            <a
              className="info-link-a"
              href="https://www.facebook.com/profile.php?id=100002196454678"
            >
              <FaFacebookF />
            </a>
          </div>
          {mail && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="contact"
            >
              <span>jason753357@gmail.com</span>
            </motion.div>
          )}
          {phone && (
            <div className="contact">
              <span>0911-589-718</span>
            </div>
          )}
        </div>
        <div className="introduce-bottom">
          <div className="info">
            <span className="info-text">
              過去於互動設計公司擔任軟體工程師，因為是接案性質因此需要不斷精進並整合不同技術，包括前後端開發、軟硬體整合、硬體開發…等等。對前端領域有強烈的熱情，除了完成工作上的專案以外，常常利用下班時間學習、進修新的前後端技術與參加聚會，也會利用閒暇時間將過去工作所使用的技術與前後端進行整合的side
              project以求不斷充實並精進自己。過去於互動設計公司擔任軟體工程師，因為是接案性質因此需要不斷精進並整合不同技術，包括前後端開發、軟硬體整合、硬體開發…等等。對前端領域有強烈的熱情，除了完成工作上的專案以外，常常利用下班時間學習、進修新的前後端技術與參加聚會，也會利用閒暇時間將過去工作所使用的技術與前後端進行整合的side
              project以求不斷充實並精進自己。
            </span>
          </div>
          <Exp/>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
