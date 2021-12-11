#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    scanf("%d", &n);
    int v[300009];
    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &v[i]);
    }
    int q;
    scanf("%d", &q);
    int l, r, k, count = 0;
    while (q--)
    {
        count = 0;
        scanf("%d%d%d", &l, &r, &k);
        for (int i = l; i <= r; i++)
        {
            if (v[i] == k)
                count++;
        }
        printf("%d\n", count);
    }
}