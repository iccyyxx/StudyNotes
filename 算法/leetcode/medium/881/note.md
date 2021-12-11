## javascript

```js
var numRescueBoats = function (people, limit) {
        people.sort(function (a, b) {
            return a - b;
        });
        var c = 0;
        for (var i = 0, j = people.length - 1; i <= j;) {
            // 如果最大值和最小值小于limit，则将最小值加进最大值
            if (people[j] + people[i] <= limit) {
                // 判断是否遍历结束
                i++;
            }
            j--;
            c++;
        }
        return c;
    };
```

## !!

JavaScript 的 sort（）是按照字符串排序，也就是按照 ASCII 码排序，不适用于数值排序，因此需要自定义sort。

```js
numbers.sort(function(a, b) {
  return a - b;
});
```

或者

```js
numbers.sort((a, b) => a - b);
```

