import React from "react";

import "@styles/Board.scss";

const Board = ({ children }) => {
  return (
    <div className="board">
      <div className="grid-container">{children}</div>
    </div>
  );
};

export default Board;
