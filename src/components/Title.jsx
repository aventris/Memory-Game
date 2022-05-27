import React from "react";

import logo from "@images/logo.svg";
import "@styles/Title.scss";

const Title = ({ home = false }) => {
  return (
    <div className="title">
      <img src={logo} alt="" />
      <div>
        {!home && <button>Home</button>}
        <h2>Memory game</h2>
        {!home && <button>Reset</button>}
      </div>
    </div>
  );
};

export default Title;
