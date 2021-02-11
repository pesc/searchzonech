"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFieldValueWrapper = isFieldValueWrapper;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FieldValue = _interopRequireDefault(require("./FieldValue"));

var _default = _propTypes.default.shape({
  // A raw field value, like 'I am a raw result', or 2, or true
  raw: _FieldValue.default,
  // A snippet value contains a highlighted value. I.e., 'I <em>am</em> a raw
  // result'
  snippet: _propTypes.default.string
});

exports.default = _default;

function isFieldValueWrapper(object) {
  return object && (object.hasOwnProperty("raw") || object.hasOwnProperty("snippet"));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9GaWVsZFZhbHVlV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzaGFwZSIsInJhdyIsIkZpZWxkVmFsdWUiLCJzbmlwcGV0Iiwic3RyaW5nIiwiaXNGaWVsZFZhbHVlV3JhcHBlciIsIm9iamVjdCIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUE7O2VBRWVBLG1CQUFVQyxLQUFWLENBQWdCO0FBQzdCO0FBQ0FDLEVBQUFBLEdBQUcsRUFBRUMsbUJBRndCO0FBRzdCO0FBQ0E7QUFDQUMsRUFBQUEsT0FBTyxFQUFFSixtQkFBVUs7QUFMVSxDQUFoQixDOzs7O0FBUVIsU0FBU0MsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQzFDLFNBQ0VBLE1BQU0sS0FBS0EsTUFBTSxDQUFDQyxjQUFQLENBQXNCLEtBQXRCLEtBQWdDRCxNQUFNLENBQUNDLGNBQVAsQ0FBc0IsU0FBdEIsQ0FBckMsQ0FEUjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgRmllbGRWYWx1ZSBmcm9tIFwiLi9GaWVsZFZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BUeXBlcy5zaGFwZSh7XG4gIC8vIEEgcmF3IGZpZWxkIHZhbHVlLCBsaWtlICdJIGFtIGEgcmF3IHJlc3VsdCcsIG9yIDIsIG9yIHRydWVcbiAgcmF3OiBGaWVsZFZhbHVlLFxuICAvLyBBIHNuaXBwZXQgdmFsdWUgY29udGFpbnMgYSBoaWdobGlnaHRlZCB2YWx1ZS4gSS5lLiwgJ0kgPGVtPmFtPC9lbT4gYSByYXdcbiAgLy8gcmVzdWx0J1xuICBzbmlwcGV0OiBQcm9wVHlwZXMuc3RyaW5nXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmllbGRWYWx1ZVdyYXBwZXIob2JqZWN0KSB7XG4gIHJldHVybiAoXG4gICAgb2JqZWN0ICYmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJyYXdcIikgfHwgb2JqZWN0Lmhhc093blByb3BlcnR5KFwic25pcHBldFwiKSlcbiAgKTtcbn1cbiJdfQ==