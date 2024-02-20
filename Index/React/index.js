import React from 'react';
import { createRoot } from 'react-dom/client';
import { createThemeUnit } from '@arwes/theme';
import { Frame, Button, Text } from '@arwes/arwes';


function MyCyberpunkComponent() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <Frame animate={true} level={3} corners={4}>
      <Button className="my-button" animate={true} onClick={handleClick}>H I T m e</Button>
      <Text animate={true} className={isAnimated ? 'animated-text' : ''}>Welcome to the cyberpunk future!</Text>
    </Frame>
  );
}


export default MyCyberpunkComponent;






  
  function addGlowEffect(element) {
    // Add a class to the element to apply the glowing effect
    element.classList.add('glow-effect');
  }
  
  // Example usage:
  const myButton = document.querySelector('.my-button'); // Replace '.my-button' with the appropriate selector for your element
  addGlowEffect(myButton);

  

  const size = createThemeUnit(i => `${10 + 10 * i}px`);

const Sandbox = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {Array(5).fill(0).map((_, variantIndex) => (
        <div
          key={variantIndex}
          style={{
            margin: 10,
            width: size(variantIndex),
            height: size(variantIndex),
            background: '#0ff'
          }}
        />
      ))}
    </div>
  );
};

