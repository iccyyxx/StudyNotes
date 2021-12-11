#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int maxSubArray(vector<int> &nums)
    {
        int ans = nums[0];
        int t = 0;
        for (int i = 1; i < nums.size(); i++)
        {
            if (ans + nums[i] < ans)
            {
                t += nums[i];
            }
        }
    }
};
int main()
{
    Solution solution;
    vector<int> nums;
    nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << solution.maxSubArray(nums);
}