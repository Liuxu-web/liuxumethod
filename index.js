const context = require.context("./", true, /\.(js)$/);
const methods = {};
context.keys().forEach((filename) => {
  if (filename !== "./index.js") {
    Object.assign(methods, context(filename));
  }
});

//url地址参数 转换为对象
export const urlParams = methods.urlParams;
//冒泡排序
export const bubbleSort = methods.bubbleSort;
//数组去重
export const deWeight = methods.deWeight;
//判断`obj`是否为空
export const isEmptyObject = methods.isEmptyObject;
//现金额转大写
export const numUppercase = methods.numUppercase;
//生成从minNum到maxNum的随机数
export const randomNum = methods.randomNum;
//当前时间 到 指定未来时间的剩余时间
export const timeRemaining = methods.timeRemaining;
//过去时间 到 距现在的已过时间
export const elapsedTime = methods.elapsedTime;
//根据时间返回对应时间{2020-06-22}
export const getTheDate = methods.getTheDate;
//根据时间返回当前时间的星期.
export const getWeek = methods.getWeek;
//判断是否为URL地址
export const isUrl = methods.isUrl;
//判断是否为邮箱号
export const isEmail = methods.isEmail;
//判断是否为手机号
export const isPhone = methods.isPhone;
//判断是否为身份证号(二代身份证)
export const isIdNumber = methods.isIdNumber;
//节流函数
export const throttle = methods.throttle;
//防抖函数
export const debouncing = methods.debouncing;
//随机颜色
export const randomColor = methods.randomColor;
