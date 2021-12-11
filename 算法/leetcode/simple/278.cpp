#include <bits/stdc++.h>
using namespace std;
bool is[] = {true};
bool isBadVersion(int n)
{
    return is[n];
}
class Solution
{
public:
    int firstBadVersion(int n)
    {
        // if (n == 1)
        //     return 1;
        long long l = 1, r = n;
        while (l < r)
        {
            long long mid = (l + r) / 2;
            if (isBadVersion(mid) == true)
            {
                if (isBadVersion(mid - 1) == false)
                    return mid;
                else
                    r = mid;
            }
            else if (isBadVersion(mid) == false)
            {
                if (isBadVersion(mid + 1) == true)
                    return mid + 1;
                else
                    l = mid;
            }
        }
        return n;
    }
};

int main()
{
    Solution solution;
    vector<int> v;
    int target, n;
    v = {-1};
    target = 2;
    n = 1;
    cout << solution.firstBadVersion(n);
}