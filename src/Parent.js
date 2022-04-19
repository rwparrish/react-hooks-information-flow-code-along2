import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  
  console.log(1)
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("FFF");

  const handleChangeColor = () => {
    const randomChildColor = getRandomColor();
    const newRandomrColor = getRandomColor();
    setColor(newRandomrColor);
    setChildColor(randomChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childColor} onChangeColor={handleChangeColor} />
      <Child color={childColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
