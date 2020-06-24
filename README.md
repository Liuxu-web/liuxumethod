## 懒人包, JavaScript 方法.(不定期更新)

## 下载

自行选择一种

```javascript
npm i liuxumethod -S

cnpm i liuxumethod -S
```

### 方法

##### 防抖函数

```js
引入 import {debouncing} from "liuxumethod";
按需引入 import {debouncing} from "liuxumethod/debouncing";
这里使用React 举例

Click = () => {
  console.log("Hello world");
};
render() {
  return (
    <div>
      <button onClick={debouncing(this.Click, 500)}>Click</button>
    </div>
  );
}
参数1 执行函数
参数2 防抖时间(毫秒)
```



##### 节流函数

```js
引入 import {throttle} from "liuxumethod";
按需引入 import {throttle} from "liuxumethod/throttle";
这里使用React 举例

Click = () => {
  console.log("Hello world");
};
render() {
  return (
    <div>
      <button onClick={throttle(this.Click, 500)}>Click</button>
    </div>
  );
}
参数1 执行函数
参数2 节流时间(毫秒)
```

##### 验证邮箱

```JavaScript
引入 import {isEmail} from "liuxumethod";
按需引入 import {isEmail} from "liuxumethod/isEmail";
使用 isEmail("139****9953@163.com") // boolean 
```

##### 验证是否是身份证

```js
引入 import {isIdNumber} from "liuxumethod";
按需引入 import {isIdNumber} from "liuxumethod/isIdNumber";
使用 isIdNumber(110************734) // boolean
```

##### 验证手机号

```js
引入 import {isPhone} from "liuxumethod";
按需引入 import {isPhone} from "liuxumethod/isPhone";
使用 isPhone(139****9953) // boolean
```

##### 验证是否是url地址

```js
引入 import {isUrl} from "liuxumethods";
按需引入 import {isUrl} from "liuxumethod/isUrl";
使用 isUrl("https://baidu.com") // boolean
```

##### 验证是否是空对象

```js
引入 import {isEmptyObject} from "liuxumethods";
按需引入 import {isEmptyObject} from "liuxumethod/isEmptyObject";
使用 isEmptyObject({a:1}) // boolean
```

##### url地址参数 转换为对象

```js
引入 import {urlParams} from "liuxumethods";
按需引入 import {urlParams} from "liuxumethod/urlParams";
使用 urlParams("https://baidu.com?a=2&c=3") // {a:2,c:3}
```

##### 冒泡排序

```js
引入 import {bubbleSort} from "liuxumethods";
按需引入 import {bubbleSort} from "liuxumethod/bubbleSort";
使用 bubbleSort([2, 8, 5, 6, 1, 5, 9, 7, 4]) // [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
```

##### 现金额转大写

```js
引入 import {numUppercase} from "liuxumethods";
按需引入 import {numUppercase} from "liuxumethod/numUppercase";
使用 numUppercase(15.1) // 壹拾伍亿壹角
```

##### 随机数

```js
引入 import {randomNum} from "liuxumethods";
按需引入 import {randomNum} from "liuxumethod/randomNum";
使用 randomNum(0, 100) // 0~100
参数 minNum:最小数,maxNum:最大数
```

##### 当前时间到指定时间的剩余时间

```js
引入 import {timeRemaining} from "liuxumethods";
按需引入 import {timeRemaining} from "liuxumethod/timeRemaining";
使用 timeRemaining(+new Date(2020, 5, 24, 24, 0, 0)) // *天 *小时 *分钟 **秒
参数 new Date(2020, 5, 24, 24, 0, 0) 或者 时间戳
```

##### 过去时间到现在的已过时间

```js
引入 import {elapsedTime} from "liuxumethods";
按需引入 import {elapsedTime} from "liuxumethod/elapsedTime";
使用 elapsedTime(+new Date(2020, 5, 24, 24, 0, 0)) // ** 年前 || 个月前 || 天前 || 小时前 || 分钟前 || 刚刚
参数 new Date(2020, 5, 24, 24, 0, 0) 或者 时间戳
```

##### 根据时间返回对应时间

```js
引入 import {getTheDate} from "liuxumethods";
按需引入 import {getTheDate} from "liuxumethod/getTheDate";
使用 getTheDate(new Date , true , ",") // 2020,06,24
	如果指定间隔符,可以省略第二参数
	getTheDate(new Date  , ",")  // 2020,06,24
	不适用间隔符,默认
	getTheDate(new Date , false) // 2020年06月24日
参数1 new Date() 或者 时间戳
参数2 可选参数 true: 使用第三参数 false: 间隔为年月日 
参数3 日期间隔符控制
```

##### 根据时间返回当前时间的星期

```js
引入 import {getWeek} from "liuxumethods";
按需引入 import {getWeek} from "liuxumethod/getWeek";
使用 getWeek(new Date()) // 星期三
参数1 new Date() 或者 时间戳
```

##### 随机颜色

```js
引入 import {randomColor} from "liuxumethods";
按需引入 import {randomColor} from "liuxumethod/randomColor";
使用 randomColor() // #15cc34
```

