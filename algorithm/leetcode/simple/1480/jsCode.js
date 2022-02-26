/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    var sum = [];
    sum[0] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        sum[i] = nums[i] + sum[i - 1];
    }
    return sum;
};
numb = [3, 1, 2, 10, 1];
console.log(runningSum(numb));
/*
输入：nums = [3,1,2,10,1]
输出：[3,4,6,16,17]
*/