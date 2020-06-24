/**
 * @msg 判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
export function isUrl(str) {
  return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(
    str
  );
}
