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

function ErrorBoundary(_ref) {
  var children = _ref.children,
      className = _ref.className,
      error = _ref.error,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "error"]);

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      className: (0, _viewHelpers.appendClassName)("sui-search-error", className)
    }, rest), error);
  }

  return children;
}

ErrorBoundary.propTypes = {
  children: _propTypes.default.node.isRequired,
  error: _propTypes.default.string.isRequired,
  className: _propTypes.default.string
};
var _default = ErrorBoundary;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbIkVycm9yQm91bmRhcnkiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImVycm9yIiwicmVzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxPQUFnRTtBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVJDLElBQVE7O0FBQzlELE1BQUlELEtBQUosRUFBVztBQUNULHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUUsa0NBQWdCLGtCQUFoQixFQUFvQ0QsU0FBcEM7QUFBaEIsT0FBb0VFLElBQXBFLEdBQ0dELEtBREgsQ0FERjtBQUtEOztBQUVELFNBQU9GLFFBQVA7QUFDRDs7QUFFREQsYUFBYSxDQUFDSyxTQUFkLEdBQTBCO0FBQ3hCSixFQUFBQSxRQUFRLEVBQUVLLG1CQUFVQyxJQUFWLENBQWVDLFVBREQ7QUFFeEJMLEVBQUFBLEtBQUssRUFBRUcsbUJBQVVHLE1BQVYsQ0FBaUJELFVBRkE7QUFHeEJOLEVBQUFBLFNBQVMsRUFBRUksbUJBQVVHO0FBSEcsQ0FBMUI7ZUFNZVQsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5cbmZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBlcnJvciwgLi4ucmVzdCB9KSB7XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXNlYXJjaC1lcnJvclwiLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbkVycm9yQm91bmRhcnkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIl19