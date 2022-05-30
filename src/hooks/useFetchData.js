import { useState, useEffect, useRef } from "react";

const CARDS_PER_LEVEL = 5;
const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(0);
  const boardDataRef = useRef([]);

  const fetchData = () => {
    let page = Math.random() * 42 + 1;
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        let cardArray = [];
        let characters = data.results;
        characters.slice(0, level).map((character) => {
          cardArray.push([`${character.id}a`, character.name, character.image]);
          cardArray.push([`${character.id}b`, character.name, character.image]);
        });
        cardArray.sort(() => Math.random() - 0.5);
        boardDataRef.current = [...cardArray];
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleLevel = (level) => {
    setLevel(level * CARDS_PER_LEVEL);
  };
  useEffect(() => {
    if (level) fetchData();
  }, [level]);

  const boardData = boardDataRef.current;
  return {
    loading,
    level,
    boardData,
    handleLevel,
  };
};

export default useFetchData;
