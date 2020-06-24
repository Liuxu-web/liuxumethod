/**

 * @msg 正则验证手机号
 * @param {String|Number}
 * @return {Boolean}
 */
export function isPhone(str) {
  return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(
    str
  );
}
