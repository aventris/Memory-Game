import React, { useEffect, useState, useRef } from "react";
import Card from "@components/Card";

import "@styles/Board.scss";

const Board = () => {
  let currentCard = useRef(undefined);

  const tempArray = [...Array(5).keys()];
  let auxObj = {};

  for (const key of tempArray) {
    auxObj[`${key}a`] = false;
    auxObj[`${key}b`] = false;
  }
  const [tempObj, setTempObj] = useState(auxObj);

  let tempMemorama = [];
  tempArray.map((el) => {
    tempMemorama.push(`${el}a`, `${el}b`);
  });

  const handleCardFlip = (card) => {
    setTempObj({ ...tempObj, [card]: true });
    debugger;
    console.log(currentCard.current, currentCard.current === undefined);
    if (currentCard.current === undefined) {
      console.log("Primera carta");
      currentCard.current = card;
    } else {
      console.log("Segunda carta");
      checkPair(currentCard.current, card);
    }
  };

  const checkPair = (firstCard, secoundCard) => {
    if (firstCard[0] === secoundCard[0]) {
      console.log("Es un par");
    } else {
      console.log("No es un par");
      setTimeout(() => {
        setTempObj({ ...tempObj, [firstCard]: false, [secoundCard]: false });
      }, 2000);
      console.log({ ...tempObj, [firstCard]: false, [secoundCard]: false });
    }
    currentCard.current = undefined;
  };
  console.log("Render", tempObj);
  return (
    <div className="board">
      <div className="grid-container">
        {tempMemorama.map((el, index) => (
          <Card
            disabled={tempObj[el]}
            key={index}
            onFlip={handleCardFlip}
            card={el}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
