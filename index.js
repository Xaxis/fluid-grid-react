"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FluidGrid = void 0;

var _react = _interopRequireDefault(require("react"));

require("./css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FluidGrid = function FluidGrid(_ref) {
  var gutter = _ref.gutter,
      children = _ref.children,
      classAdditions = _ref.classAdditions;

  // Update children to pass properties to anticipated components
  var updatedChildren = _react["default"].Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      gutter: gutter
    });
  }); // Build class string for css grid overrides


  var classString = "fg-container";
  classString += gutter ? "" : " fg-no-gutter";
  return _react["default"].createElement("div", {
    className: [classString].concat(classAdditions).join(" ")
  }, updatedChildren);
};

exports.FluidGrid = FluidGrid;
