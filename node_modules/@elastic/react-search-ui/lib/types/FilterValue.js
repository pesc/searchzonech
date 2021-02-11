"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FilterValueValue = _interopRequireDefault(require("./FilterValueValue"));

var _FilterValueRange = _interopRequireDefault(require("./FilterValueRange"));

var _default = _propTypes.default.oneOfType([_FilterValueRange.default, _FilterValueValue.default]);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GaWx0ZXJWYWx1ZS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJGaWx0ZXJWYWx1ZVJhbmdlIiwiRmlsdGVyVmFsdWVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O2VBRWVBLG1CQUFVQyxTQUFWLENBQW9CLENBQUNDLHlCQUFELEVBQW1CQyx5QkFBbkIsQ0FBcEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBGaWx0ZXJWYWx1ZVZhbHVlIGZyb20gXCIuL0ZpbHRlclZhbHVlVmFsdWVcIjtcbmltcG9ydCBGaWx0ZXJWYWx1ZVJhbmdlIGZyb20gXCIuL0ZpbHRlclZhbHVlUmFuZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgUHJvcFR5cGVzLm9uZU9mVHlwZShbRmlsdGVyVmFsdWVSYW5nZSwgRmlsdGVyVmFsdWVWYWx1ZV0pO1xuIl19