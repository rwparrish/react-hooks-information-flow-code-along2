import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ color, onChangeColor }) {
  return <div onClick={onChangeColor} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
