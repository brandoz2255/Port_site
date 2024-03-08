import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Dulce's Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#aboutMe">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

function AboutMe() {
  return (
    <section id="aboutMe">
      <h2>About Me</h2>
      <p>Your about me content here</p>
    </section>
  );
}

// Render your App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Define Skills, Projects, and Footer components similarly

export default App;






































/* import React from 'react';
import { createRoot } from 'react-dom/client';
import { createThemeUnit } from '@arwes/theme';
import { Frame, Button, Text } from '@arwes/arwes';



function MyCyberpunkComponent() {
 const [isAnimated, setIsAnimated] = useState(false);
 const buttonRef = useRef(null); // Create a ref for the button

 useEffect(() => {
    const buttonElement = buttonRef.current; // Get the current button element
    if (buttonElement) {
      buttonElement.classList.add('glow-effect'); // Add the glow effect
    }
 }, []); // Empty dependency array means this effect runs once after the component mounts

 const handleClick = () => {
    setIsAnimated(!isAnimated);
 };
return (
    <Frame animate={true} level={3} corners={4}>
      <Button ref={buttonRef} className="my-button" animate={true} onClick={handleClick}>H I T m e</Button>
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
 */
