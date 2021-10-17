import React, { useEffect, useState, useCallback } from "react";
import "./drumPad.scss";
import { ImLoop2 } from "react-icons/im";

const Pad = ({ keyInfo }) => {
  const [tap, setTap] = useState(false);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handlekey);
    return () => {
      document.removeEventListener("keydown", handlekey);
    };
  }, []);

  const handlekey = (e) => {
    if (e.keyCode === keyInfo.keyCode) {
      playsound();
    }
    if (e.keyCode === keyInfo.holdKeyCode) {
      presshold();
    }
  };
  useEffect(() => {
    const audioTag = document.getElementById(keyInfo.key);
    audioTag.loop = hold;
  }, [hold, keyInfo.key]);

  const playsound = () => {
    const audioTag = document.getElementById(keyInfo.key);
    if (audioTag.currentTime === 0) {
      audioTag.play();
      setTap(true);
      audioTag.onended = () => {
        audioTag.currentTime = 0;
        setTap(false);
      };
    } else {
      audioTag.pause();
      audioTag.currentTime = 0;
      setTap(false);
    }
   
  };


  const presshold = useCallback(() => setHold((prevIsOn) => !prevIsOn), []);
  return (
    <div className="clipall">
      <div onClick={playsound} className={`pad-container ${tap && "active"}`}>
        <audio className="clip" id={keyInfo.key} src={process.env.PUBLIC_URL + keyInfo.url} />
        <span className="infokey">{keyInfo.key}</span>
      </div>
      <div
        onClick={presshold}
        id={keyInfo.id}
        className={`loop-btn ${hold && "holdactive"}`}
      >
        <span className="infokey-loop">{keyInfo.holdKey}</span>
        <span className="loop-text">
          <ImLoop2 />
        </span>
      </div>
    </div>
  );
};

export default Pad;
