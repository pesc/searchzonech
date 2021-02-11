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

function PagingInfo(_ref) {
  var className = _ref.className,
      end = _ref.end,
      searchTerm = _ref.searchTerm,
      start = _ref.start,
      totalResults = _ref.totalResults,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "end", "searchTerm", "start", "totalResults"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-paging-info", className)
  }, rest), "Showing", " ", /*#__PURE__*/_react.default.createElement("strong", null, start, " - ", end), " ", "out of ", /*#__PURE__*/_react.default.createElement("strong", null, totalResults), searchTerm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", "for: ", /*#__PURE__*/_react.default.createElement("em", null, searchTerm)));
}

PagingInfo.propTypes = {
  end: _propTypes.default.number.isRequired,
  searchTerm: _propTypes.default.string.isRequired,
  start: _propTypes.default.number.isRequired,
  totalResults: _propTypes.default.number.isRequired,
  className: _propTypes.default.string
};
var _default = PagingInfo;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmdJbmZvLmpzIl0sIm5hbWVzIjpbIlBhZ2luZ0luZm8iLCJjbGFzc05hbWUiLCJlbmQiLCJzZWFyY2hUZXJtIiwic3RhcnQiLCJ0b3RhbFJlc3VsdHMiLCJyZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBLFNBQVNBLFVBQVQsT0FPRztBQUFBLE1BTkRDLFNBTUMsUUFOREEsU0FNQztBQUFBLE1BTERDLEdBS0MsUUFMREEsR0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BREVDLElBQ0Y7QUFDRCxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFLGtDQUFnQixpQkFBaEIsRUFBbUNMLFNBQW5DO0FBQWhCLEtBQW1FSyxJQUFuRSxjQUNVLEdBRFYsZUFFRSw2Q0FDR0YsS0FESCxTQUNhRixHQURiLENBRkYsRUFJWSxHQUpaLDBCQUtTLDZDQUFTRyxZQUFULENBTFQsRUFNR0YsVUFBVSxpQkFDVCw0REFDRyxHQURILHdCQUVPLHlDQUFLQSxVQUFMLENBRlAsQ0FQSixDQURGO0FBZUQ7O0FBRURILFVBQVUsQ0FBQ08sU0FBWCxHQUF1QjtBQUNyQkwsRUFBQUEsR0FBRyxFQUFFTSxtQkFBVUMsTUFBVixDQUFpQkMsVUFERDtBQUVyQlAsRUFBQUEsVUFBVSxFQUFFSyxtQkFBVUcsTUFBVixDQUFpQkQsVUFGUjtBQUdyQk4sRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkMsVUFISDtBQUlyQkwsRUFBQUEsWUFBWSxFQUFFRyxtQkFBVUMsTUFBVixDQUFpQkMsVUFKVjtBQUtyQlQsRUFBQUEsU0FBUyxFQUFFTyxtQkFBVUc7QUFMQSxDQUF2QjtlQVFlWCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuZnVuY3Rpb24gUGFnaW5nSW5mbyh7XG4gIGNsYXNzTmFtZSxcbiAgZW5kLFxuICBzZWFyY2hUZXJtLFxuICBzdGFydCxcbiAgdG90YWxSZXN1bHRzLFxuICAuLi5yZXN0XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1wYWdpbmctaW5mb1wiLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICBTaG93aW5ne1wiIFwifVxuICAgICAgPHN0cm9uZz5cbiAgICAgICAge3N0YXJ0fSAtIHtlbmR9XG4gICAgICA8L3N0cm9uZz57XCIgXCJ9XG4gICAgICBvdXQgb2YgPHN0cm9uZz57dG90YWxSZXN1bHRzfTwvc3Ryb25nPlxuICAgICAge3NlYXJjaFRlcm0gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBmb3I6IDxlbT57c2VhcmNoVGVybX08L2VtPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblBhZ2luZ0luZm8ucHJvcFR5cGVzID0ge1xuICBlbmQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2VhcmNoVGVybTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdGFydDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0b3RhbFJlc3VsdHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmdJbmZvO1xuIl19