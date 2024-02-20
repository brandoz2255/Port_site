"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _theme = require("@arwes/theme");
var _arwes = require("@arwes/arwes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function MyCyberpunkComponent() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAnimated = _useState2[0],
    setIsAnimated = _useState2[1];
  var handleClick = function handleClick() {
    setIsAnimated(!isAnimated);
  };
  return /*#__PURE__*/_react["default"].createElement(_arwes.Frame, {
    animate: true,
    level: 3,
    corners: 4
  }, /*#__PURE__*/_react["default"].createElement(_arwes.Button, {
    className: "my-button",
    animate: true,
    onClick: handleClick
  }, "H I T m e"), /*#__PURE__*/_react["default"].createElement(_arwes.Text, {
    animate: true,
    className: isAnimated ? 'animated-text' : ''
  }, "Welcome to the cyberpunk future!"));
}
var _default = exports["default"] = MyCyberpunkComponent;
function addGlowEffect(element) {
  // Add a class to the element to apply the glowing effect
  element.classList.add('glow-effect');
}

// Example usage:
var myButton = document.querySelector('.my-button'); // Replace '.my-button' with the appropriate selector for your element
addGlowEffect(myButton);
var size = (0, _theme.createThemeUnit)(function (i) {
  return "".concat(10 + 10 * i, "px");
});
var Sandbox = function Sandbox() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, Array(5).fill(0).map(function (_, variantIndex) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: variantIndex,
      style: {
        margin: 10,
        width: size(variantIndex),
        height: size(variantIndex),
        background: '#0ff'
      }
    });
  }));
};
