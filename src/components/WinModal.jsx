import React from "react";
import reactDOM from "react-dom";

reactDOM.createPortal(WinModal, document.getElementById("modal"));

import "@styles/WinModal.scss";

const WinModal = ({ time }) => {
  const msToTime = (time) => {
    let ms = time % 1000;
    let sec = Math.floor(time / 1000) % 60;
    let min = Math.floor(time / 1000 / 60) % 60;
    let hrs = Math.floor(time / 1000 / 60 / 60);
    return `${hrs > 0 ? hrs + "hrs" : ""}  ${min > 0 ? min + "min" : ""} ${
      sec > 0 ? sec + "sec" : ""
    } ${ms > 0 ? ms + "ms" : ""}`;
  };

  return (
    <div className="modal">
      <div className="win-condition">
        <h1>Good job!</h1>
        <span>Elapsed time: {msToTime(time)}</span>
        <button>Back Home</button>
        <button>Play again</button>
      </div>
    </div>
  );
};

export default WinModal;
