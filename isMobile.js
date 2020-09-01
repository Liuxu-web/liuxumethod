/**
 * @msg 查看当前环境是否是PC端
 * @param {null}
 * @return {boolean}
 */
// 是否是PC端
export function isMobile() {
  return !navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);
}
