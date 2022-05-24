import React, { useEffect, useState } from "react";
import Card from "@components/Card";
import Board from "@components/Board";
import LevelSelector from "@components/LevelSelector";

import "@styles/App.scss";

let tempData = undefined;
let tempControl = undefined;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(0);

  const fetchData = () => {
    let dataArray = [];
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log(level);
        let characters = data.results;
        characters.slice(0, 5 * level).map((character) => {
          dataArray.push([`${character.id}a`, character.name, character.image]);
          dataArray.push([`${character.id}b`, character.name, character.image]);
        });

        let aux = {};
        dataArray.forEach((el) => {
          aux[el[0]] = false;
        });
        tempControl = aux;
        tempData = dataArray;
        tempData.sort(() => Math.random() - 0.5);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("Use Effect");
    if (level !== 0) {
      fetchData();
    }
  });

  const handleLevel = (level) => {
    //debugger;
    setLevel(level);
  };

  console.log("Render ", level === 0, loading, level === 0 || loading);

  return (
    <div>
      <React.Fragment>
        <h1>Hello world</h1>

        {level === 0 || loading ? (
          <LevelSelector onLevelSelection={handleLevel} />
        ) : (
          <Board data={tempData} control={tempControl} />
        )}
      </React.Fragment>

      {/* <LevelSelector /> */}
    </div>
  );
};

export default App;
