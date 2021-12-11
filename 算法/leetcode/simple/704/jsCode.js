/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var l = 0, r = nums.length;
    while (l != r - 1) {
        var mid = parseInt((l + r) / 2);
        if (nums[l] == target) return l;
        if (nums[r] == target) return r;
        if (nums[mid] > target) r = mid;
        else if (nums[mid] < target) l = mid;
        else return mid;
    }
    if (nums[l] == target) return l;
    return -1;
};
var nums = [], target;
// nums = [-1, 0, 3, 5, 9, 12], target = 9;
nums = [5, 4], target = 4;
console.log(search(nums, target));