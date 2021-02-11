import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { appendClassName } from "./view-helpers";
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
        rest = _objectWithoutProperties(provided, ["position", "top", "transform", "maxWidth"]);

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
      rest = _objectWithoutProperties(_ref, ["className", "onChange", "options", "value"]);

  var selectedOption = null;

  if (selectedValue) {
    selectedOption = wrapOption(selectedValue);
    if (!options.includes(selectedValue)) options = [selectedValue].concat(_toConsumableArray(options));
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: appendClassName("sui-results-per-page", className)
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sui-results-per-page__label"
  }, "Show"), /*#__PURE__*/React.createElement(Select, {
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
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string,
  value: PropTypes.number
};
export default ResultsPerPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRzUGVyUGFnZS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsIlNlbGVjdCIsImFwcGVuZENsYXNzTmFtZSIsInNldERlZmF1bHRTdHlsZSIsIm9wdGlvbiIsImNvbnRyb2wiLCJkcm9wZG93bkluZGljYXRvciIsImluZGljYXRvclNlcGFyYXRvciIsInNpbmdsZVZhbHVlIiwicHJvdmlkZWQiLCJwb3NpdGlvbiIsInRvcCIsInRyYW5zZm9ybSIsIm1heFdpZHRoIiwicmVzdCIsImxpbmVIZWlnaHQiLCJtYXJnaW5SaWdodCIsInZhbHVlQ29udGFpbmVyIiwicGFkZGluZ1JpZ2h0Iiwid3JhcE9wdGlvbiIsImxhYmVsIiwidmFsdWUiLCJSZXN1bHRzUGVyUGFnZSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImluY2x1ZGVzIiwibyIsIm1hcCIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm51bWJlciIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGNBQW5CO0FBRUEsU0FBU0MsZUFBVCxRQUFnQyxnQkFBaEM7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU0sRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBRGM7QUFFdEJDLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBRmE7QUFHdEJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FIRztBQUl0QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQSxHQUpFO0FBS3RCQyxFQUFBQSxXQUFXLEVBQUUscUJBQUFDLFFBQVEsRUFBSTtBQUN2QjtBQUNBO0FBRnVCLFFBR2ZDLFFBSGUsR0FHaUNELFFBSGpDLENBR2ZDLFFBSGU7QUFBQSxRQUdMQyxHQUhLLEdBR2lDRixRQUhqQyxDQUdMRSxHQUhLO0FBQUEsUUFHQUMsU0FIQSxHQUdpQ0gsUUFIakMsQ0FHQUcsU0FIQTtBQUFBLFFBR1dDLFFBSFgsR0FHaUNKLFFBSGpDLENBR1dJLFFBSFg7QUFBQSxRQUd3QkMsSUFIeEIsNEJBR2lDTCxRQUhqQzs7QUFJdkIsMkNBQVlLLElBQVo7QUFBa0JDLE1BQUFBLFVBQVUsRUFBRSxDQUE5QjtBQUFpQ0MsTUFBQUEsV0FBVyxFQUFFO0FBQTlDO0FBQ0QsR0FWcUI7QUFXdEJDLEVBQUFBLGNBQWMsRUFBRSx3QkFBQVIsUUFBUTtBQUFBLDJDQUFVQSxRQUFWO0FBQW9CUyxNQUFBQSxZQUFZLEVBQUU7QUFBbEM7QUFBQTtBQVhGLENBQXhCOztBQWNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFmLE1BQU07QUFBQSxTQUFLO0FBQUVnQixJQUFBQSxLQUFLLEVBQUVoQixNQUFUO0FBQWlCaUIsSUFBQUEsS0FBSyxFQUFFakI7QUFBeEIsR0FBTDtBQUFBLENBQXpCOztBQUVBLFNBQVNrQixjQUFULE9BTUc7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFFBSUM7QUFBQSxNQUhEQyxPQUdDLFFBSERBLE9BR0M7QUFBQSxNQUZNQyxhQUVOLFFBRkRMLEtBRUM7QUFBQSxNQURFUCxJQUNGOztBQUNELE1BQUlhLGNBQWMsR0FBRyxJQUFyQjs7QUFFQSxNQUFJRCxhQUFKLEVBQW1CO0FBQ2pCQyxJQUFBQSxjQUFjLEdBQUdSLFVBQVUsQ0FBQ08sYUFBRCxDQUEzQjtBQUVBLFFBQUksQ0FBQ0QsT0FBTyxDQUFDRyxRQUFSLENBQWlCRixhQUFqQixDQUFMLEVBQXNDRCxPQUFPLElBQUlDLGFBQUosNEJBQXNCRCxPQUF0QixFQUFQO0FBQ3ZDOztBQUVELHNCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUV2QixlQUFlLENBQUMsc0JBQUQsRUFBeUJxQixTQUF6QjtBQUQ1QixLQUVNVCxJQUZOLGdCQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixZQUpGLGVBS0Usb0JBQUMsTUFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLCtCQURaO0FBRUUsSUFBQSxlQUFlLEVBQUMsWUFGbEI7QUFHRSxJQUFBLEtBQUssRUFBRWEsY0FIVDtBQUlFLElBQUEsUUFBUSxFQUFFLGtCQUFBRSxDQUFDO0FBQUEsYUFBSUwsU0FBUSxDQUFDSyxDQUFDLENBQUNSLEtBQUgsQ0FBWjtBQUFBLEtBSmI7QUFLRSxJQUFBLE9BQU8sRUFBRUksT0FBTyxDQUFDSyxHQUFSLENBQVlYLFVBQVosQ0FMWDtBQU1FLElBQUEsWUFBWSxFQUFFLEtBTmhCO0FBT0UsSUFBQSxNQUFNLEVBQUVoQjtBQVBWLElBTEYsQ0FERjtBQWlCRDs7QUFFRG1CLGNBQWMsQ0FBQ1MsU0FBZixHQUEyQjtBQUN6QlAsRUFBQUEsUUFBUSxFQUFFekIsU0FBUyxDQUFDaUMsSUFBVixDQUFlQyxVQURBO0FBRXpCUixFQUFBQSxPQUFPLEVBQUUxQixTQUFTLENBQUNtQyxPQUFWLENBQWtCbkMsU0FBUyxDQUFDb0MsTUFBNUIsRUFBb0NGLFVBRnBCO0FBR3pCVixFQUFBQSxTQUFTLEVBQUV4QixTQUFTLENBQUNxQyxNQUhJO0FBSXpCZixFQUFBQSxLQUFLLEVBQUV0QixTQUFTLENBQUNvQztBQUpRLENBQTNCO0FBT0EsZUFBZWIsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuXG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuY29uc3Qgc2V0RGVmYXVsdFN0eWxlID0ge1xuICBvcHRpb246ICgpID0+ICh7fSksXG4gIGNvbnRyb2w6ICgpID0+ICh7fSksXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiAoe30pLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+ICh7fSksXG4gIHNpbmdsZVZhbHVlOiBwcm92aWRlZCA9PiB7XG4gICAgLy8gUHVsbGluZyBvdXQgQ1NTIHRoYXQgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHRvcCwgdHJhbnNmb3JtLCBtYXhXaWR0aCwgLi4ucmVzdCB9ID0gcHJvdmlkZWQ7XG4gICAgcmV0dXJuIHsgLi4ucmVzdCwgbGluZUhlaWdodDogMSwgbWFyZ2luUmlnaHQ6IDAgfTtcbiAgfSxcbiAgdmFsdWVDb250YWluZXI6IHByb3ZpZGVkID0+ICh7IC4uLnByb3ZpZGVkLCBwYWRkaW5nUmlnaHQ6IDAgfSlcbn07XG5cbmNvbnN0IHdyYXBPcHRpb24gPSBvcHRpb24gPT4gKHsgbGFiZWw6IG9wdGlvbiwgdmFsdWU6IG9wdGlvbiB9KTtcblxuZnVuY3Rpb24gUmVzdWx0c1BlclBhZ2Uoe1xuICBjbGFzc05hbWUsXG4gIG9uQ2hhbmdlLFxuICBvcHRpb25zLFxuICB2YWx1ZTogc2VsZWN0ZWRWYWx1ZSxcbiAgLi4ucmVzdFxufSkge1xuICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBudWxsO1xuXG4gIGlmIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgc2VsZWN0ZWRPcHRpb24gPSB3cmFwT3B0aW9uKHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgaWYgKCFvcHRpb25zLmluY2x1ZGVzKHNlbGVjdGVkVmFsdWUpKSBvcHRpb25zID0gW3NlbGVjdGVkVmFsdWUsIC4uLm9wdGlvbnNdO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1yZXN1bHRzLXBlci1wYWdlXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1yZXN1bHRzLXBlci1wYWdlX19sYWJlbFwiPlNob3c8L2Rpdj5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgY2xhc3NOYW1lPVwic3VpLXNlbGVjdCBzdWktc2VsZWN0LS1pbmxpbmVcIlxuICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzdWktc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICBvbkNoYW5nZT17byA9PiBvbkNoYW5nZShvLnZhbHVlKX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAod3JhcE9wdGlvbil9XG4gICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIHN0eWxlcz17c2V0RGVmYXVsdFN0eWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVzdWx0c1BlclBhZ2UucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0c1BlclBhZ2U7XG4iXX0=