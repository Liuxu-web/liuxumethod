/**
 * @msg 判断是否为身份证号(二代省份证)
 * @param {String|Number}
 * @return {Boolean}
 */
export function isIdNumber(str) {
  return /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/.test(
    str
  );
}
