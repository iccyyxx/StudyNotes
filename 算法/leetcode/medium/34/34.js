/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var l = 0, r = nums.length - 1, mid = parseInt((l + r) / 2);
  var flag = 0;
  while (l <= r) {
    mid = parseInt((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else if (nums[mid] > target) r = mid - 1;
    else if (nums[mid] == target) {
      while (nums[l] != target)
        l++;
      while (nums[r] != target)
        r--;
      flag = 1;
      break;
    }
  }
  return flag ? [l, r] : [-1, -1];
};
var nums = [0], target = 0;
console.log(searchRange(nums, target));