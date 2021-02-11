"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _LayoutSidebar = _interopRequireDefault(require("./LayoutSidebar"));

var _viewHelpers = require("../view-helpers");

function Layout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      header = _ref.header,
      bodyContent = _ref.bodyContent,
      bodyFooter = _ref.bodyFooter,
      bodyHeader = _ref.bodyHeader,
      sideContent = _ref.sideContent;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _viewHelpers.appendClassName)("sui-layout", className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-header__inner"
  }, header)), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-body__inner"
  }, /*#__PURE__*/_react.default.createElement(_LayoutSidebar.default, {
    className: "sui-layout-sidebar"
  }, sideContent), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-main-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-main-header__inner"
  }, bodyHeader)), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-main-body"
  }, children || bodyContent), /*#__PURE__*/_react.default.createElement("div", {
    className: "sui-layout-main-footer"
  }, bodyFooter)))));
}

Layout.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  header: _propTypes.default.node,
  bodyContent: _propTypes.default.node,
  bodyFooter: _propTypes.default.node,
  bodyHeader: _propTypes.default.node,
  sideContent: _propTypes.default.node
};
var _default = Layout;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImhlYWRlciIsImJvZHlDb250ZW50IiwiYm9keUZvb3RlciIsImJvZHlIZWFkZXIiLCJzaWRlQ29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FRRztBQUFBLE1BUERDLFNBT0MsUUFQREEsU0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLFdBSUMsUUFKREEsV0FJQztBQUFBLE1BSERDLFVBR0MsUUFIREEsVUFHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQztBQUNELHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUUsa0NBQWdCLFlBQWhCLEVBQThCTixTQUE5QjtBQUFoQixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTJDRSxNQUEzQyxDQURGLENBREYsZUFJRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDZCQUFDLHNCQUFEO0FBQWUsSUFBQSxTQUFTLEVBQUM7QUFBekIsS0FDR0ksV0FESCxDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBZ0RELFVBQWhELENBREYsQ0FERixlQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSixRQUFRLElBQUlFLFdBRGYsQ0FKRixlQU9FO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF5Q0MsVUFBekMsQ0FQRixDQUpGLENBREYsQ0FKRixDQURGO0FBdUJEOztBQUVETCxNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakJQLEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVDLE1BREo7QUFFakJSLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVFLElBRkg7QUFHakJSLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVFLElBSEQ7QUFJakJQLEVBQUFBLFdBQVcsRUFBRUssbUJBQVVFLElBSk47QUFLakJOLEVBQUFBLFVBQVUsRUFBRUksbUJBQVVFLElBTEw7QUFNakJMLEVBQUFBLFVBQVUsRUFBRUcsbUJBQVVFLElBTkw7QUFPakJKLEVBQUFBLFdBQVcsRUFBRUUsbUJBQVVFO0FBUE4sQ0FBbkI7ZUFVZVgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExheW91dFNpZGViYXIgZnJvbSBcIi4vTGF5b3V0U2lkZWJhclwiO1xuaW1wb3J0IHsgYXBwZW5kQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL3ZpZXctaGVscGVyc1wiO1xuXG5mdW5jdGlvbiBMYXlvdXQoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBoZWFkZXIsXG4gIGJvZHlDb250ZW50LFxuICBib2R5Rm9vdGVyLFxuICBib2R5SGVhZGVyLFxuICBzaWRlQ29udGVudFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXthcHBlbmRDbGFzc05hbWUoXCJzdWktbGF5b3V0XCIsIGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktbGF5b3V0LWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1sYXlvdXQtaGVhZGVyX19pbm5lclwiPntoZWFkZXJ9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLWxheW91dC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLWxheW91dC1ib2R5X19pbm5lclwiPlxuICAgICAgICAgIDxMYXlvdXRTaWRlYmFyIGNsYXNzTmFtZT1cInN1aS1sYXlvdXQtc2lkZWJhclwiPlxuICAgICAgICAgICAge3NpZGVDb250ZW50fVxuICAgICAgICAgIDwvTGF5b3V0U2lkZWJhcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1aS1sYXlvdXQtbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktbGF5b3V0LW1haW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLWxheW91dC1tYWluLWhlYWRlcl9faW5uZXJcIj57Ym9keUhlYWRlcn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWktbGF5b3V0LW1haW4tYm9keVwiPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4gfHwgYm9keUNvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VpLWxheW91dC1tYWluLWZvb3RlclwiPntib2R5Rm9vdGVyfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgYm9keUNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBib2R5Rm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgYm9keUhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHNpZGVDb250ZW50OiBQcm9wVHlwZXMubm9kZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19