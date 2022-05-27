import { useState, useEffect, useRef } from "react";

const useFetchData = (level) => {
  const [loading, setLoading] = useState(true);
  const boardDataRef = useRef([]);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        let cardArray = [];
        let characters = data.results;
        characters.slice(0, level).map((character) => {
          cardArray.push([`${character.id}a`, character.name, character.image]);
          cardArray.push([`${character.id}b`, character.name, character.image]);
        });
        boardDataRef.current = [
          ...cardArray,
        ]; /* .sort(() => Math.random() - 0.5); */
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const boardData = boardDataRef.current;

  return {
    loading,
    boardData,
  };
};

export default useFetchData;
