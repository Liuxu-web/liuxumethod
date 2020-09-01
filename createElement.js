/**
 * @msg 创建元素方法
 * @param { 
 *          {
 *              el:指定父级元素块,
 *              props:[
 *                  {
 *                      type:"指定生成元素 如:div"
 *                      props:{
 *                          class:"",
 *                          style:{},
 *                          event:{
 *                              eventType:"事件类型",
 *                              func: 执行函数
 *                          }
 *                      }
 *                  }                 
 *               ]  ,
 *               children:"字符串 => 文本" 
 *               children:[ 数组 => 嵌套元素
 *                  {
 *                      type:"...",
 *                      props:{...},
 *                      children:{...}
 *                  }
 *              ]
 *          } 
 * }
 * @return {element}
 */

export class CreateElement {
  constructor({ el, props }) {
    this.createElement(el, props);
  }
  createElement(el, params, tf, father) {
    for (var i = 0; i < params.length; i++) {
      var attribute = params[i],
        ele = document.createElement(attribute.type),
        children = attribute.children || null;
      this.setAttribute(ele, attribute.props);
      children &&
        (typeof children === "string"
          ? ele.appendChild(document.createTextNode(children))
          : this.createElement(ele, attribute.children, !0, el)),
        tf ? (el.appendChild(ele), father.appendChild(el)) : el.appendChild(ele);
    }
  }
  setAttribute(ele, item) {
    for (var key in item) {
      switch (key) {
        case "class": {
          ele.className = item[key];
          break;
        }
        case "style": {
          for (var styles in item[key]) {
            ele.style[styles] = item[key][styles];
          }
          break;
        }
        case "event": {
          var evName = item[key].eventType;
          ele.addEventListener(evName, function (event) {
            event.stopPropagation();
            item[key].func();
          });
          break;
        }
        default: {
          for (var attr in item) {
            ele.setAttribute(attr, item[attr]);
          }
        }
      }
    }
  }
}
