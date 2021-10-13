import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import drumPad from "../../img/drumpad.svg";
import Pad from "../../components/drumPad/drumPad";


const keyInfo = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: '/loop1.mp3',
    stopKeyCode:65,
    holdKeyCode: 90,
    holdKey:'Z'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: '/kold150.mp3',
    stopKeyCode:83,
    holdKeyCode: 88,
    holdKey:'X'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: '/kickass150.mp3',
    stopKeyCode:68,
    holdKeyCode: 67,
    holdKey:'C'
  },
  {
    keyCode: 82,
    key: 'R',
    id: 'Side-Stick',
    url: '/puny160.mp3',
    stopKeyCode:70,
    holdKeyCode: 86,
    holdKey:'V'
  },
  {
    keyCode: 84,
    key: 'T',
    id: 'Shaker',
    url: '/drumloop.mp3',
    stopKeyCode:71,
    holdKeyCode: 66,
    holdKey:'B'
  },
  {
    keyCode: 89,
    key: 'Y',
    id: 'Open-HH',
    url: '/drumloop150-2.mp3',
    stopKeyCode:72,
    holdKeyCode: 78,
    holdKey:'N'
  },
  {
    keyCode: 85,
    key: 'U',
    id: 'Closed-HH',
    url: '/drumloop150-3.mp3',
    stopKeyCode:74,
    holdKeyCode: 77,
    holdKey:'M'
  },
  {
    keyCode: 73,
    key: 'I',
    id: 'Punchy-Kick',
    url: '/drumloop160.mp3',
    stopKeyCode:75,
    holdKeyCode: 188,
    holdKey:'<'
  }
  
];

const Home = () => {
  // const [X, setX] = useState(0);
  // const [windowSize, setWindowSize] = useState(undefined);

  // const setmouseEvent = (e) => {
  //   let xmove = e.nativeEvent.clientX - windowSize / 2;
  //   setX(-xmove);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      {/* <motion.div
        animate={{ x: X }}
        transition={{ type: "spring", damping: 20 }}
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
      </motion.div> */}

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
