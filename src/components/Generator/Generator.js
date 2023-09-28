import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import Color from "./../Color/Color";
import Text from "./../Text/Text";

function Generator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [spread, setSpread] = useState(3);
  const [blur, setBlur] = useState(5);
  const [opacity, setOpacity] = useState(50);
  const [color, setColor] = useState("#000");

  const [xT, setXT] = useState(0);
  const [yT, setYT] = useState(0);
  const [blurT, setBlurT] = useState(5);
  const [opacityT, setOpacityT] = useState(50);

  // Text Shadow
  return (
    <>
      <header className="header">
        <ul class="header_menu__4zOuK">
          <li>
            <a class="menu__link" href="/box-shadow">
              Box shadow
            </a>
          </li>
          <li>
            <a class="menu__link" href="/text-shadow">
              Text shadow
            </a>
          </li>
        </ul>
      </header>
      <div className="container">
        <div className="app_controls">
          <div className="app_controlsContainer">
            <h1>Box Shadow Generator</h1>
            <div className="app_control">
              Shift right{" "}
              <Slider
                min={-50}
                max={50}
                value={x}
                onChange={(e, val) => setX(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={x} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Shift down{" "}
              <Slider
                min={-50}
                max={50}
                value={y}
                onChange={(e, val) => setY(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={y} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Blur{" "}
              <Slider
                min={0}
                max={100}
                value={blur}
                onChange={(e, val) => setBlur(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={blur} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Spread{" "}
              <Slider
                min={0}
                max={100}
                value={spread}
                onChange={(e, val) => setSpread(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={spread} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Opacity{" "}
              <Slider
                min={0}
                max={100}
                value={opacity}
                onChange={(e, val) => setOpacity(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={opacity} style={{ width: 40 }} />
            </div>
          </div>

          <Color
            x={x}
            y={y}
            spread={spread}
            blur={blur}
            opacity={`${opacity}`}
            color={color}
          />
        </div>
        <div className="app_controls">
          <div className="app_controlsContainer">
            <h1>Text Shadow Generator</h1>
            <div className="app_control">
              Shift right{" "}
              <Slider
                min={-50}
                max={50}
                value={xT}
                onChange={(e, val) => setXT(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={xT} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Shift down{" "}
              <Slider
                min={-50}
                max={50}
                value={yT}
                onChange={(e, val) => setYT(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={yT} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Blur{" "}
              <Slider
                min={0}
                max={100}
                value={blurT}
                onChange={(e, val) => setBlurT(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={blurT} style={{ width: 40 }} />
            </div>
            <div className="app_control">
              Opacity{" "}
              <Slider
                min={0}
                max={100}
                value={opacityT}
                onChange={(e, val) => setOpacityT(val)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <input type="text" value={opacityT} style={{ width: 40 }} />
            </div>
          </div>
          <Text xT={xT} yT={yT} blurT={blurT} opacityT={`${opacityT}`} />
        </div>
      </div>
    </>
  );
}

export default Generator;
