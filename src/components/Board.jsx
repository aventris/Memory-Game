import React, { useEffect, useState, useRef } from "react";
import Card from "@components/Card";
import WinModal from "@components/WinModal";

import "@styles/Board.scss";
let disableBoard = false;
let matchedPairs = 0;
let elapsedTime = undefined;

const Board = ({ data, control, level }) => {
  //console.log(data, control);
  let currentCard = useRef(undefined);
  const [tempObj, setTempObj] = useState(control);
  const [finished, setFinished] = useState(false);

  const handleCardFlip = (card) => {
    setTempObj({ ...tempObj, [card]: true });
    if (currentCard.current === undefined) {
      currentCard.current = card;
    } else {
      disableBoard = true;
      checkPair(currentCard.current, card);
    }
  };

  const checkPair = (firstCard, secoundCard) => {
    if (firstCard.slice(0, -1) === secoundCard.slice(0, -1)) {
      disableBoard = false;
      matchedPairs += 1;
    } else {
      setTimeout(() => {
        disableBoard = false;
        setTempObj({ ...tempObj, [firstCard]: false, [secoundCard]: false });
      }, 2000);
    }
    currentCard.current = undefined;
  };

  useEffect(() => {
    elapsedTime = new Date();
  }, []);

  useEffect(() => {
    if (matchedPairs === level && finished === false) {
      elapsedTime = new Date() - elapsedTime;
      setTimeout(() => {
        setFinished(true);
      }, 1000);
    }
  });

  return (
    <React.Fragment>
      <div className="board">
        <div className="grid-container">
          {data.map((el, index) => (
            <Card
              card={el[0]}
              title={el[1]}
              image={el[2]}
              flipped={tempObj[el[0]]}
              key={index}
              onFlip={disableBoard ? () => {} : handleCardFlip}
            />
          ))}
        </div>
      </div>
      {finished && <WinModal time={elapsedTime} />}
    </React.Fragment>
  );
};

export default Board;
