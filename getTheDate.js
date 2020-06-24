/**
 * @msg 根据时间戳,返回对应时间{2020-06-22}
 * @param {time:时间戳 || new Date(), pattern:模式, spaceMark:间隔符号}
 * @return {string}
 */
export function getTheDate(time, pattern = true, spaceMark) {
  if (typeof pattern !== "boolean") {
    spaceMark = pattern;
    pattern = true;
  }
  const S = spaceMark || "-",
    TIME = typeof time === "number" ? new Date(time) : time,
    YEAR = TIME.getFullYear(),
    MONTH = supplement(TIME.getMonth() + 1),
    DAY = supplement(TIME.getDate());
  switch (pattern) {
    case true:
      return YEAR + S + MONTH + S + DAY;
    default:
      return YEAR + "年" + MONTH + "月" + DAY + "日";
  }
}
function supplement(num) {
  const STR_NUM = num + "";
  if (STR_NUM.length <= 1) return STR_NUM.padStart(2, 0);
  return STR_NUM;
}
