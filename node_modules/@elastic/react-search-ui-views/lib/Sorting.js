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

var _reactSelect = _interopRequireDefault(require("react-select"));

var _viewHelpers = require("./view-helpers");

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
  }
};

function Sorting(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _onChange = _ref.onChange,
      options = _ref.options,
      value = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "label", "onChange", "options", "value"]);
  var selectedValue = value;
  var selectedOption = selectedValue ? options.find(function (option) {
    return option.value === selectedValue;
  }) : null;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _viewHelpers.appendClassName)("sui-sorting", className)
  }, rest), label && /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-sorting__label"
  }, label), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    className: "sui-select",
    classNamePrefix: "sui-select",
    value: selectedOption,
    onChange: function onChange(o) {
      return _onChange(o.value);
    },
    options: options,
    isSearchable: false,
    styles: setDefaultStyle
  }));
}

Sorting.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string,
    label: _propTypes.default.string
  })).isRequired,
  value: _propTypes.default.string
};
var _default = Sorting;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Tb3J0aW5nLmpzIl0sIm5hbWVzIjpbInNldERlZmF1bHRTdHlsZSIsIm9wdGlvbiIsImNvbnRyb2wiLCJkcm9wZG93bkluZGljYXRvciIsImluZGljYXRvclNlcGFyYXRvciIsIlNvcnRpbmciLCJjbGFzc05hbWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsInZhbHVlIiwicmVzdCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImZpbmQiLCJvIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU0sRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBRGM7QUFFdEJDLEVBQUFBLE9BQU8sRUFBRTtBQUFBLFdBQU8sRUFBUDtBQUFBLEdBRmE7QUFHdEJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQUEsV0FBTyxFQUFQO0FBQUEsR0FIRztBQUl0QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFBQSxXQUFPLEVBQVA7QUFBQTtBQUpFLENBQXhCOztBQU9BLFNBQVNDLE9BQVQsT0FBMEU7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLEtBQTRDLFFBQTVDQSxLQUE0QztBQUFBLE1BQXJDQyxTQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVJDLElBQVE7QUFDeEUsTUFBTUMsYUFBYSxHQUFHRixLQUF0QjtBQUVBLE1BQU1HLGNBQWMsR0FBR0QsYUFBYSxHQUNoQ0gsT0FBTyxDQUFDSyxJQUFSLENBQWEsVUFBQWIsTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ1MsS0FBUCxLQUFpQkUsYUFBckI7QUFBQSxHQUFuQixDQURnQyxHQUVoQyxJQUZKO0FBSUEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRSxrQ0FBZ0IsYUFBaEIsRUFBK0JOLFNBQS9CO0FBQWhCLEtBQStESyxJQUEvRCxHQUNHSixLQUFLLGlCQUFJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUFxQ0EsS0FBckMsQ0FEWixlQUVFLDZCQUFDLG9CQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsWUFEWjtBQUVFLElBQUEsZUFBZSxFQUFDLFlBRmxCO0FBR0UsSUFBQSxLQUFLLEVBQUVNLGNBSFQ7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUUsQ0FBQztBQUFBLGFBQUlQLFNBQVEsQ0FBQ08sQ0FBQyxDQUFDTCxLQUFILENBQVo7QUFBQSxLQUpiO0FBS0UsSUFBQSxPQUFPLEVBQUVELE9BTFg7QUFNRSxJQUFBLFlBQVksRUFBRSxLQU5oQjtBQU9FLElBQUEsTUFBTSxFQUFFVDtBQVBWLElBRkYsQ0FERjtBQWNEOztBQUVESyxPQUFPLENBQUNXLFNBQVIsR0FBb0I7QUFDbEJWLEVBQUFBLFNBQVMsRUFBRVcsbUJBQVVDLE1BREg7QUFFbEJYLEVBQUFBLEtBQUssRUFBRVUsbUJBQVVDLE1BRkM7QUFHbEJWLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVFLElBQVYsQ0FBZUMsVUFIUDtBQUlsQlgsRUFBQUEsT0FBTyxFQUFFUSxtQkFBVUksT0FBVixDQUNQSixtQkFBVUssS0FBVixDQUFnQjtBQUFFWixJQUFBQSxLQUFLLEVBQUVPLG1CQUFVQyxNQUFuQjtBQUEyQlgsSUFBQUEsS0FBSyxFQUFFVSxtQkFBVUM7QUFBNUMsR0FBaEIsQ0FETyxFQUVQRSxVQU5nQjtBQU9sQlYsRUFBQUEsS0FBSyxFQUFFTyxtQkFBVUM7QUFQQyxDQUFwQjtlQVVlYixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5cbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5jb25zdCBzZXREZWZhdWx0U3R5bGUgPSB7XG4gIG9wdGlvbjogKCkgPT4gKHt9KSxcbiAgY29udHJvbDogKCkgPT4gKHt9KSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6ICgpID0+ICh7fSksXG4gIGluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gKHt9KVxufTtcblxuZnVuY3Rpb24gU29ydGluZyh7IGNsYXNzTmFtZSwgbGFiZWwsIG9uQ2hhbmdlLCBvcHRpb25zLCB2YWx1ZSwgLi4ucmVzdCB9KSB7XG4gIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcblxuICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHNlbGVjdGVkVmFsdWVcbiAgICA/IG9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlKVxuICAgIDogbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktc29ydGluZ1wiLCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICB7bGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJzdWktc29ydGluZ19fbGFiZWxcIj57bGFiZWx9PC9kaXY+fVxuICAgICAgPFNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJzdWktc2VsZWN0XCJcbiAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic3VpLXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e28gPT4gb25DaGFuZ2Uoby52YWx1ZSl9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIHN0eWxlcz17c2V0RGVmYXVsdFN0eWxlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU29ydGluZy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoeyB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZywgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcgfSlcbiAgKS5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGluZztcbiJdfQ==