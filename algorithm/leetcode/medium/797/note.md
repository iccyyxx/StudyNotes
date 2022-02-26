## 分析

- 题目就是要求**遍历并记录**有向无环图的从第一个点到最后一个点的**可行路径**
- 第一个点下标为 `0`,需要根据所给的数组`graph`的长度确定终点的索引`end`，`end = graph.length - 1 `
- 利用 `BFS` 从起点遍历，利用数组`t`记录目前路径，如果当前路径有到终点就将`t`加入答案数组`ansArray`里
- 难点大概是在目前路径的记录和返回上一个状态。

## !!

若要将`t`数组添加进`ansArray`应该这样写：`ansArray.push(t.slice());`

而不是`ansArray.push(t);`
