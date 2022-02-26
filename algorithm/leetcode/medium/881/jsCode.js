var numRescueBoats = function (people, limit) {
    people.sort(function (a, b) {
        return a - b;
    });
    var c = 0;
    for (var i = 0, j = people.length - 1; i <= j;) {
        // 如果最大值和最小值小于limit，则将最小值加进最大值
        if (people[j] + people[i] <= limit) {
            // 判断是否遍历结束
            people[j] += people[i];
            i++;
        }
        j--;
        c++;
    }
    return c;
};