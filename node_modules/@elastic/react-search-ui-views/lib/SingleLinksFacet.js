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

function SingleLinksFacet(_ref) {
  var className = _ref.className,
      label = _ref.label,
      onRemove = _ref.onRemove,
      onSelect = _ref.onSelect,
      options = _ref.options;
  var value = options.filter(function (o) {
    return o.selected;
  }).map(function (o) {
    return o.value;
  })[0];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _viewHelpers.appendClassName)("sui-facet", className)
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-facet__title"
  }, label), /*#__PURE__*/_react.default.createElement("ul", {
    className: "sui-single-option-facet"
  }, value && /*#__PURE__*/_react.default.createElement("li", {
    className: "sui-single-option-facet__selected"
  }, (0, _viewHelpers.getFilterValueDisplay)(value), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "sui-single-option-facet__remove"
  }, "(", /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      onRemove(value);
    },
    href: "/"
  }, "Remove"), ")")), !value && options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "sui-single-option-facet__item",
      key: (0, _viewHelpers.getFilterValueDisplay)(option.value)
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "sui-single-option-facet__link",
      href: "/",
      onClick: function onClick(e) {
        e.preventDefault();
        onSelect(option.value);
      }
    }, (0, _viewHelpers.getFilterValueDisplay)(option.value)), " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "sui-facet__count"
    }, option.count));
  }))));
}

SingleLinksFacet.propTypes = {
  label: _propTypes.default.string.isRequired,
  onRemove: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  options: _propTypes.default.arrayOf(_types.FacetValue).isRequired,
  className: _propTypes.default.string
};
var _default = SingleLinksFacet;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TaW5nbGVMaW5rc0ZhY2V0LmpzIl0sIm5hbWVzIjpbIlNpbmdsZUxpbmtzRmFjZXQiLCJjbGFzc05hbWUiLCJsYWJlbCIsIm9uUmVtb3ZlIiwib25TZWxlY3QiLCJvcHRpb25zIiwidmFsdWUiLCJmaWx0ZXIiLCJvIiwic2VsZWN0ZWQiLCJtYXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJvcHRpb24iLCJjb3VudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXlPZiIsIkZhY2V0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUdBLFNBQVNBLGdCQUFULE9BQTZFO0FBQUEsTUFBakRDLFNBQWlELFFBQWpEQSxTQUFpRDtBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsUUFBK0IsUUFBL0JBLFFBQStCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUMzRSxNQUFNQyxLQUFLLEdBQUdELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLFFBQU47QUFBQSxHQUFoQixFQUFnQ0MsR0FBaEMsQ0FBb0MsVUFBQUYsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0YsS0FBTjtBQUFBLEdBQXJDLEVBQWtELENBQWxELENBQWQ7QUFDQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFLGtDQUFnQixXQUFoQixFQUE2QkwsU0FBN0I7QUFBaEIsa0JBQ0UsdURBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQW1DQyxLQUFuQyxDQURGLGVBRUU7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0dJLEtBQUssaUJBQ0o7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLEtBQ0csd0NBQXNCQSxLQUF0QixDQURILEVBQ2lDLEdBRGpDLGVBRUU7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQix1QkFFRTtBQUNFLElBQUEsT0FBTyxFQUFFLGlCQUFBSyxDQUFDLEVBQUk7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FULE1BQUFBLFFBQVEsQ0FBQ0csS0FBRCxDQUFSO0FBQ0QsS0FKSDtBQUtFLElBQUEsSUFBSSxFQUFDO0FBTFAsY0FGRixNQUZGLENBRkosRUFtQkcsQ0FBQ0EsS0FBRCxJQUNDRCxPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFBRyxNQUFNO0FBQUEsd0JBQ2hCO0FBQ0UsTUFBQSxTQUFTLEVBQUMsK0JBRFo7QUFFRSxNQUFBLEdBQUcsRUFBRSx3Q0FBc0JBLE1BQU0sQ0FBQ1AsS0FBN0I7QUFGUCxvQkFJRTtBQUNFLE1BQUEsU0FBUyxFQUFDLCtCQURaO0FBRUUsTUFBQSxJQUFJLEVBQUMsR0FGUDtBQUdFLE1BQUEsT0FBTyxFQUFFLGlCQUFBSyxDQUFDLEVBQUk7QUFDWkEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FSLFFBQUFBLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDUCxLQUFSLENBQVI7QUFDRDtBQU5ILE9BUUcsd0NBQXNCTyxNQUFNLENBQUNQLEtBQTdCLENBUkgsQ0FKRixFQWFPLEdBYlAsZUFjRTtBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLE9BQW9DTyxNQUFNLENBQUNDLEtBQTNDLENBZEYsQ0FEZ0I7QUFBQSxHQUFsQixDQXBCSixDQUZGLENBREYsQ0FERjtBQThDRDs7QUFFRGQsZ0JBQWdCLENBQUNlLFNBQWpCLEdBQTZCO0FBQzNCYixFQUFBQSxLQUFLLEVBQUVjLG1CQUFVQyxNQUFWLENBQWlCQyxVQURHO0FBRTNCZixFQUFBQSxRQUFRLEVBQUVhLG1CQUFVRyxJQUFWLENBQWVELFVBRkU7QUFHM0JkLEVBQUFBLFFBQVEsRUFBRVksbUJBQVVHLElBQVYsQ0FBZUQsVUFIRTtBQUkzQmIsRUFBQUEsT0FBTyxFQUFFVyxtQkFBVUksT0FBVixDQUFrQkMsaUJBQWxCLEVBQThCSCxVQUpaO0FBSzNCakIsRUFBQUEsU0FBUyxFQUFFZSxtQkFBVUM7QUFMTSxDQUE3QjtlQVFlakIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEZhY2V0VmFsdWUgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0RmlsdGVyVmFsdWVEaXNwbGF5IH0gZnJvbSBcIi4vdmlldy1oZWxwZXJzXCI7XG5pbXBvcnQgeyBhcHBlbmRDbGFzc05hbWUgfSBmcm9tIFwiLi92aWV3LWhlbHBlcnNcIjtcblxuZnVuY3Rpb24gU2luZ2xlTGlua3NGYWNldCh7IGNsYXNzTmFtZSwgbGFiZWwsIG9uUmVtb3ZlLCBvblNlbGVjdCwgb3B0aW9ucyB9KSB7XG4gIGNvbnN0IHZhbHVlID0gb3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKS5tYXAobyA9PiBvLnZhbHVlKVswXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXBwZW5kQ2xhc3NOYW1lKFwic3VpLWZhY2V0XCIsIGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktZmFjZXRfX3RpdGxlXCI+e2xhYmVsfTwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3VpLXNpbmdsZS1vcHRpb24tZmFjZXRcIj5cbiAgICAgICAgICB7dmFsdWUgJiYgKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1aS1zaW5nbGUtb3B0aW9uLWZhY2V0X19zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICB7Z2V0RmlsdGVyVmFsdWVEaXNwbGF5KHZhbHVlKX17XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1aS1zaW5nbGUtb3B0aW9uLWZhY2V0X19yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshdmFsdWUgJiZcbiAgICAgICAgICAgIG9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1aS1zaW5nbGUtb3B0aW9uLWZhY2V0X19pdGVtXCJcbiAgICAgICAgICAgICAgICBrZXk9e2dldEZpbHRlclZhbHVlRGlzcGxheShvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1aS1zaW5nbGUtb3B0aW9uLWZhY2V0X19saW5rXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0KG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtnZXRGaWx0ZXJWYWx1ZURpc3BsYXkob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1aS1mYWNldF9fY291bnRcIj57b3B0aW9uLmNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNpbmdsZUxpbmtzRmFjZXQucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKEZhY2V0VmFsdWUpLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTGlua3NGYWNldDtcbiJdfQ==