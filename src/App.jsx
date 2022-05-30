import React from "react";
import Board from "@components/Board";
import LevelSelector from "@components/LevelSelector";
import BackgroundAnimation from "@components/BackgroundAnimation";
import Title from "@components/Title";
import Card from "@components/Card";
import Loading from "@components/Loading";
import WinModal from "@components/WinModal";

import useBoard from "@hooks/useBoard";

import "@styles/App.scss";

const CARDS_PER_LEVEL = 5;

const App = () => {
  const {
    loading,
    level,
    finished,
    elapsedTime,
    disableBoard,
    memoControl,
    boardData,
    handleCardFlip,
    handleReset,
    handleLevel,
  } = useBoard();

  return (
    <div className="app">
      <Title
        onReset={handleReset}
        {...(level && !loading ? "" : { home: true })}
      />
      <React.Fragment>
        {!level && <LevelSelector onLevelSelection={handleLevel} />}
        {level && loading && <Loading />}
        {level && !loading && (
          <Board level={level * CARDS_PER_LEVEL}>
            {boardData.map((el, index) => (
              <Card
                card={el[0]}
                title={el[1]}
                image={el[2]}
                flipped={memoControl[el[0]]}
                key={index}
                onFlip={disableBoard ? () => {} : handleCardFlip}
              />
            ))}
          </Board>
        )}
        {finished && <WinModal time={elapsedTime} onReset={handleReset} />}
      </React.Fragment>
      <BackgroundAnimation />
    </div>
  );
};

export default App;
