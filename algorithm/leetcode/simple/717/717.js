/**
 * @param {number[]} bits
 * @return {boolean}
 */
/**
 * 思路
 * 感觉要数组转字符串？
 * 但是想想应该没有这么麻烦
 * emmm
 * O（n）可以解决，不知道有没有O（1）的解法，打算暴力了
 * 突然发现可以直接判断最后几位数
 * 最后的情况有可能是
 * true：0100 1100  0110 000 1000 0000
 * false：1110
 * 最后两位如果是00则为true
 * 如果最后一位是1则为false
 * 如果为10，则需要判断
 * 最后还是 O（n）
 *   */

var isOneBitCharacter = function (bits) {
  var flag = false;
  var len = bits.length;
  if (bits[len - 1] == 1) flag = false;
  else if ((!bits[len - 1]) && (!bits[len - 2])) flag = true;
  else {
    var pos = 3;
    while (bits[len - pos] != 0 && pos <= len) {
      pos++;
    }
    flag = (pos % 2 == 0 ? true : false);
  }
  return flag;
};