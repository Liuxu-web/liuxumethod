/**
 * @msg // 生成从minNum到maxNum的随机数
 * @param {minNum:最小数,maxNum:最大数}
 * @return {Number}
 */
export function randomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
}
