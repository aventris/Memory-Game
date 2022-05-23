import React, { useState, useEffect, useRef } from "react";
import "@styles/Card.scss";

const Card = ({ onFlip, card, disabled }) => {
  const handleOnMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <div
      onMouseMove={handleOnMouseMove}
      className="card"
      onClick={disabled ? null : () => onFlip(card)}
    >
      <div className={`face front ${disabled ? "" : "hidden"}`}>
        <div className="card-content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`face back ${disabled ? "hidden" : ""}`}>
        <img
          className="card-content"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41d3ac77-2823-4e18-8910-a48de63acf87/d8xl0ja-ca02368b-643f-42f4-9721-f3895e14690d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZDNhYzc3LTI4MjMtNGUxOC04OTEwLWE0OGRlNjNhY2Y4N1wvZDh4bDBqYS1jYTAyMzY4Yi02NDNmLTQyZjQtOTcyMS1mMzg5NWUxNDY5MGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dUhAjPqt1Rkudg3gHjqPNOQAuaA2wmXZ7T-Lq6L28O8"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
