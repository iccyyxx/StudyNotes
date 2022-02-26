# 分析

- 题目要找出一串字符串里最后一个单词，可能有以下几种情况：

- 最后以空格结尾
- 最后没有空格结尾

## 解题思路
- 判断最后一个单词的起点和终点即可

- 双指针没有直接计数来得快

- 直接反向遍历，遇到第一个字母便开始计数，开始计数后遇到第一个空格就结束，计数的答案便为最后一个单词的长度

# Code

```c++
class Solution
{
public:
    int lengthOfLastWord(string s)
    {
        //计数
        int ans = 0;
        //反向遍历
        for (int i = s.length() - 1; i >= 0; i--)
        {
            // 判断计数的起点
            if ((s[i] >= 'a' && s[i] <= 'z') || s[i] >= 'A' && s[i] <= 'Z')
                ans++;
            //判断终点
            else if (s[i] == ' ' && ans != 0)
                break;
        }
        return ans;
    }
};
```



