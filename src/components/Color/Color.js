import React, { useState } from "react";
import "./Color.css";

function Color({ x, y, blur, spread, opacity }) {
  const opacityValue = opacity / 100;
  const [color, setColor] = useState("#ffffff");
  const [colorChildren, setColorChildren] = useState("#00FFFF");

  const handleColorChangeBackground = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  const handleColorChangeChildren = (e) => {
    const newColor = e.target.value;
    setColorChildren(newColor);
  };

  return (
    <div className="container">
      <div className="container-card">
        <div className="container-card-header">
          <h2 className="container-heading">Preview</h2>
          <div className="colorpicker">
            <input
              className="color-preview mx-2"
              type="color"
              value={color}
              onChange={handleColorChangeBackground}
            />
            <input
              className="color-preview"
              type="color"
              value={colorChildren}
              onChange={handleColorChangeChildren}
            />
          </div>
        </div>
        <div
          className="container-card-section"
          style={{
            // boxShadow: ` rgba(0, 0, 0, ${opacityValue}) ${x}px ${y}px ${blur}px ${spread}px`,
            background: color,
            marginTop: "50px",
          }}
        >
          <div
            className="react-resizable"
            style={{
              boxShadow: ` rgba(0, 0, 0, ${opacityValue}) ${x}px ${y}px ${blur}px ${spread}px`,
              background: colorChildren,
            }}
          ></div>
        </div>
        <div className="css-code">
          <h3>Css code</h3>
          <div className="code">
            <code>{`box-shadow: rgba(0, 0, 0, ${opacityValue}) ${x}px ${y}px ${blur}px ${spread}px`}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
