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

var _rcPagination = _interopRequireDefault(require("rc-pagination"));

var _en_US = _interopRequireDefault(require("rc-pagination/lib/locale/en_US"));

var _viewHelpers = require("./view-helpers");

function Paging(_ref) {
  var className = _ref.className,
      current = _ref.current,
      resultsPerPage = _ref.resultsPerPage,
      onChange = _ref.onChange,
      totalPages = _ref.totalPages,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "current", "resultsPerPage", "onChange", "totalPages"]);
  return /*#__PURE__*/_react.default.createElement(_rcPagination.default, (0, _extends2.default)({
    current: current,
    onChange: onChange,
    pageSize: resultsPerPage,
    total: totalPages * resultsPerPage,
    className: (0, _viewHelpers.appendClassName)("sui-paging", className),
    locale: _en_US.default
  }, rest));
}

Paging.propTypes = {
  current: _propTypes.default.number.isRequired,
  onChange: _propTypes.default.func.isRequired,
  resultsPerPage: _propTypes.default.number.isRequired,
  totalPages: _propTypes.default.number.isRequired,
  className: _propTypes.default.string
};
var _default = Paging;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWdpbmcuanMiXSwibmFtZXMiOlsiUGFnaW5nIiwiY2xhc3NOYW1lIiwiY3VycmVudCIsInJlc3VsdHNQZXJQYWdlIiwib25DaGFuZ2UiLCJ0b3RhbFBhZ2VzIiwicmVzdCIsImVuVXNMb2NhbGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBLFNBQVNBLE1BQVQsT0FPRztBQUFBLE1BTkRDLFNBTUMsUUFOREEsU0FNQztBQUFBLE1BTERDLE9BS0MsUUFMREEsT0FLQztBQUFBLE1BSkRDLGNBSUMsUUFKREEsY0FJQztBQUFBLE1BSERDLFFBR0MsUUFIREEsUUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLElBQ0Y7QUFDRCxzQkFDRSw2QkFBQyxxQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFSixPQURYO0FBRUUsSUFBQSxRQUFRLEVBQUVFLFFBRlo7QUFHRSxJQUFBLFFBQVEsRUFBRUQsY0FIWjtBQUlFLElBQUEsS0FBSyxFQUFFRSxVQUFVLEdBQUdGLGNBSnRCO0FBS0UsSUFBQSxTQUFTLEVBQUUsa0NBQWdCLFlBQWhCLEVBQThCRixTQUE5QixDQUxiO0FBTUUsSUFBQSxNQUFNLEVBQUVNO0FBTlYsS0FPTUQsSUFQTixFQURGO0FBV0Q7O0FBRUROLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQjtBQUNqQk4sRUFBQUEsT0FBTyxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVqQlAsRUFBQUEsUUFBUSxFQUFFSyxtQkFBVUcsSUFBVixDQUFlRCxVQUZSO0FBR2pCUixFQUFBQSxjQUFjLEVBQUVNLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhoQjtBQUlqQk4sRUFBQUEsVUFBVSxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkMsVUFKWjtBQUtqQlYsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUk7QUFMSixDQUFuQjtlQVFlYixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJDUGFnaW5hdGlvbiBmcm9tIFwicmMtcGFnaW5hdGlvblwiO1xuaW1wb3J0IGVuVXNMb2NhbGUgZnJvbSBcInJjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VU1wiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuZnVuY3Rpb24gUGFnaW5nKHtcbiAgY2xhc3NOYW1lLFxuICBjdXJyZW50LFxuICByZXN1bHRzUGVyUGFnZSxcbiAgb25DaGFuZ2UsXG4gIHRvdGFsUGFnZXMsXG4gIC4uLnJlc3Rcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8UkNQYWdpbmF0aW9uXG4gICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcGFnZVNpemU9e3Jlc3VsdHNQZXJQYWdlfVxuICAgICAgdG90YWw9e3RvdGFsUGFnZXMgKiByZXN1bHRzUGVyUGFnZX1cbiAgICAgIGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLXBhZ2luZ1wiLCBjbGFzc05hbWUpfVxuICAgICAgbG9jYWxlPXtlblVzTG9jYWxlfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn1cblxuUGFnaW5nLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVzdWx0c1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdG90YWxQYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luZztcbiJdfQ==