/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var s = 0, e = matrix.length - 1, mid;
  while (s <= e) {
    mid = parseInt((s + e) / 2);
    if (matrix[mid][0] == target) return true;
    else if (matrix[mid][0] < target) s = mid;
    else if (matrix[mid][0] > target) e = mid - 1;
  }
};
var matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13;
console.log(searchMatrix(matrix, target));