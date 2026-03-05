import React from "react";
import { Rnd } from "react-rnd";
import "./windows.scss";
const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowState,
}) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 100,
        y: 100,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowState((state) => ({ ...state, [windowName]: false }))
              }
              className="dot red" style={{ cursor: 'pointer' }}
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>Vidhyasagar - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
