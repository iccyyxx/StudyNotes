#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        vector<int> v;
        k = k % nums.size();
        for (int i = -k; i < 0; i++)
        {
            v.push_back(nums[i + nums.size()]);
            cout << nums[i + nums.size()] << " ";
        }
        for (int i = 0; i < nums.size() - k; i++)
        {
            v.push_back(nums[i]);
            cout << nums[i] << ' ';
        }
        nums.clear();
        for (int i = 0; i < v.size(); i++)
        {
            nums.push_back(v[i]);
        }
    }
};
int main()
{
    Solution solution;
    vector<int> nums;
    int k;
    nums = {-1};
    k = 2;
    solution.rotate(nums, k);
}