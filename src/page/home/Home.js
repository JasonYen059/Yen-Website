import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import drumPad from "../../img/drumpad.svg";
import Pad from "../../components/drumPad/drumPad";


const keyInfo = [
  {
    keyCode: 49,
    key: '1',
    id: 'Melody',
    url: "/melody.mp3",
    stopKeyCode:65,
    holdKeyCode: 81,
    holdKey:'Q'
  },
  {
    keyCode: 50,
    key: '2',
    id: 'Melody2',
    url: "/reverse-melody.mp3",
    stopKeyCode:83,
    holdKeyCode: 87,
    holdKey:'W'
  },
  {
    keyCode: 51,
    key: '3',
    id: 'Lead',
    url: "/lead.mp3",
    stopKeyCode:68,
    holdKeyCode: 69,
    holdKey:'E'
  },
  {
    keyCode: 52,
    key: '4',
    id: 'BreakMelody',
    url: "/break-melody.mp3",
    stopKeyCode:70,
    holdKeyCode: 82,
    holdKey:'R'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Bass',
    url: "/bass.mp3",
    stopKeyCode:71,
    holdKeyCode: 90,
    holdKey:'Z'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Hi-Hat',
    url: "/hat.mp3",
    stopKeyCode:72,
    holdKeyCode: 88,
    holdKey:'X'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Crash',
    url: "/crash.mp3",
    stopKeyCode:74,
    holdKeyCode: 67,
    holdKey:'C'
  },
  {
    keyCode: 70,
    key: 'F',
    id: 'Kick',
    url: "/kick.mp3",
    stopKeyCode:75,
    holdKeyCode: 86,
    holdKey:'V'
  }
  
];

const Home = () => {
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >

      <div className="drumPad-container">
        <img src={drumPad} alt="drumPad" className="drumPad" />
        <div className="pad-outdiv">
        {keyInfo.map((clip)=>(
          <Pad key={clip.id} keyInfo={clip}/>
        ))}
        </div>
        <div className="text-container">
          <span className="text-title">JASON YEN</span>
          <span className="text-subtitle">FRONT-END DEVELOPER</span>
        </div>

        <div className="link-container">
        <Link to="/about" className="link-title">
          <span >ABOUT</span>
        </Link>
        <Link to="/work" className="link-title">
          <span >WORK</span>
        </Link>
        <Link to="/skill" className="link-title">
          <span >SKILL</span>
        </Link>
        </div>
      </div>

      <div className="footer-container">
        <span>JasonYen © 2021. All Right Reserved.</span>
      </div>
    </motion.div>
  );
};

export default Home;
