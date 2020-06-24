/**
 * @msg // url地址参数 转换为对象
 * @param {url : string}
 * @return {object}
 */
export function urlParams(url) {
  const params = url.substring(url.indexOf("?") + 1);
  const paramsArr = params.split("&");
  const paramsObj = {};
  paramsArr.forEach((item, key) => {
    paramsObj[item.split("=")[0]] = item.split("=")[1];
  });
  return paramsObj;
}
