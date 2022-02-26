# 分析

从左往右，边扫边计算 `L` 和 `R` 的个数 `c1`  和`c2`

如果 `c1==c2` ,则 `ans` 加一。

然后继续扫描至结束，`ans` 就是答案。

## 初始版

```js
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    var c1 = 0, c2 = 0, ans = 0;
    for (var i in s) {
        if (s[i] == "L") c1++;
        else c2++;
        if (c1 == c2) {
            ans++;
        }
    }
    return ans;
};
```

## 改进版

```js
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    var c1 = 0, c2 = 0, ans = 0;
    for (var i in s) {
        s[i] == "L" ? c1++ : c2++;
        if (c1 == c2) {
            ans++;
        }
    }
    return ans;
};
```

## 官方题解

```js
var balancedStringSplit = function (s) {
    var d = 0, ans = 0;
    for (var i in s) {
        s[i] == 'L' ? ++d : --d;
        if (d == 0) {
            ans++;
        }
    }
    return ans;
};
```

