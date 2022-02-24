/**
 * @param {string} dominoes
 * @return {string}
 */
/** 
 * 思路
 * 每次找一L一R相互抵消，时间复杂度为O（n）
 * 双指针
 */
var pushDominoes = function (dominoes) {
  dominoes = [...dominoes];
  var len = dominoes.length;
  var cur = 0;
  for (var i = 0; i <= len - 1;) {
    if (dominoes[i] == 'L') {
      while (cur <= i)
        dominoes[cur++] = 'L';
      i = cur;
    }
    else if (dominoes[i] == 'R') {
      cur = i;
      var t = 1;
      while ((i + t) < len && dominoes[i + t] == '.')
        t++;
      if ((i + t < len) && (dominoes[i + t - 1] == '.')) {
        while (cur < len)
          dominoes[cur++] = 'R';
      }
      else if (i + t >= len)
        break;
      if (dominoes[i + t] == 'R') {
        while (t--)
          dominoes[++i] = 'R'
        cur = i;
      }
      else if (dominoes[i + t] == 'L') {
        cur = i + t;
        var r = cur;
        while (i + 1 <= r) {
          dominoes[i++] = 'R';
          dominoes[r--] = 'L';
        }
      }
      i = cur;
    }
    else i++;
  }
  return dominoes.join('');
};
console.log(pushDominoes("R"));