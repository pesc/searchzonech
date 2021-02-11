"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _types = require("./types");

var _viewHelpers = require("./view-helpers");

function BooleanFacet(_ref) {
  var className = _ref.className,
      label = _ref.label,
      options = _ref.options,
      onChange = _ref.onChange,
      onRemove = _ref.onRemove,
      values = _ref.values;
  var trueOptions = options.find(function (option) {
    return option.value === "true";
  });
  if (!trueOptions) return null;
  var isSelected = values.includes("true");

  var apply = function apply() {
    return onChange("true");
  };

  var remove = function remove() {
    return onRemove("true");
  };

  var toggle = function toggle() {
    isSelected ? remove() : apply();
  };

  return /*#__PURE__*/_react.default.createElement("fieldset", {
    className: (0, _viewHelpers.appendClassName)("sui-facet", className)
  }, /*#__PURE__*/_react.default.createElement("legend", {
    className: "sui-facet__title"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-boolean-facet"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-boolean-facet__option-input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "sui-boolean-facet__option-label"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-boolean-facet__option-input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "sui-boolean-facet__checkbox",
    type: "checkbox",
    onChange: toggle,
    checked: isSelected
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "sui-boolean-facet__input-text"
  }, label)), /*#__PURE__*/_react.default.createElement("span", {
    className: "sui-boolean-facet__option-count"
  }, trueOptions.count)))));
}

BooleanFacet.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onRemove: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_types.FacetValue).isRequired,
  values: _propTypes.default.arrayOf(_types.FilterValue).isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = BooleanFacet;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb29sZWFuRmFjZXQuanMiXSwibmFtZXMiOlsiQm9vbGVhbkZhY2V0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJvblJlbW92ZSIsInZhbHVlcyIsInRydWVPcHRpb25zIiwiZmluZCIsIm9wdGlvbiIsInZhbHVlIiwiaXNTZWxlY3RlZCIsImluY2x1ZGVzIiwiYXBwbHkiLCJyZW1vdmUiLCJ0b2dnbGUiLCJjb3VudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXlPZiIsIkZhY2V0VmFsdWUiLCJGaWx0ZXJWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQU9HO0FBQUEsTUFOREMsU0FNQyxRQU5EQSxTQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsUUFFQyxRQUZEQSxRQUVDO0FBQUEsTUFEREMsTUFDQyxRQUREQSxNQUNDO0FBQ0QsTUFBTUMsV0FBVyxHQUFHSixPQUFPLENBQUNLLElBQVIsQ0FBYSxVQUFBQyxNQUFNO0FBQUEsV0FBSUEsTUFBTSxDQUFDQyxLQUFQLEtBQWlCLE1BQXJCO0FBQUEsR0FBbkIsQ0FBcEI7QUFDQSxNQUFJLENBQUNILFdBQUwsRUFBa0IsT0FBTyxJQUFQO0FBQ2xCLE1BQU1JLFVBQVUsR0FBR0wsTUFBTSxDQUFDTSxRQUFQLENBQWdCLE1BQWhCLENBQW5COztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FBTVQsUUFBUSxDQUFDLE1BQUQsQ0FBZDtBQUFBLEdBQWQ7O0FBQ0EsTUFBTVUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNVCxRQUFRLENBQUMsTUFBRCxDQUFkO0FBQUEsR0FBZjs7QUFDQSxNQUFNVSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CSixJQUFBQSxVQUFVLEdBQUdHLE1BQU0sRUFBVCxHQUFjRCxLQUFLLEVBQTdCO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFVLElBQUEsU0FBUyxFQUFFLGtDQUFnQixXQUFoQixFQUE2QlosU0FBN0I7QUFBckIsa0JBQ0U7QUFBUSxJQUFBLFNBQVMsRUFBQztBQUFsQixLQUFzQ0MsS0FBdEMsQ0FERixlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFO0FBQWhCLGtCQUNFO0FBQU8sSUFBQSxTQUFTLEVBQUM7QUFBakIsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsNkJBRFo7QUFFRSxJQUFBLElBQUksRUFBQyxVQUZQO0FBR0UsSUFBQSxRQUFRLEVBQUVhLE1BSFo7QUFJRSxJQUFBLE9BQU8sRUFBRUo7QUFKWCxJQURGLGVBT0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUFpRFQsS0FBakQsQ0FQRixDQURGLGVBVUU7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUNHSyxXQUFXLENBQUNTLEtBRGYsQ0FWRixDQURGLENBREYsQ0FGRixDQURGO0FBdUJEOztBQUVEaEIsWUFBWSxDQUFDaUIsU0FBYixHQUF5QjtBQUN2QmhCLEVBQUFBLFNBQVMsRUFBRWlCLG1CQUFVQyxNQURFO0FBRXZCakIsRUFBQUEsS0FBSyxFQUFFZ0IsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkQ7QUFHdkJmLEVBQUFBLFFBQVEsRUFBRWEsbUJBQVVHLElBQVYsQ0FBZUQsVUFIRjtBQUl2QmpCLEVBQUFBLE9BQU8sRUFBRWUsbUJBQVVJLE9BQVYsQ0FBa0JDLGlCQUFsQixFQUE4QkgsVUFKaEI7QUFLdkJkLEVBQUFBLE1BQU0sRUFBRVksbUJBQVVJLE9BQVYsQ0FBa0JFLGtCQUFsQixFQUErQkosVUFMaEI7QUFNdkJoQixFQUFBQSxRQUFRLEVBQUVjLG1CQUFVRyxJQUFWLENBQWVEO0FBTkYsQ0FBekI7ZUFTZXBCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEZhY2V0VmFsdWUsIEZpbHRlclZhbHVlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGFwcGVuZENsYXNzTmFtZSB9IGZyb20gXCIuL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBCb29sZWFuRmFjZXQoe1xuICBjbGFzc05hbWUsXG4gIGxhYmVsLFxuICBvcHRpb25zLFxuICBvbkNoYW5nZSxcbiAgb25SZW1vdmUsXG4gIHZhbHVlc1xufSkge1xuICBjb25zdCB0cnVlT3B0aW9ucyA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBcInRydWVcIik7XG4gIGlmICghdHJ1ZU9wdGlvbnMpIHJldHVybiBudWxsO1xuICBjb25zdCBpc1NlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKFwidHJ1ZVwiKTtcblxuICBjb25zdCBhcHBseSA9ICgpID0+IG9uQ2hhbmdlKFwidHJ1ZVwiKTtcbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4gb25SZW1vdmUoXCJ0cnVlXCIpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgaXNTZWxlY3RlZCA/IHJlbW92ZSgpIDogYXBwbHkoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmaWVsZHNldCBjbGFzc05hbWU9e2FwcGVuZENsYXNzTmFtZShcInN1aS1mYWNldFwiLCBjbGFzc05hbWUpfT5cbiAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3VpLWZhY2V0X190aXRsZVwiPntsYWJlbH08L2xlZ2VuZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLWJvb2xlYW4tZmFjZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic3VpLWJvb2xlYW4tZmFjZXRfX29wdGlvbi1pbnB1dC13cmFwcGVyXCJ9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdWktYm9vbGVhbi1mYWNldF9fb3B0aW9uLWxhYmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1ib29sZWFuLWZhY2V0X19vcHRpb24taW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWktYm9vbGVhbi1mYWNldF9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWktYm9vbGVhbi1mYWNldF9faW5wdXQtdGV4dFwiPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1aS1ib29sZWFuLWZhY2V0X19vcHRpb24tY291bnRcIj5cbiAgICAgICAgICAgICAge3RydWVPcHRpb25zLmNvdW50fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9maWVsZHNldD5cbiAgKTtcbn1cblxuQm9vbGVhbkZhY2V0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoRmFjZXRWYWx1ZSkuaXNSZXF1aXJlZCxcbiAgdmFsdWVzOiBQcm9wVHlwZXMuYXJyYXlPZihGaWx0ZXJWYWx1ZSkuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5GYWNldDtcbiJdfQ==