import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "@styles/BackgroundAnimation.scss";
import { Timeline } from "gsap/gsap-core";

const BackgroundAnimation = () => {
  const boxRef = useRef();
  const random = (min, max) => {
    return gsap.utils.random(min, max);
  };
  const createUnit = () => {
    let unit = document.createElement("div"),
      w = boxRef.current.offsetWidth,
      h = boxRef.current.offsetHeight;

    unit.classList.add("unit");
    boxRef.current.appendChild(unit);

    gsap.set(unit, {
      x: random(0, w),
      y: random(0, h),
      scale: random(0.2, 1),
      autoAlpha: 0,
    });

    let timeLine = new Timeline();
    let duration = random(5, 20);
    timeLine.to(unit, duration, {
      opacity: 1,
      x: "+=" + random(-w / 2, w / 2),
      y: "+=" + random(-h / 2, h / 2),
      ease: "linear",
    });
    timeLine.to(
      unit,
      duration / 2,
      {
        autoAlpha: 1,
        repeat: 1,
        yoyo: true,
        ease: "linear",
        onComplete: () => {
          unit.parentNode.removeChild(unit);
          createUnit();
        },
      },

      0
    );
  };

  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      createUnit();
    }
  }, []);

  return (
    <div ref={boxRef} className="animation-container">
      {/* <h1>Titulo mamalon</h1> */}
      {/* <div className="unit"></div> */}
    </div>
  );
};

export default BackgroundAnimation;
