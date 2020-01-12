"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FluidGrid = void 0;

var _react = _interopRequireDefault(require("react"));

require("./css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FluidGrid = function FluidGrid(_ref) {
  var someParam = _ref.someParam;
  return _react["default"].createElement("div", {
    className: "FluidGrid"
  }, "Testing fluid grid... ", someParam);
};

exports.FluidGrid = FluidGrid;
