/**
 * @name liu-xu
 * @msg 防抖
 * @param {func:function, delay:number , I:}
 * @return {function}
 */
export function debouncing(func, delay = 300, I = null) {
  return (...args) => {
    clearTimeout(I);
    I = setTimeout(func.bind(null, ...args), delay);
  };
}
