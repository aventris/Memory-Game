import React from "react";

import logo from "@images/logo.svg";
import "@styles/Title.scss";

const Title = ({ onReset, home }) => {
  const handleReload = () => {
    window.location.reload(true);
  };

  return (
    <div className="title">
      <img src={logo} alt="" />
      <div>
        {!home && <button onClick={handleReload}>Home</button>}
        <h2>Memory game</h2>
        {!home && <button onClick={onReset}>Reset</button>}
      </div>
    </div>
  );
};

export default Title;
