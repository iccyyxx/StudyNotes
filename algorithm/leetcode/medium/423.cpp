#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    map<char, int> m;
    for (int i = 0; i < s.size(); i++)
    {
        m[s[i]]++;
    }
    int ans[11];
    for (int i = 0; i < 11; i++)
    {
        ans[i] = 0;
    }
    if (m['w'] != 0)
    {
        ans[2] += m['w'];
        m['t'] -= m['w'];
        m['o'] -= m['w'];
        m['w'] = 0;
    }
    if (m['x'] != 0)
    {
        ans[6] += m['x'];
        m['i'] -= m['x'];
        m['s'] -= m['x'];
        m['x'] = 0;
    }
    if (m['s'] != 0)
    {
        ans[7] += m['s'];
        m['e'] -= m['s'] * 2;
        m['n'] -= m['s'];
        m['v'] -= m['s'];
        m['s'] = 0;
    }
    if (m['v'] != 0)
    {
        ans[5] += m['v'];
        m['f'] -= m['v'];
        m['i'] -= m['v'];
        m['e'] -= m['v'];
        m['v'] = 0;
    }
    if (m['z'] != 0)
    {
        ans[0] += m['z'];
        m['e'] -= m['z'];
        m['o'] -= m['z'];
        m['r'] -= m['z'];
        m['z'] = 0;
    }
    if (m['u'] != 0)
    {
        ans[4] += m['u'];
        m['f'] -= m['u'];
        m['o'] -= m['u'];
        m['r'] -= m['u'];
        m['u'] = 0;
    }
    if (m['o'] != 0)
    {
        ans[1] += m['o'];
        m['e'] -= m['o'];
        m['n'] -= m['o'];
        m['o'] = 0;
    }
    if (m['r'] != 0)
    {
        ans[3] += m['r'];
        m['e'] -= m['r'] * 2;
        m['h'] -= m['r'];
        m['t'] -= m['r'];
        m['r'] = 0;
    }
    if (m['h'] != 0)
    {
        ans[8] += m['h'];
        m['e'] -= m['h'];
        m['i'] -= m['h'];
        m['g'] -= m['h'];
        m['t'] -= m['h'];
        m['h'] = 0;
    }
    ans[9] += m['i'];
    string aa = "";
    for (int i = 0; i <= 9; i++)
    {
        while (ans[i]--)
        {
            aa += (i + '0');
        }
    }
    return 0;
}