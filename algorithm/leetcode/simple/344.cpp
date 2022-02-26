/* 执行用时：
8 ms
, 在所有 C++ 提交中击败了
99.38%
的用户
内存消耗：
22.7 MB
, 在所有 C++ 提交中击败了
17.38%
的用户
通过测试用例：
477 / 477
 */
#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    void reverseString(vector<char> &s)
    {
        char t;
        for (int i = 0; i <= s.size() / 2; i++)
        {
            t = s[i];
            s[i] = s[s.size() - i - 1];
            s[s.size() - i - 1] = t;
        }
    }
};
int main()
{
    Solution solution;
    vector<char> s;
    s = {'h', 'e', 'l', 'l', 'o'};
    solution.reverseString(s);
}