/**
 * @msg // 根据时间,返回当前时间的星期.
 * @param {time:时间戳 || 时间}
 * @return {String || Number}
 */
export function getWeek(time) {
  if (typeof time !== "object" && typeof time !== "number") {
    throw new Error("传入类型不对, 必须是 new Date() 或者 时间戳 (数字类型)");
  }
  try {
    if (typeof time === "number" && time.toString().length === 13)
      return switchingTime(time);
    else if (typeof time === "object" && typeof time.getTime() === "number")
      return switchingTime(time);
  } catch (err) {
    throw new Error(
      `请检查您的传入的参数,必须是 new Date() 或者 时间戳 (数字类型 number)`
    );
  }
}
function switchingTime(time) {
  let timeDate;
  const ENUM = {
    0: "星期日",
    1: "星期一",
    2: "星期二",
    3: "星期三",
    4: "星期四",
    5: "星期五",
    6: "星期六",
  };
  if (typeof time === "number") timeDate = new Date(time);
  else timeDate = time;
  const weekNum = new Date(
    `${timeDate.getMonth() + 1}/${timeDate.getDate()}/${timeDate.getFullYear()}`
  ).getDay();
  return ENUM[weekNum];
}
