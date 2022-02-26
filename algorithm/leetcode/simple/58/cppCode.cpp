#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int lengthOfLastWord(string s)
    {
        int ans = 0;
        for (int i = s.length() - 1; i >= 0; i--)
        {
            if ((s[i] >= 'a' && s[i] <= 'z') || s[i] >= 'A' && s[i] <= 'Z')
                ans++;
            else if (s[i] == ' ' && ans != 0)
                break;
        }
        return ans;
    }
};
int main()
{
    string s = "a";
    Solution Solution;
    cout << Solution.lengthOfLastWord(s);
}