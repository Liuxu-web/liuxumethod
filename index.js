const context = require.context('./', true, /\.(js)$/);
const methods = {};
context.keys().forEach(filename => {
  if (filename !== './index.js') {
    Object.assign(methods, context(filename));
  }
});

// url地址参数 转换为对象
export const { urlParams } = methods;
// 排序
export const { bubbleSort } = methods;
// 数组去重
export const { deWeight } = methods;
// 判断`obj`是否为空
export const { isEmptyObject } = methods;
// 现金额转大写
export const { numUppercase } = methods;
// 生成从minNum到maxNum的随机数
export const { randomNum } = methods;
// 当前时间 到 指定未来时间的剩余时间
export const { timeRemaining } = methods;
// 根据时间返回对应时间{2020-06-22}
export const { getTheDate } = methods;
// 根据时间返回当前时间的星期.
export const { getWeek } = methods;
// 判断是否为URL地址
export const { isUrl } = methods;
// 节流函数
export const { throttle } = methods;
// 防抖函数
export const { debouncing } = methods;
// 随机颜色
export const { randomColor } = methods;
// 改变对象键值
export const { changeKey } = methods;
// 字符串去重空格的方法
export const { blank } = methods;
// 获取非行内样式兼容
export const { getComStyle } = methods;
// 查看当前环境是否是PC端
export const { isMobile } = methods;
// 创建元素方法
export const { CreateElement } = methods;
// 是否是IOS端
export const { isIOS } = methods;

