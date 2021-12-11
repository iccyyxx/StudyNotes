/* 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
相关标签
记忆化搜索
数学
动态规划

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn854d/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int climbStairs(int n)
    {
        vector<int> dp;
        dp.push_back(1);
        dp.push_back(1);
        for (int i = 2; i <= n; i++)
        {
            dp.push_back(0);
            if (i - 1 >= 0)
                dp[i] += dp[i - 1];
            if (i - 2 >= 0)
                dp[i] += dp[i - 2];
        }
        return dp[n];
    }
};
int main()
{
    Solution solution;
    int n;
    n = 4;
    cout << solution.climbStairs(n);
}