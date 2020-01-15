## 将json对象的null转为''
```  js
function parseNullForObj(t){
  for(var p in t){
    if(typeof t[p] == 'undefined' || t[p] == null || t[p] == 'null'){
      t[p] = '';
    }
  }
  return t;
}
```
## 判断变量是否为空
```  js
function isNull(inVariable){
  if(typeof inVariable=='undefined'||inVariable == "" || inVariable == "null" || inVariable == ""||inVariable==null){
    return true;
  }else{
    return false;
  }
}
```
## 检测参数得数据类型
```  js
type = para => {
  return Object.prototype.toString.call(para).slice(8,-1)  
}
```
## 将特殊字符通过正则直接删除 
```  js
function htmlEncode(str) {
  //匹配< / > " & `
  return str.replace(/[<>"&\/`']/g, '');
}
```
## 用js限制字数，超出部分以省略号...显示，过滤空格'&nbsp'
```  js
function showHiddenText(content,num) {
  var newstr = content.replace(/&nbsp;/ig, "");
  newstr = newstr.replace(/<br \/>/g, "");
  if(content != null && content != "" && content != "nul" && content != undefined) {
    if(content.length > num) {
      newstr = content.substring(0, num) + "...";
    }
  }
  return newstr;
}
```
## 时间格式化（年月日时分秒）
```  js
let date = Date.parse(new Date()) //  获取当前时间戳(毫秒)

dateTime = time => {
  let newDate = new Date(time);
  let { y, M, d, h, m, s } = { 
    y: newDate.getFullYear(), 
    M: newDate.getMonth() + 1, 
    d: newDate.getDate(), 
    h: newDate.getHours(), 
    m: newDate.getMinutes(), 
    s: newDate.getSeconds() };
  return `${y}-${M}-${d}  ${h}:${m}:${s}`;
}

console.log(dateTime(date));
```
或者
```  js
// 格式化日期时间
function formatDate(val){
  if(val) {
    var date = new Date(val);
    var y = date.getFullYear();
    var MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    var s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
  } else {
    return '-'
  }
}
```
## 数字超过9显示省略号
```  js
num_filter = val =>{
  val = val?val-0:0;
  if (val > 9 ) {
    return "…"
  }else{
    return val;
  }
}
```
## 删除数组中的元素
```  js
// 在数组中找指定的元素,返回下标
arrFinNum = function (arr,num) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      index = i;
      break;
    }
  }
  return index;
}
let arr = [1,2,3,4,5,6]
console.log(arrFinNum(arr,4));  // 3

// 删除指定元素
delArrNum = (arr,val) => {
  let index = arrFinNum(arr, val) //调用了前面自行添加的arrFinNum方法
  if (index != -1) {
    return arr.splice(index, 1);
  }
}
```
## 数组去重
```  js
arrDemp = arr => {
  let newArr = [];
  let m = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (m[n]) {

    } else {
      newArr.push(arr[i]);
      m[n] = true;
    }
  }
  return newArr;
}

let arr = [1,2,3,5,4,5,4,3,6]
console.log(arrDemp(arr));  //  [ 1, 2, 3, 5, 4, 6 ]
```
也可以使用ES6中的new Set  
```  js
let arr = [1,2,3,5,4,5,4,3,6]
let arrDemp = new Set(arr)  //arrDemp是一个对象
let newArr = [...arrDemp]   //把arrDemp转化成数组
console.log(newArr);
```

