import { useState } from "react";

export default function ColorBox({ initialColor, colors }) {
  const [color, setColor] = useState(initialColor);

  function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={() => setColor(getRandomColor())}
    ></div>
  );
}
