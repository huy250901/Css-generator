import React from "react";
import "./Text.css";

function Text({ xT, yT, blurT, opacityT }) {
  const opacityValueT = opacityT / 100;

  return (
    <>
      <div className="text">
        <div
          className="text__text"
          style={{
            textShadow: `rgba(0, 0, 0, ${opacityValueT} ) ${xT}px ${yT}px ${blurT}px`,
          }}
        >
          Hello
        </div>
      </div>
      <div className="css-code">
        <h3>Css code</h3>
        <div className="code">
          <code>{`text-shadow: rgba(0, 0, 0, ${opacityValueT}) ${xT}px ${yT}px ${blurT}px`}</code>
        </div>
      </div>
    </>
  );
}

export default Text;
