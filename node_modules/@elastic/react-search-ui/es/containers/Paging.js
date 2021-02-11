import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from "prop-types";
import { withSearch } from "..";
import { Paging } from "@elastic/react-search-ui-views";
export function PagingContainer(_ref) {
  var className = _ref.className,
      current = _ref.current,
      resultsPerPage = _ref.resultsPerPage,
      setCurrent = _ref.setCurrent,
      totalPages = _ref.totalPages,
      view = _ref.view,
      rest = _objectWithoutProperties(_ref, ["className", "current", "resultsPerPage", "setCurrent", "totalPages", "view"]);

  if (totalPages === 0) return null;
  var View = view || Paging;
  return View(_objectSpread({
    className: className,
    current: current,
    resultsPerPage: resultsPerPage,
    totalPages: totalPages,
    onChange: setCurrent
  }, rest));
}
PagingContainer.propTypes = {
  // Props
  className: PropTypes.string,
  view: PropTypes.func,
  // State
  current: PropTypes.number.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  // Action
  setCurrent: PropTypes.func.isRequired
};
export default withSearch(function (_ref2) {
  var current = _ref2.current,
      resultsPerPage = _ref2.resultsPerPage,
      totalPages = _ref2.totalPages,
      setCurrent = _ref2.setCurrent;
  return {
    current: current,
    resultsPerPage: resultsPerPage,
    totalPages: totalPages,
    setCurrent: setCurrent
  };
})(PagingContainer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1BhZ2luZy5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJ3aXRoU2VhcmNoIiwiUGFnaW5nIiwiUGFnaW5nQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY3VycmVudCIsInJlc3VsdHNQZXJQYWdlIiwic2V0Q3VycmVudCIsInRvdGFsUGFnZXMiLCJ2aWV3IiwicmVzdCIsIlZpZXciLCJvbkNoYW5nZSIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUVBLFNBQVNDLFVBQVQsUUFBMkIsSUFBM0I7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGdDQUF2QjtBQUVBLE9BQU8sU0FBU0MsZUFBVCxPQVFKO0FBQUEsTUFQREMsU0FPQyxRQVBEQSxTQU9DO0FBQUEsTUFOREMsT0FNQyxRQU5EQSxPQU1DO0FBQUEsTUFMREMsY0FLQyxRQUxEQSxjQUtDO0FBQUEsTUFKREMsVUFJQyxRQUpEQSxVQUlDO0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsSUFFQyxRQUZEQSxJQUVDO0FBQUEsTUFERUMsSUFDRjs7QUFDRCxNQUFJRixVQUFVLEtBQUssQ0FBbkIsRUFBc0IsT0FBTyxJQUFQO0FBRXRCLE1BQU1HLElBQUksR0FBR0YsSUFBSSxJQUFJUCxNQUFyQjtBQUVBLFNBQU9TLElBQUk7QUFDVFAsSUFBQUEsU0FBUyxFQUFUQSxTQURTO0FBRVRDLElBQUFBLE9BQU8sRUFBUEEsT0FGUztBQUdUQyxJQUFBQSxjQUFjLEVBQWRBLGNBSFM7QUFJVEUsSUFBQUEsVUFBVSxFQUFWQSxVQUpTO0FBS1RJLElBQUFBLFFBQVEsRUFBRUw7QUFMRCxLQU1ORyxJQU5NLEVBQVg7QUFRRDtBQUVEUCxlQUFlLENBQUNVLFNBQWhCLEdBQTRCO0FBQzFCO0FBQ0FULEVBQUFBLFNBQVMsRUFBRUosU0FBUyxDQUFDYyxNQUZLO0FBRzFCTCxFQUFBQSxJQUFJLEVBQUVULFNBQVMsQ0FBQ2UsSUFIVTtBQUkxQjtBQUNBVixFQUFBQSxPQUFPLEVBQUVMLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJDLFVBTEE7QUFNMUJYLEVBQUFBLGNBQWMsRUFBRU4sU0FBUyxDQUFDZ0IsTUFBVixDQUFpQkMsVUFOUDtBQU8xQlQsRUFBQUEsVUFBVSxFQUFFUixTQUFTLENBQUNnQixNQUFWLENBQWlCQyxVQVBIO0FBUTFCO0FBQ0FWLEVBQUFBLFVBQVUsRUFBRVAsU0FBUyxDQUFDZSxJQUFWLENBQWVFO0FBVEQsQ0FBNUI7QUFZQSxlQUFlaEIsVUFBVSxDQUN2QjtBQUFBLE1BQUdJLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlDLGNBQVosU0FBWUEsY0FBWjtBQUFBLE1BQTRCRSxVQUE1QixTQUE0QkEsVUFBNUI7QUFBQSxNQUF3Q0QsVUFBeEMsU0FBd0NBLFVBQXhDO0FBQUEsU0FBMEQ7QUFDeERGLElBQUFBLE9BQU8sRUFBUEEsT0FEd0Q7QUFFeERDLElBQUFBLGNBQWMsRUFBZEEsY0FGd0Q7QUFHeERFLElBQUFBLFVBQVUsRUFBVkEsVUFId0Q7QUFJeERELElBQUFBLFVBQVUsRUFBVkE7QUFKd0QsR0FBMUQ7QUFBQSxDQUR1QixDQUFWLENBT2JKLGVBUGEsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgd2l0aFNlYXJjaCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUGFnaW5nIH0gZnJvbSBcIkBlbGFzdGljL3JlYWN0LXNlYXJjaC11aS12aWV3c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFnaW5nQ29udGFpbmVyKHtcbiAgY2xhc3NOYW1lLFxuICBjdXJyZW50LFxuICByZXN1bHRzUGVyUGFnZSxcbiAgc2V0Q3VycmVudCxcbiAgdG90YWxQYWdlcyxcbiAgdmlldyxcbiAgLi4ucmVzdFxufSkge1xuICBpZiAodG90YWxQYWdlcyA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgVmlldyA9IHZpZXcgfHwgUGFnaW5nO1xuXG4gIHJldHVybiBWaWV3KHtcbiAgICBjbGFzc05hbWUsXG4gICAgY3VycmVudCxcbiAgICByZXN1bHRzUGVyUGFnZSxcbiAgICB0b3RhbFBhZ2VzLFxuICAgIG9uQ2hhbmdlOiBzZXRDdXJyZW50LFxuICAgIC4uLnJlc3RcbiAgfSk7XG59XG5cblBhZ2luZ0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIC8vIFByb3BzXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlldzogUHJvcFR5cGVzLmZ1bmMsXG4gIC8vIFN0YXRlXG4gIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcmVzdWx0c1BlclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdG90YWxQYWdlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAvLyBBY3Rpb25cbiAgc2V0Q3VycmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaChcbiAgKHsgY3VycmVudCwgcmVzdWx0c1BlclBhZ2UsIHRvdGFsUGFnZXMsIHNldEN1cnJlbnQgfSkgPT4gKHtcbiAgICBjdXJyZW50LFxuICAgIHJlc3VsdHNQZXJQYWdlLFxuICAgIHRvdGFsUGFnZXMsXG4gICAgc2V0Q3VycmVudFxuICB9KVxuKShQYWdpbmdDb250YWluZXIpO1xuIl19