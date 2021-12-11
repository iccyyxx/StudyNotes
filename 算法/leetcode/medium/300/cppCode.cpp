#include <iostream>
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    /* 动态规划  时间复杂度 O(n^2)*/
    /* int lengthOfLIS(vector<int> &nums)
    {
        int dp[nums.size() + 1];
        int ans = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            dp[i] = 1;
            for (int j = 0; j < i; j++)
            {
                if (nums[j] < nums[i])
                    dp[i] = max(dp[i], dp[j] + 1);
            }
            ans = max(ans, dp[i]);
        }
        return ans;
    } */

    /* 动态规划 + 二分 时间复杂度 O(log n)*/
    int lengthOfLIS(vector<int> &nums)
    {
        vector<int> t;
        for (int i = 0; i < nums.size(); i++)
        {
            // 如果 t 为空，或者 nums[i] 最大时，直接插入数组 t
            if (t.empty() || nums[i] > t[t.size() - 1])
                t.push_back(nums[i]);
            else
            {
                int l = 0, r = t.size() - 1, mid = (l + r) / 2;
                while (l < r)
                {
                    if (t[mid] < nums[i])
                        l = mid + 1;
                    else if (t[mid] > nums[i])
                        r = mid;
                    else
                    {
                        r = mid;
                        break;
                    }
                    mid = (l + r) / 2;
                }
                t[r] = nums[i];
            }
        }
        return t.size();
    }
};

int main()
{
    Solution solution;
    vector<int> nums;
    nums = {4, 10, 4, 3, 8, 9};
    cout << solution.lengthOfLIS(nums) << endl;
}