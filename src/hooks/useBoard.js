import { useState, useEffect, useRef } from "react";
import useFetchData from "@hooks/useFetchData";

const useBoard = () => {
  const { loading, level, boardData, handleLevel } = useFetchData(level);
  const [disableBoard, setDisableBoard] = useState(false);
  const [finished, setFinished] = useState(false);
  const [memoControl, setMemoControl] = useState({});

  const elapsedTimeRef = useRef(null);
  const matchedPairs = useRef(0);

  let selectedCard = useRef(undefined);

  const getMemoControl = () => {
    let memoControl = {};
    boardData.forEach((el) => {
      memoControl[el[0]] = false;
    });
    setMemoControl(memoControl);
  };

  const handleCardFlip = (card) => {
    setMemoControl({ ...memoControl, [card]: true });
    if (selectedCard.current === undefined) {
      selectedCard.current = card;
    } else {
      setDisableBoard(true);
      checkPair(selectedCard.current, card);
    }
  };

  const checkPair = (firstCard, secoundCard) => {
    if (firstCard.slice(0, -1) === secoundCard.slice(0, -1)) {
      setDisableBoard(false);
      matchedPairs.current += 1;
    } else {
      setTimeout(() => {
        setDisableBoard(false);
        setMemoControl({
          ...memoControl,
          [firstCard]: false,
          [secoundCard]: false,
        });
      }, 2000);
    }
    selectedCard.current = undefined;
  };

  useEffect(() => {
    elapsedTimeRef.current = new Date();
    getMemoControl();
  }, []);

  useEffect(() => {
    if (matchedPairs.current === level && level != 0 && finished === false) {
      elapsedTimeRef.current = new Date() - elapsedTimeRef.current;
      setTimeout(() => {
        setFinished(true);
      }, 2000);
    }
  });
  const handleReset = () => {
    elapsedTimeRef.current = new Date();
    matchedPairs.current = 0;
    boardData.sort(() => Math.random() - 0.5);
    let newMemoControl = { ...memoControl };
    Object.keys(newMemoControl).forEach((key) => (newMemoControl[key] = false));
    setMemoControl(newMemoControl);
    setFinished(false);
  };

  const elapsedTime = elapsedTimeRef.current;
  return {
    loading,
    level,
    memoControl,
    boardData,
    finished,
    disableBoard,
    elapsedTime,
    handleCardFlip,
    handleReset,
    handleLevel,
  };
};

export default useBoard;
