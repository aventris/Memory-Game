import React, { useState, useEffect, useRef } from "react";
import "@styles/Card.scss";
import react from "react";

const Card = () => {
  const [state, setState] = useState(false);
  const handleFlip = () => {
    setState(!state);
  };
  //const ref = useRef(null);
  /*  useEffect(() => {
    console.log("REF", ref.current);
    const target = ref.current;
    let rect = target.getBoundingClientRect(),
      x = 
    console.log("RECT", rect);
    
  }); */

  const handleOnMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <React.Fragment>
      <button>Clickme</button>
      <div
        onMouseMove={handleOnMouseMove}
        className="card"
        onClick={handleFlip}
      >
        <div className={`face front ${state ? "" : "hidden"}`}>
          <div className="card-content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cosplay_of_Pikachu%2C_Fanime_2015_%2818125488996%29.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={`face back ${state ? "hidden" : ""}`}>
          <img
            className="card-content"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41d3ac77-2823-4e18-8910-a48de63acf87/d8xl0ja-ca02368b-643f-42f4-9721-f3895e14690d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZDNhYzc3LTI4MjMtNGUxOC04OTEwLWE0OGRlNjNhY2Y4N1wvZDh4bDBqYS1jYTAyMzY4Yi02NDNmLTQyZjQtOTcyMS1mMzg5NWUxNDY5MGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dUhAjPqt1Rkudg3gHjqPNOQAuaA2wmXZ7T-Lq6L28O8"
            /* src="https://www.transparenttextures.com/patterns/asfalt-light.png" */
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
