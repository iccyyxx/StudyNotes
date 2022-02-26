/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    // 用数组 c 次数每个数字要计算的次数
    // 初始化
    var c = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        c[i] = 0;
    }
    // ans 为要返回的答案
    var ans = 0;
    // 根据长度判断该数字要计算的次数
    for (var j = 1; j <= arr.length; j += 2) {
        for (var i = 0; i < arr.length; i++) {
            c[i] += j;
            if (i < j) c[i] += i - j + 1;
            if (arr.length - i < j) c[i] -= j - arr.length + i;
        }
    }
    // 计算答案
    for (var i = 0; i < arr.length; i++) {
        ans += c[i] * arr[i];
    }
    return ans;
};
var arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));

/*
输入：arr = [1,4,2,5,3]
输出：58
解释：所有奇数长度子数组和它们的和为：
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */