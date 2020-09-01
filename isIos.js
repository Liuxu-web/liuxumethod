/**
 * @msg 创建元素方法
 * @param {null}
 * @return {boolean}
 */
export function isIOS() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
}
