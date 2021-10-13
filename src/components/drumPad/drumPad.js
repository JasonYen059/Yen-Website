import React, { useEffect, useState, useCallback } from "react";
import "./drumPad.scss";

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
    if (e.keyCode === keyInfo.stopKeyCode) {
      stopsound();
    }
    if (e.keyCode === keyInfo.holdKeyCode) {
      presshold();
    }
  };
  useEffect(() => {
    const audioTag = document.getElementById(keyInfo.key);
    audioTag.loop = hold;
  }, [hold,keyInfo.key]);

  const playsound = () => {
    const audioTag = document.getElementById(keyInfo.key);
    audioTag.currentTime = 0;
    audioTag.play();
    setTap(true);
    audioTag.onended = ()=>{
      setTap(false);
    }
  };

  const stopsound = () => {
    const audioTag = document.getElementById(keyInfo.key);
    audioTag.pause();
    setTap(false);
  };

  const presshold = useCallback(() => setHold((prevIsOn) => !prevIsOn), []);

  return (
    <div className="clipall">
      <div onClick={playsound} className={`pad-container ${tap && "active"}`}>
        <audio className="clip" id={keyInfo.key} src={keyInfo.url} />
        {keyInfo.key}
      </div>
      <div
        onClick={presshold}
        id={keyInfo.id}
        className={`stop-btn ${hold && "holdactive"}`}
      >
          {keyInfo.holdKey}
      </div>
    </div>
  );
};

export default Pad;
