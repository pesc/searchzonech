"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagingContainer = PagingContainer;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("..");

var _reactSearchUiViews = require("@elastic/react-search-ui-views");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PagingContainer(_ref) {
  var className = _ref.className,
      current = _ref.current,
      resultsPerPage = _ref.resultsPerPage,
      setCurrent = _ref.setCurrent,
      totalPages = _ref.totalPages,
      view = _ref.view,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "current", "resultsPerPage", "setCurrent", "totalPages", "view"]);
  if (totalPages === 0) return null;
  var View = view || _reactSearchUiViews.Paging;
  return View(_objectSpread({
    className: className,
    current: current,
    resultsPerPage: resultsPerPage,
    totalPages: totalPages,
    onChange: setCurrent
  }, rest));
}

PagingContainer.propTypes = {
  // Props
  className: _propTypes.default.string,
  view: _propTypes.default.func,
  // State
  current: _propTypes.default.number.isRequired,
  resultsPerPage: _propTypes.default.number.isRequired,
  totalPages: _propTypes.default.number.isRequired,
  // Action
  setCurrent: _propTypes.default.func.isRequired
};

var _default = (0, _.withSearch)(function (_ref2) {
  var current = _ref2.current,
      resultsPerPage = _ref2.resultsPerPage,
      totalPages = _ref2.totalPages,
      setCurrent = _ref2.setCurrent;
  return {
    current: current,
    resultsPerPage: resultsPerPage,
    totalPages: totalPages,
    setCurrent: setCurrent
  };
})(PagingContainer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1BhZ2luZy5qcyJdLCJuYW1lcyI6WyJQYWdpbmdDb250YWluZXIiLCJjbGFzc05hbWUiLCJjdXJyZW50IiwicmVzdWx0c1BlclBhZ2UiLCJzZXRDdXJyZW50IiwidG90YWxQYWdlcyIsInZpZXciLCJyZXN0IiwiVmlldyIsIlBhZ2luZyIsIm9uQ2hhbmdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm51bWJlciIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7OztBQUVPLFNBQVNBLGVBQVQsT0FRSjtBQUFBLE1BUERDLFNBT0MsUUFQREEsU0FPQztBQUFBLE1BTkRDLE9BTUMsUUFOREEsT0FNQztBQUFBLE1BTERDLGNBS0MsUUFMREEsY0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLE1BRkRDLElBRUMsUUFGREEsSUFFQztBQUFBLE1BREVDLElBQ0Y7QUFDRCxNQUFJRixVQUFVLEtBQUssQ0FBbkIsRUFBc0IsT0FBTyxJQUFQO0FBRXRCLE1BQU1HLElBQUksR0FBR0YsSUFBSSxJQUFJRywwQkFBckI7QUFFQSxTQUFPRCxJQUFJO0FBQ1RQLElBQUFBLFNBQVMsRUFBVEEsU0FEUztBQUVUQyxJQUFBQSxPQUFPLEVBQVBBLE9BRlM7QUFHVEMsSUFBQUEsY0FBYyxFQUFkQSxjQUhTO0FBSVRFLElBQUFBLFVBQVUsRUFBVkEsVUFKUztBQUtUSyxJQUFBQSxRQUFRLEVBQUVOO0FBTEQsS0FNTkcsSUFOTSxFQUFYO0FBUUQ7O0FBRURQLGVBQWUsQ0FBQ1csU0FBaEIsR0FBNEI7QUFDMUI7QUFDQVYsRUFBQUEsU0FBUyxFQUFFVyxtQkFBVUMsTUFGSztBQUcxQlAsRUFBQUEsSUFBSSxFQUFFTSxtQkFBVUUsSUFIVTtBQUkxQjtBQUNBWixFQUFBQSxPQUFPLEVBQUVVLG1CQUFVRyxNQUFWLENBQWlCQyxVQUxBO0FBTTFCYixFQUFBQSxjQUFjLEVBQUVTLG1CQUFVRyxNQUFWLENBQWlCQyxVQU5QO0FBTzFCWCxFQUFBQSxVQUFVLEVBQUVPLG1CQUFVRyxNQUFWLENBQWlCQyxVQVBIO0FBUTFCO0FBQ0FaLEVBQUFBLFVBQVUsRUFBRVEsbUJBQVVFLElBQVYsQ0FBZUU7QUFURCxDQUE1Qjs7ZUFZZSxrQkFDYjtBQUFBLE1BQUdkLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlDLGNBQVosU0FBWUEsY0FBWjtBQUFBLE1BQTRCRSxVQUE1QixTQUE0QkEsVUFBNUI7QUFBQSxNQUF3Q0QsVUFBeEMsU0FBd0NBLFVBQXhDO0FBQUEsU0FBMEQ7QUFDeERGLElBQUFBLE9BQU8sRUFBUEEsT0FEd0Q7QUFFeERDLElBQUFBLGNBQWMsRUFBZEEsY0FGd0Q7QUFHeERFLElBQUFBLFVBQVUsRUFBVkEsVUFId0Q7QUFJeERELElBQUFBLFVBQVUsRUFBVkE7QUFKd0QsR0FBMUQ7QUFBQSxDQURhLEVBT2JKLGVBUGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSBcIkBlbGFzdGljL3JlYWN0LXNlYXJjaC11aS12aWV3c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5nQ29udGFpbmVyKHtcbiAgY2xhc3NOYW1lLFxuICBjdXJyZW50LFxuICByZXN1bHRzUGVyUGFnZSxcbiAgc2V0Q3VycmVudCxcbiAgdG90YWxQYWdlcyxcbiAgdmlldyxcbiAgLi4ucmVzdFxufSkge1xuICBpZiAodG90YWxQYWdlcyA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgVmlldyA9IHZpZXcgfHwgUGFnaW5nO1xuXG4gIHJldHVybiBWaWV3KHtcbiAgICBjbGFzc05hbWUsXG4gICAgY3VycmVudCxcbiAgICByZXN1bHRzUGVyUGFnZSxcbiAgICB0b3RhbFBhZ2VzLFxuICAgIG9uQ2hhbmdlOiBzZXRDdXJyZW50LFxuICAgIC4uLnJlc3RcbiAgfSk7XG59XG5cblBhZ2luZ0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIC8vIFByb3BzXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vIFN0YXRlXG4gIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcmVzdWx0c1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdG90YWxQYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAvLyBBY3Rpb25cbiAgc2V0Q3VycmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaChcbiAgKHsgY3VycmVudCwgcmVzdWx0c1BlclBhZ2UsIHRvdGFsUGFnZXMsIHNldEN1cnJlbnQgfSkgPT4gKHtcbiAgICBjdXJyZW50LFxuICAgIHJlc3VsdHNQZXJQYWdlLFxuICAgIHRvdGFsUGFnZXMsXG4gICAgc2V0Q3VycmVudFxuICB9KVxuKShQYWdpbmdDb250YWluZXIpO1xuIl19