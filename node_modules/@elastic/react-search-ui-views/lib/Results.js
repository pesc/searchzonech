"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _viewHelpers = require("./view-helpers");

function Results(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-results-container", className)
  }, rest), children);
}

Results.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = Results;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRzLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJlc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBLFNBQVNBLE9BQVQsT0FBbUQ7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVJDLElBQVE7QUFDakQsc0JBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSxrQ0FBZ0IsdUJBQWhCLEVBQXlDRCxTQUF6QztBQURiLEtBRU1DLElBRk4sR0FJR0YsUUFKSCxDQURGO0FBUUQ7O0FBRURELE9BQU8sQ0FBQ0ksU0FBUixHQUFvQjtBQUNsQkgsRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUMsSUFBVixDQUFlQyxVQURQO0FBRWxCTCxFQUFBQSxTQUFTLEVBQUVHLG1CQUFVRztBQUZILENBQXBCO2VBS2VSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBSZXN1bHRzKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsXG4gICAgICBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1yZXN1bHRzLWNvbnRhaW5lclwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gICk7XG59XG5cblJlc3VsdHMucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl19