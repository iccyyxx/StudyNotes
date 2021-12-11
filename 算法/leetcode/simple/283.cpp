// 计算 0 的个数，移除 0，最后遍历完再结尾补回0

#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int count = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            while (nums[i] == 0 && i < nums.size())
            {
                count++;
                nums.erase(nums.begin() + i);
            }
        }
        while (count--)
        {
            nums.push_back(0);
        }
    }
};
int main()
{
    Solution solution;
    vector<int> v;
    v = {0, 0, 1};
    solution.moveZeroes(v);
}