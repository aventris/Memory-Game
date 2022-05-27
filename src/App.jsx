import React, { useEffect, useState } from "react";
import Board from "@components/Board";
import LevelSelector from "@components/LevelSelector";
import BackgroundAnimation from "@components/BackgroundAnimation";
import Title from "@components/Title";

import "@styles/App.scss";

const CARDS_PER_LEVEL = 5;

const App = () => {
  const [level, setLevel] = useState(0);

  const handleLevel = (level) => {
    setLevel(level);
  };

  return (
    <div className="app">
      <Title home />
      <React.Fragment>
        {level === 0 ? (
          <LevelSelector onLevelSelection={handleLevel} />
        ) : (
          <Board level={level * CARDS_PER_LEVEL} />
        )}
      </React.Fragment>
      <BackgroundAnimation />
    </div>
  );
};

export default App;
