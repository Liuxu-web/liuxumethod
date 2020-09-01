/**
 * @msg 获取非行内样式兼容
 * @param {ele:指定元素 , attr:要获取的样式}
 * @return {string}
 */
export function getComStyle(ele, attr) {
  return window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
}
