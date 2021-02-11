"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FieldValue = _interopRequireDefault(require("./FieldValue"));

var _default = _propTypes.default.shape({
  // Beginning of the range, like 1
  from: _FieldValue.default,
  // A unique name for this range, used for display
  name: _propTypes.default.string.isRequired,
  // End of the range, like 100
  to: _FieldValue.default
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GaWx0ZXJWYWx1ZVJhbmdlLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsInNoYXBlIiwiZnJvbSIsIkZpZWxkVmFsdWUiLCJuYW1lIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7ZUFFZUEsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDN0I7QUFDQUMsRUFBQUEsSUFBSSxFQUFFQyxtQkFGdUI7QUFHN0I7QUFDQUMsRUFBQUEsSUFBSSxFQUFFSixtQkFBVUssTUFBVixDQUFpQkMsVUFKTTtBQUs3QjtBQUNBQyxFQUFBQSxFQUFFLEVBQUVKO0FBTnlCLENBQWhCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRmllbGRWYWx1ZSBmcm9tIFwiLi9GaWVsZFZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BUeXBlcy5zaGFwZSh7XG4gIC8vIEJlZ2lubmluZyBvZiB0aGUgcmFuZ2UsIGxpa2UgMVxuICBmcm9tOiBGaWVsZFZhbHVlLFxuICAvLyBBIHVuaXF1ZSBuYW1lIGZvciB0aGlzIHJhbmdlLCB1c2VkIGZvciBkaXNwbGF5XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLy8gRW5kIG9mIHRoZSByYW5nZSwgbGlrZSAxMDBcbiAgdG86IEZpZWxkVmFsdWVcbn0pO1xuIl19