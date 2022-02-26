/* 
C++	2021/12/01 13:48	
29 / 29 个通过测试用例
状态：通过
执行用时: 12 ms
内存消耗: 9.2 MB
*/

#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    string reverseWords(string s)
    {
        int k = 0;
        char t;
        for (int i = 0; i < s.length(); i++)
        {
            if (s[i] == ' ' || i == s.length() - 1)
            {
                // 假设结尾是空格
                if (i == s.length() - 1)
                    i = i + 1;
                for (int j = 0; j < (i - k) / 2; j++)
                {
                    t = s[j + k];
                    s[j + k] = s[i - k - j - 1 + k];
                    s[i - k - j - 1 + k] = t;
                }
                k = i + 1;
            }
        }
        return s;
    }
};
int main()
{
    Solution solution;
    string s;
    s = "s take LeetCode contest";
    cout << solution.reverseWords(s);
}