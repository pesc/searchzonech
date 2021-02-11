"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _viewHelpers = require("./view-helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var setDefaultStyle = {
  option: function option() {
    return {};
  },
  control: function control() {
    return {};
  },
  dropdownIndicator: function dropdownIndicator() {
    return {};
  },
  indicatorSeparator: function indicatorSeparator() {
    return {};
  },
  singleValue: function singleValue(provided) {
    // Pulling out CSS that we don't want
    // eslint-disable-next-line no-unused-vars
    var position = provided.position,
        top = provided.top,
        transform = provided.transform,
        maxWidth = provided.maxWidth,
        rest = (0, _objectWithoutProperties2.default)(provided, ["position", "top", "transform", "maxWidth"]);
    return _objectSpread(_objectSpread({}, rest), {}, {
      lineHeight: 1,
      marginRight: 0
    });
  },
  valueContainer: function valueContainer(provided) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      paddingRight: 0
    });
  }
};

var wrapOption = function wrapOption(option) {
  return {
    label: option,
    value: option
  };
};

function ResultsPerPage(_ref) {
  var className = _ref.className,
      _onChange = _ref.onChange,
      options = _ref.options,
      selectedValue = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "onChange", "options", "value"]);
  var selectedOption = null;

  if (selectedValue) {
    selectedOption = wrapOption(selectedValue);
    if (!options.includes(selectedValue)) options = [selectedValue].concat((0, _toConsumableArray2.default)(options));
  }

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-results-per-page", className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-results-per-page__label"
  }, "Show"), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    className: "sui-select sui-select--inline",
    classNamePrefix: "sui-select",
    value: selectedOption,
    onChange: function onChange(o) {
      return _onChange(o.value);
    },
    options: options.map(wrapOption),
    isSearchable: false,
    styles: setDefaultStyle
  }));
}

ResultsPerPage.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,
  className: _propTypes.default.string,
  value: _propTypes.default.number
};
var _default = ResultsPerPage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRzUGVyUGFnZS5qcyJdLCJuYW1lcyI6WyJzZXREZWZhdWx0U3R5bGUiLCJvcHRpb24iLCJjb250cm9sIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJzaW5nbGVWYWx1ZSIsInByb3ZpZGVkIiwicG9zaXRpb24iLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsInJlc3QiLCJsaW5lSGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJ2YWx1ZUNvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsIndyYXBPcHRpb24iLCJsYWJlbCIsInZhbHVlIiwiUmVzdWx0c1BlclBhZ2UiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJzZWxlY3RlZFZhbHVlIiwic2VsZWN0ZWRPcHRpb24iLCJpbmNsdWRlcyIsIm8iLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJudW1iZXIiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsRUFBQUEsTUFBTSxFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FEYztBQUV0QkMsRUFBQUEsT0FBTyxFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FGYTtBQUd0QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQSxHQUhHO0FBSXRCQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBSkU7QUFLdEJDLEVBQUFBLFdBQVcsRUFBRSxxQkFBQUMsUUFBUSxFQUFJO0FBQ3ZCO0FBQ0E7QUFGdUIsUUFHZkMsUUFIZSxHQUdpQ0QsUUFIakMsQ0FHZkMsUUFIZTtBQUFBLFFBR0xDLEdBSEssR0FHaUNGLFFBSGpDLENBR0xFLEdBSEs7QUFBQSxRQUdBQyxTQUhBLEdBR2lDSCxRQUhqQyxDQUdBRyxTQUhBO0FBQUEsUUFHV0MsUUFIWCxHQUdpQ0osUUFIakMsQ0FHV0ksUUFIWDtBQUFBLFFBR3dCQyxJQUh4QiwwQ0FHaUNMLFFBSGpDO0FBSXZCLDJDQUFZSyxJQUFaO0FBQWtCQyxNQUFBQSxVQUFVLEVBQUUsQ0FBOUI7QUFBaUNDLE1BQUFBLFdBQVcsRUFBRTtBQUE5QztBQUNELEdBVnFCO0FBV3RCQyxFQUFBQSxjQUFjLEVBQUUsd0JBQUFSLFFBQVE7QUFBQSwyQ0FBVUEsUUFBVjtBQUFvQlMsTUFBQUEsWUFBWSxFQUFFO0FBQWxDO0FBQUE7QUFYRixDQUF4Qjs7QUFjQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBZixNQUFNO0FBQUEsU0FBSztBQUFFZ0IsSUFBQUEsS0FBSyxFQUFFaEIsTUFBVDtBQUFpQmlCLElBQUFBLEtBQUssRUFBRWpCO0FBQXhCLEdBQUw7QUFBQSxDQUF6Qjs7QUFFQSxTQUFTa0IsY0FBVCxPQU1HO0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsU0FJQyxRQUpEQSxRQUlDO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGTUMsYUFFTixRQUZETCxLQUVDO0FBQUEsTUFERVAsSUFDRjtBQUNELE1BQUlhLGNBQWMsR0FBRyxJQUFyQjs7QUFFQSxNQUFJRCxhQUFKLEVBQW1CO0FBQ2pCQyxJQUFBQSxjQUFjLEdBQUdSLFVBQVUsQ0FBQ08sYUFBRCxDQUEzQjtBQUVBLFFBQUksQ0FBQ0QsT0FBTyxDQUFDRyxRQUFSLENBQWlCRixhQUFqQixDQUFMLEVBQXNDRCxPQUFPLElBQUlDLGFBQUosMENBQXNCRCxPQUF0QixFQUFQO0FBQ3ZDOztBQUVELHNCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUUsa0NBQWdCLHNCQUFoQixFQUF3Q0YsU0FBeEM7QUFEYixLQUVNVCxJQUZOLGdCQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixZQUpGLGVBS0UsNkJBQUMsb0JBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQywrQkFEWjtBQUVFLElBQUEsZUFBZSxFQUFDLFlBRmxCO0FBR0UsSUFBQSxLQUFLLEVBQUVhLGNBSFQ7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUUsQ0FBQztBQUFBLGFBQUlMLFNBQVEsQ0FBQ0ssQ0FBQyxDQUFDUixLQUFILENBQVo7QUFBQSxLQUpiO0FBS0UsSUFBQSxPQUFPLEVBQUVJLE9BQU8sQ0FBQ0ssR0FBUixDQUFZWCxVQUFaLENBTFg7QUFNRSxJQUFBLFlBQVksRUFBRSxLQU5oQjtBQU9FLElBQUEsTUFBTSxFQUFFaEI7QUFQVixJQUxGLENBREY7QUFpQkQ7O0FBRURtQixjQUFjLENBQUNTLFNBQWYsR0FBMkI7QUFDekJQLEVBQUFBLFFBQVEsRUFBRVEsbUJBQVVDLElBQVYsQ0FBZUMsVUFEQTtBQUV6QlQsRUFBQUEsT0FBTyxFQUFFTyxtQkFBVUcsT0FBVixDQUFrQkgsbUJBQVVJLE1BQTVCLEVBQW9DRixVQUZwQjtBQUd6QlgsRUFBQUEsU0FBUyxFQUFFUyxtQkFBVUssTUFISTtBQUl6QmhCLEVBQUFBLEtBQUssRUFBRVcsbUJBQVVJO0FBSlEsQ0FBM0I7ZUFPZWQsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuY29uc3Qgc2V0RGVmYXVsdFN0eWxlID0ge1xuICBvcHRpb246ICgpID0+ICh7fSksXG4gIGNvbnRyb2w6ICgpID0+ICh7fSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiAoe30pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7fSksXG4gIHNpbmdsZVZhbHVlOiBwcm92aWRlZCA9PiB7XG4gICAgLy8gUHVsbGluZyBvdXQgQ1NTIHRoYXQgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHRvcCwgdHJhbnNmb3JtLCBtYXhXaWR0aCwgLi4ucmVzdCB9ID0gcHJvdmlkZWQ7XG4gICAgcmV0dXJuIHsgLi4ucmVzdCwgbGluZUhlaWdodDogMSwgbWFyZ2luUmlnaHQ6IDAgfTtcbiAgfSxcbiAgdmFsdWVDb250YWluZXI6IHByb3ZpZGVkID0+ICh7IC4uLnByb3ZpZGVkLCBwYWRkaW5nUmlnaHQ6IDAgfSlcbn07XG5cbmNvbnN0IHdyYXBPcHRpb24gPSBvcHRpb24gPT4gKHsgbGFiZWw6IG9wdGlvbiwgdmFsdWU6IG9wdGlvbiB9KTtcblxuZnVuY3Rpb24gUmVzdWx0c1BlclBhZ2Uoe1xuICBjbGFzc05hbWUsXG4gIG9uQ2hhbmdlLFxuICBvcHRpb25zLFxuICB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSxcbiAgLi4ucmVzdFxufSkge1xuICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBudWxsO1xuXG4gIGlmIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgc2VsZWN0ZWRPcHRpb24gPSB3cmFwT3B0aW9uKHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgaWYgKCFvcHRpb25zLmluY2x1ZGVzKHNlbGVjdGVkVmFsdWUpKSBvcHRpb25zID0gW3NlbGVjdGVkVmFsdWUsIC4uLm9wdGlvbnNdO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1yZXN1bHRzLXBlci1wYWdlXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1yZXN1bHRzLXBlci1wYWdlX19sYWJlbFwiPlNob3c8L2Rpdj5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgY2xhc3NOYW1lPVwic3VpLXNlbGVjdCBzdWktc2VsZWN0LS1pbmxpbmVcIlxuICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzdWktc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICBvbkNoYW5nZT17byA9PiBvbkNoYW5nZShvLnZhbHVlKX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAod3JhcE9wdGlvbil9XG4gICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIHN0eWxlcz17c2V0RGVmYXVsdFN0eWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVzdWx0c1BlclBhZ2UucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0c1BlclBhZ2U7XG4iXX0=