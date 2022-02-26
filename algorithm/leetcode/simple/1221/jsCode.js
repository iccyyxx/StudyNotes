/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    var d = 0, ans = 0;
    for (var i in s) {
        s[i] == 'L' ? ++d : --d;
        if (d == 0) {
            ans++;
        }
    }
    return ans;
};
s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));

