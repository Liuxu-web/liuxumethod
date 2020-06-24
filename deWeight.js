/**
 * @msg // 数组去重
 * @param {arr: Array}
 * @return {function}
 */
export function deWeight(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  // return [...new Set(arr)];
}
