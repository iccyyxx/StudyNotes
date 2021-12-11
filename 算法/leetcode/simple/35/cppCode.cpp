#include <iostream>
#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int l = 0, r = nums.size(), mid = (l + r) / 2;
        while (l < r)
        {
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] > target)
                r = mid;
            else if (nums[mid] < target)
                l = mid + 1;
            mid = (l + r) / 2;
        }
        return l;
    }
};
int main()
{
    Solution s;
    vector<int> nums;
    int target;
    nums = {1, 3};
    target = 2;
    cout << s.searchInsert(nums, target) << endl;
}