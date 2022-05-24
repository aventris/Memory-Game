import React, { useEffect, useState, useRef } from "react";
import Card from "@components/Card";

import "@styles/Board.scss";
let disableBoard = false;

const Board = ({ data, control }) => {
  //console.log(data, control);
  let currentCard = useRef(undefined);
  const [tempObj, setTempObj] = useState(control);

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
    } else {
      setTimeout(() => {
        disableBoard = false;
        setTempObj({ ...tempObj, [firstCard]: false, [secoundCard]: false });
      }, 2000);
    }
    currentCard.current = undefined;
  };

  return (
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
  );
};

export default Board;
