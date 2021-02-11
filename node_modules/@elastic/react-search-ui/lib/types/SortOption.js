"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var DIRECTIONS = ["asc", "desc", ""];

var SortOption = _propTypes.default.shape({
  // A display name, like "Name"
  name: _propTypes.default.string,
  // A field name, like "name".
  value: _propTypes.default.string,
  // asc or desc
  direction: _propTypes.default.oneOf(["asc", "desc", ""])
});

SortOption.create = function (_ref) {
  var name = _ref.name,
      value = _ref.value,
      direction = _ref.direction;

  if (!DIRECTIONS.includes(direction)) {
    direction = "";
  }

  return {
    name: name,
    value: value,
    direction: direction
  };
};

var _default = SortOption;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Tb3J0T3B0aW9uLmpzIl0sIm5hbWVzIjpbIkRJUkVDVElPTlMiLCJTb3J0T3B0aW9uIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJuYW1lIiwic3RyaW5nIiwidmFsdWUiLCJkaXJlY3Rpb24iLCJvbmVPZiIsImNyZWF0ZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixFQUFoQixDQUFuQjs7QUFDQSxJQUFNQyxVQUFVLEdBQUdDLG1CQUFVQyxLQUFWLENBQWdCO0FBQ2pDO0FBQ0FDLEVBQUFBLElBQUksRUFBRUYsbUJBQVVHLE1BRmlCO0FBR2pDO0FBQ0FDLEVBQUFBLEtBQUssRUFBRUosbUJBQVVHLE1BSmdCO0FBS2pDO0FBQ0FFLEVBQUFBLFNBQVMsRUFBRUwsbUJBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixFQUFoQixDQUFoQjtBQU5zQixDQUFoQixDQUFuQjs7QUFTQVAsVUFBVSxDQUFDUSxNQUFYLEdBQW9CLGdCQUFxQztBQUFBLE1BQTFCTCxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxNQUFwQkUsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUN2RCxNQUFJLENBQUNQLFVBQVUsQ0FBQ1UsUUFBWCxDQUFvQkgsU0FBcEIsQ0FBTCxFQUFxQztBQUNuQ0EsSUFBQUEsU0FBUyxHQUFHLEVBQVo7QUFDRDs7QUFFRCxTQUFPO0FBQ0xILElBQUFBLElBQUksRUFBSkEsSUFESztBQUVMRSxJQUFBQSxLQUFLLEVBQUxBLEtBRks7QUFHTEMsSUFBQUEsU0FBUyxFQUFUQTtBQUhLLEdBQVA7QUFLRCxDQVZEOztlQVllTixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBESVJFQ1RJT05TID0gW1wiYXNjXCIsIFwiZGVzY1wiLCBcIlwiXTtcbmNvbnN0IFNvcnRPcHRpb24gPSBQcm9wVHlwZXMuc2hhcGUoe1xuICAvLyBBIGRpc3BsYXkgbmFtZSwgbGlrZSBcIk5hbWVcIlxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBBIGZpZWxkIG5hbWUsIGxpa2UgXCJuYW1lXCIuXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyBhc2Mgb3IgZGVzY1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXCJhc2NcIiwgXCJkZXNjXCIsIFwiXCJdKVxufSk7XG5cblNvcnRPcHRpb24uY3JlYXRlID0gZnVuY3Rpb24oeyBuYW1lLCB2YWx1ZSwgZGlyZWN0aW9uIH0pIHtcbiAgaWYgKCFESVJFQ1RJT05TLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICBkaXJlY3Rpb24gPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHZhbHVlLFxuICAgIGRpcmVjdGlvblxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydE9wdGlvbjtcbiJdfQ==