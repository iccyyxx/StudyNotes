// 双指针

#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &numbers, int target)
    {
        vector<int> ans;
        int i = 0, j = i + 1, sum = 0;
        while (j < numbers.size())
        {
            while ((numbers[i] + numbers[j] < target) && (i + 1 < j))
            {
                sum = numbers[i] + numbers[j];
                i++;
            }
            while ((numbers[i] + numbers[j] < target) && (j + 1 < numbers.size()))
            {
                sum = numbers[i] + numbers[j];
                j++;
            }

            while ((numbers[i] + numbers[j] > target) && (i + 1 < j))
            {
                sum = numbers[i] + numbers[j];
                j--;
            }
            if (numbers[i] + numbers[j] == target)
            {
                ans.push_back(i + 1);
                ans.push_back(j + 1);
                return ans;
            }
        }
        return ans;
    }
};

int main()
{
    Solution solution;
    vector<int> v;
    int target;
    v = {2, 7, 9, 11, 12, 13, 15, 16, 18};
    target = 26;
    solution.twoSum(v, target);
}