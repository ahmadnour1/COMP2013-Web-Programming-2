import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  return (
    <div className="ColorBoxesContainer">
      {colors.map((color, index) => (
        <ColorBox 
          key={index} 
          initialColor={color} 
          colors={colors} 
        />
      ))}
    </div>
  );
}
