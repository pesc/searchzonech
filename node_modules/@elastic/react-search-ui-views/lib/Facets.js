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

function Facets(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-facet-container", className)
  }, rest), children);
}

Facets.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = Facets;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GYWNldHMuanMiXSwibmFtZXMiOlsiRmFjZXRzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQSxTQUFTQSxNQUFULE9BQWtEO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxTQUFzQixRQUF0QkEsU0FBc0I7QUFBQSxNQUFSQyxJQUFRO0FBQ2hELHNCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUUsa0NBQWdCLHFCQUFoQixFQUF1Q0QsU0FBdkM7QUFEYixLQUVNQyxJQUZOLEdBSUdGLFFBSkgsQ0FERjtBQVFEOztBQUVERCxNQUFNLENBQUNJLFNBQVAsR0FBbUI7QUFDakJILEVBQUFBLFFBQVEsRUFBRUksbUJBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVqQkwsRUFBQUEsU0FBUyxFQUFFRyxtQkFBVUc7QUFGSixDQUFuQjtlQUtlUixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuZnVuY3Rpb24gRmFjZXRzKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktZmFjZXQtY29udGFpbmVyXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkZhY2V0cy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0cztcbiJdfQ==