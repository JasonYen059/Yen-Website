import React, { useEffect, useState, useCallback } from "react";
import "./drumPad.scss";
import { ImLoop2 } from "react-icons/im";

const Pad = ({ keyInfo }) => {
  const [tap, setTap] = useState(false);
  const [hold, setHold] = useState(false);
  
  const presshold = useCallback(() => setHold((prevIsOn) => !prevIsOn), []);
  const playsound = useCallback(() => {
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
  }, [keyInfo]);

  useEffect(() => {
    const handlekey = (e) => {
      if (e.keyCode === keyInfo.keyCode) {
        playsound();
      }
      if (e.keyCode === keyInfo.holdKeyCode) {
        presshold();
      }
    };

    document.addEventListener("keydown", handlekey);
    return () => {
      document.removeEventListener("keydown", handlekey);
    };
  }, [keyInfo, playsound, presshold]);

  useEffect(() => {
    const audioTag = document.getElementById(keyInfo.key);
    audioTag.loop = hold;
  }, [hold, keyInfo.key]);

  return (
    <div className="clipall">
      <div onClick={playsound} className={`pad-container ${tap && "active"}`}>
        <audio
          className="clip"
          id={keyInfo.key}
          src={process.env.PUBLIC_URL + keyInfo.url}
        />
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
