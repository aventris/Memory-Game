import React, { useEffect, useState, useRef } from "react";
import Card from "@components/Card";
import WinModal from "@components/WinModal";
import Loading from "@components/Loading";
import useBoard from "@hooks/useBoard";

import "@styles/Board.scss";

const Board = ({ level }) => {
  const {
    loading,
    finished,
    elapsedTime,
    disableBoard,
    memoControl,
    boardData,
    handleCardFlip,
    handleReset,
  } = useBoard(level);

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="board">
          <div className="grid-container">
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
          </div>
        </div>
      )}
      {finished && <WinModal time={elapsedTime} onReset={handleReset} />}
    </React.Fragment>
  );
};

export default Board;
