"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FieldValue = _interopRequireDefault(require("./FieldValue"));

var _default = _propTypes.default.shape({
  from: _FieldValue.default,
  name: _propTypes.default.string.isRequired,
  to: _FieldValue.default
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GaWx0ZXJWYWx1ZVJhbmdlLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInNoYXBlIiwiZnJvbSIsIkZpZWxkVmFsdWUiLCJuYW1lIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7ZUFFZUEsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDN0JDLEVBQUFBLElBQUksRUFBRUMsbUJBRHVCO0FBRTdCQyxFQUFBQSxJQUFJLEVBQUVKLG1CQUFVSyxNQUFWLENBQWlCQyxVQUZNO0FBRzdCQyxFQUFBQSxFQUFFLEVBQUVKO0FBSHlCLENBQWhCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRmllbGRWYWx1ZSBmcm9tIFwiLi9GaWVsZFZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BUeXBlcy5zaGFwZSh7XG4gIGZyb206IEZpZWxkVmFsdWUsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IEZpZWxkVmFsdWVcbn0pO1xuIl19