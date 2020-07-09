/**
 * @msg 改变对象键值
 * @param {数组 || 对象  && 指定改变的键值 对象}
 * @return {Boolean}
 */
// changeKey(对象或者数组, {修改前的键值 : "要修改成的键值"})
export function changeKey(arr, keyMap) {
  let temString = JSON.stringify(arr);

  for (let key in keyMap) {
    const reg = new RegExp(`"${key}":`, "g");
    console.log(reg);
    temString = temString.replace(reg, `"${keyMap[key]}":`);
  }
  return JSON.parse(temString);
}
