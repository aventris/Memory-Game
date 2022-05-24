import React from "react";

import "@styles/LevelSelector.scss";

const LevelSelector = ({ onLevelSelection }) => {
  const handleClick = (level) => {
    onLevelSelection(level);
  };
  return (
    <div className="level-selector">
      <div className="level-container">
        <button onClick={() => handleClick(1)}>Easy</button>
        <button onClick={() => handleClick(2)}>Mid</button>
        <button onClick={() => handleClick(3)}>Hard</button>
      </div>
    </div>
  );
};

export default LevelSelector;
