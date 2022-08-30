import React from "react";
import "./Box.css";
function Box({ value, onclick }) {
  const style = value === "X" ? "box x" : "box o";
  return (
    <button className={style} onClick={onclick}>
      {value}
    </button>
  );
}

export default Box;
