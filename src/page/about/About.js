import React, { useEffect, useState } from "react";
import "./About.scss";
import Exp from "../../components/about-exp/Exp";
import { motion } from "framer-motion";
import yenbg from "../../img/yenbg2.jpg";
import yen from "../../img/yenPhoto.jpg";
import name from "../../img/name.png";
import SlideIcon from "../../components/slideIcon/SlideIcon";
import SlideDown from "../../components/slideIcon/SlideDown";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillInstagram,AiFillFacebook ,AiFillPhone} from "react-icons/ai";

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
            animate={{ opacity: 0.6, y: 0 }}
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
          <img className="name" src={name} alt="name"/>
          <div className="info-link">
            <div
              className="info-link-a"
              onClick={() => {
                setMail(!mail);
                setPhone(false);
              }}
            >
              <MdEmail />
            </div>
            <div
              className="info-link-a"
              onClick={() => {
                setPhone(!phone);
                setMail(false);
              }}
            >
              <AiFillPhone />
            </div>
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
              <AiFillFacebook />
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
              先前於廣告業擔任活動企劃與執行的職位，但過去在研究所時期接觸 UI 設計相關知識，因此對使用者介面及前端非常有興趣，便離職開始自學前端設計。
              自學前期，融合個人休閒興趣製作 side project ，將元素帶入作品中。自學後期與 UI設計師、前端、後端工程師合作開發project，學習團隊之間的溝通與討論。
              後續並透過朋友接案，負責前端的部分，累積實作相關經驗。期望未來自己能在前端領域繼續鑽研、深耕，並且持續精進自身實力與經驗，也希望能與未來合作夥伴打造出令使用者滿意的產品。
            </span>
          </div>
          <Exp/>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
