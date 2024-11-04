import React, { useState } from 'react';

// Tableau des couleurs
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox: React.FC = () => {
  // État pour suivre l'index de la couleur actuelle
  const [colorIndex, setColorIndex] = useState(0);

  // Obtenir la couleur actuelle et la couleur suivante
  const currentColor = colors[colorIndex];
  const nextColor = colors[(colorIndex + 1) % colors.length];

  // Fonction pour gérer le clic et passer à la couleur suivante
  const handleChangeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      style={{
        backgroundColor: currentColor,
      }}
    >
      <button onClick={handleChangeColor}> Next: {nextColor}</button>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorBox;
