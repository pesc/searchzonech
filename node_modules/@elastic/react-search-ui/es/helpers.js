// LÒpez => Lopez
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
export var accentFold = function accentFold() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImFjY2VudEZvbGQiLCJzdHIiLCJub3JtYWxpemUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsT0FBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUNDLEdBQUQsdUVBQU8sRUFBUDtBQUFBLFNBQ3hCQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxLQUFkLEVBQXFCQyxPQUFyQixDQUE2QixrQkFBN0IsRUFBaUQsRUFBakQsQ0FEd0I7QUFBQSxDQUFuQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEzDknBleiA9PiBMb3BlelxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL25vcm1hbGl6ZVxuZXhwb3J0IGNvbnN0IGFjY2VudEZvbGQgPSAoc3RyID0gXCJcIikgPT5cbiAgc3RyLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKTtcbiJdfQ==