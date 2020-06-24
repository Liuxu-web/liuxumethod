/**
 * @name liu-xu
 * @msg // 节流
 * @param {func:function, delay:number}
 * @return {function}
 */
export function throttle(func, delay = 300) {
  let lock = false;
  return (...args) => {
    if (lock) {
      return;
    }
    func(...args);
    lock = true;
    setTimeout(() => {
      lock = false;
    }, delay);
  };
}
