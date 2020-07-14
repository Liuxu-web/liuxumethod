/**
 * @msg 字符串去重空格的方法
 * @param {字符串 , type 1-前后空格，2-前空格，3-后空格}
 * @return {new 字符串}
 */
//
export function blank(str, type) {
  switch (type) {
    case 1:
      return str.replace(/(^\s*)|(\s*$)/g, '');
    case 2:
      return str.replace(/(^\s*)/g, '');
    case 3:
      return str.replace(/(\s*$)/g, '');
    default:
      return  str.replace(/\s+/g, '');
  }
}
