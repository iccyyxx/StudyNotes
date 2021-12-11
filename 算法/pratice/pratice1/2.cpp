#include <bits/stdc++.h>
using namespace std;
struct C
{
    int first = 0;
    int t;
    int d = 100008; //最小距离
    int end;
} cc[55];
int main()
{
    int n, m, c;
    scanf("%d%d%d", &n, &m, &c);
    int nums;
    int x;
    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &nums);
        while (nums--)
        {
            scanf("%d", &x);
            if (cc[x].first == 0)
            {
                cc[x].first = i;
                cc[x].t = i;
            }
            else
            {
                cc[x].d = min(cc[x].d, i - cc[x].t + 1);
                cc[x].t = i;
            }
        }
    }
    int ans = 0;
    for (int i = 1; i <= c; i++)
    {
        cc[i].end = cc[i].t;
        cc[i].d = min(cc[i].d, cc[i].first + n - cc[i].end + 1);
        if (cc[i].d <= m)
            ans++;
    }
    cout << ans << endl;
    return 0;
}