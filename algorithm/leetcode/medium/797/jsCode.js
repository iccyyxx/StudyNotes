/* *
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    // 搜索+记录路径
    /*  t 存储暂时的路径
        ansArray 存储答案
        均为数组 */
    var t = [], ansArray = [];
    var dfs = function (num) {
        // 记录路径
        t.push(num);
        // 判断是否到达终点
        if (num === graph.length - 1) {
            /*  添加答案,两种方法
                nsArray.push(t.slice());
                ansArray.push([...t]); */
            ansArray.push([...t]);
            // 返回上一个状态
            t.pop();
            return;
        }
        // 遍历该节点的每一条边
        for (var i = 0; i < graph[num].length; i++) {
            dfs(graph[num][i]);
        }
        t.pop();
    }
    // 从起点开始搜索
    dfs(0);
    return ansArray;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));

/*
输入：graph = [[1,2],[3],[3],[]]
输出：[[0,1,3],[0,2,3]]
解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/all-paths-from-source-to-target
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

