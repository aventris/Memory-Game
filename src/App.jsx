import React, { useEffect, useState } from "react";
import Card from "@components/Card";
import Board from "@components/Board";
import LevelSelector from "@components/LevelSelector";
import WinModal from "@components/WinModal";
import BackgroundAnimation from "@components/BackgroundAnimation";

import "@styles/App.scss";
import logo from "@images/logo.svg";

let tempData = undefined;
let tempControl = undefined;
const CARDS_PER_LEVEL = 5;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(0);

  const fetchData = () => {
    let dataArray = [];
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        let characters = data.results;
        characters.slice(0, CARDS_PER_LEVEL * level).map((character) => {
          dataArray.push([`${character.id}a`, character.name, character.image]);
          dataArray.push([`${character.id}b`, character.name, character.image]);
        });

        let aux = {};
        dataArray.forEach((el) => {
          aux[el[0]] = false;
        });

        /* tempData.sort(() => Math.random() - 0.5); */
        tempControl = aux;
        tempData = dataArray;
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (level !== 0) {
      fetchData();
    }
  });

  const handleLevel = (level) => {
    //debugger;
    setLevel(level);
  };

  return (
    <div className="app">
      <div className="title">
        <img src={logo} alt="" />
        <div>
          <button>Home</button>
          <h2>Memory game</h2>
          <button>Reset</button>
        </div>
      </div>
      <React.Fragment>
        {level === 0 || loading ? (
          <LevelSelector onLevelSelection={handleLevel} />
        ) : (
          <Board
            data={tempData}
            control={tempControl}
            level={level * CARDS_PER_LEVEL}
          />
        )}
      </React.Fragment>
      <BackgroundAnimation />
    </div>
  );
};

export default App;
