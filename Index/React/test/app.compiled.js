"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(Header, null), /*#__PURE__*/_react["default"].createElement(AboutMe, null), /*#__PURE__*/_react["default"].createElement(Skills, null), /*#__PURE__*/_react["default"].createElement(Projects, null), /*#__PURE__*/_react["default"].createElement(Footer, null));
}
function Header() {
  return /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Dulce's Portfolio"), /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#aboutMe"
  }, "About Me")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#skills"
  }, "Skills")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#projects"
  }, "Projects")))));
}
function AboutMe() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "aboutMe"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "About Me"), /*#__PURE__*/_react["default"].createElement("p", null, "Your about me content here"));
}

// Render your App component to the DOM
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));

// Define Skills, Projects, and Footer components similarly
var _default = exports["default"] = App;
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
