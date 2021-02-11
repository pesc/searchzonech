"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accentFold = void 0;

// LÒpez => Lopez
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
var accentFold = function accentFold() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

exports.accentFold = accentFold;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImFjY2VudEZvbGQiLCJzdHIiLCJub3JtYWxpemUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBQ0MsR0FBRCx1RUFBTyxFQUFQO0FBQUEsU0FDeEJBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLEtBQWQsRUFBcUJDLE9BQXJCLENBQTZCLGtCQUE3QixFQUFpRCxFQUFqRCxDQUR3QjtBQUFBLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTMOScGV6ID0+IExvcGV6XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbm9ybWFsaXplXG5leHBvcnQgY29uc3QgYWNjZW50Rm9sZCA9IChzdHIgPSBcIlwiKSA9PlxuICBzdHIubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpO1xuIl19