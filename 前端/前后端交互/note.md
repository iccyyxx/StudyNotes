## .$get()函数

jQuery 中的 .$get() 函数专门用来发起 get 请求，从而将服务器上的资源请求到客户端来进行使用

```javascript
$.get(url,[data],[callback])
```

| 参数名   | 参数类型 | 是否必选 | 说明 |
| -------- | -------- | -------- | ---- |
| url      | string   | 是       |      |
| data     | object   | 否       |      |
| callback | function | 否       |      |

## $.post()函数

jQuery 专门用来发起 get 请求，从而将服务器上的资源请求到客户端来进行使用



```javascript
$.post(url,[data],[callback])
```

| 参数名   | 参数类型 | 是否必选 | 说明 |
| -------- | -------- | -------- | ---- |
| url      | string   | 是       |      |
| data     | object   | 否       |      |
| callback | function | 否       |      |

# 数据接口

数据接口：使用 Ajax 请求数据是，被请求的URL地址，每个接口必须有请求方式

## 接口的请求过程

## 接口文档

### 接口的组成部分

1. 接口名称
2. 接口 URL
3. 调用方式
4. 参数格式
5. 响应格式
6. 返回实例

# form 表单

## 属性 target

规定在何处打开 action URL

| 值          | 描述                       |
| :---------- | :------------------------- |
| _blank      | 在新窗口/选项卡中打开。    |
| _self       | 在同一框架中打开。（默认） |
| _parent     | 在父框架中打开。           |
| _top        | 在整个窗口中打开。         |
| *framename* | 在指定的 iframe 中打开。   |

## 表单同步提交

缺点： 

- 页面会发生跳转
- 页面之前的状态和数据会丢失

解决方案：表单值采集数据，Ajax提交数据

## 通过ajax提交表单

### 阻止表单默认提交行为

调用事件对象的`event.preventDefault`函数阻止表单的提交和页面的跳转

```javascript
$('#form1').submint(function(e){
    e.preventDefault()
})
$('#form1').on('submit',function(e){
    e.preventDefault()
})
```

### 快速获取表单数据

#### serialize()函数

可一次性获取表单所有数据

```javascript
$(selector).serialize()
```

调用结果

`user="  "&psw=" "`

每个表单元素必须有name属性才可以获取数据

##  模板引擎

## XMLHttpRequest

### XMLHttpRequest.open()

**XMLHttpRequest.open()** 方法初始化一个请求。该方法要从JavaScript代码使用；

```javascript
xhrReq.open(method, url);
xhrReq.open(method, url, async);
xhrReq.open(method, url, async, user);
```

#### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/open#参数)

- `method`

  要使用的HTTP方法，比如「GET」、「POST」、「PUT」、「DELETE」、等。对于非HTTP(S) URL被忽略。

- `url`

  一个[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString)表示要向其发送请求的URL。

- `async` 可选

  一个可选的布尔参数，表示是否异步执行操作，默认为`true`。如果值为`false`，`send()`方法直到收到答复前不会返回。如果`true`，已完成事务的通知可供事件监听器使用。如果`multipart`属性为`true`则这个必须为`true`，否则将引发异常。

### 发送请求XMLHttpRequest.send()

`**XMLHttpRequest.send()**` 方法用于发送 HTTP 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。

```javascript
MLHttpRequest.send(body)
```

### 使用xhr发起get请求

```js
<script>
    // 1. Create a XHR
    var xhr  = new XMLHttpRequest();
    // 2. 调用 open 函数,请求方式和url地址
    xhr.open('GET', url, true);
    // 3. 调用 send 函数，发送ajax请求
    xhr.send()
    // 4. 监听 onreadystatechange请求
    xhr.onreadystatechange = function(){
        // 监听xhr的请求状态readyState 和服务器响应状态的status
        if (shr.readyState===4 && xhr.status===200){
            // 打印服务器响应回来的数据
            console.log(xhr.responseText);
        }
    }
</script>
```

###  readyState属性

**XMLHttpRequest.readyState** 属性返回一个 XMLHttpRequest 代理当前所处的状态。一个 XHR 代理总是处于下列状态中的一个：

| 值   | 状态               | 描述                                                         |
| ---- | ------------------ | ------------------------------------------------------------ |
| `0`  | `UNSENT`           | 代理被创建，但尚未调用 open() 方法。                         |
| `1`  | `OPENED`           | `open()` 方法已经被调用。在这个状态中，可以通过 [setRequestHeader()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader) 方法来设置请求的头部， 可以调用 [send()](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send) 方法来发起请求。 |
| `2`  | `HEADERS_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。如果 `responseType` 属性是“text”或空字符串， `responseText` 将会在载入的过程中拥有部分响应数据。 |
| `3`  | `LOADING`          | 下载中； `responseText` 属性已经包含部分数据。               |
| `4`  | `DONE`             | 下载操作已完成。请求操作已经完成。这意味着数据传输已经彻底完成或失败。 |

### URL 编码与解码

#### encodeURI()

`**encodeURI()**` 函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列)由两个 "代理" 字符组成)。

#### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#参数)

- `URI`

  一个完整的URI.

- 返回值  一个新字符串, 表示提供的字符串编码为统一资源标识符 (URI)。

`encodeURI` 自身*无法*产生能适用于HTTP GET 或 POST 请求的URI，例如对于 XMLHTTPRequests, 因为 "&", "+", 和 "=" 不会被编码，然而在 GET 和 POST 请求中它们是特殊字符。

#### decodeURI()

`**decodeURI()**` 函数能解码由[`encodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 创建或其它流程得到的统一资源标识符（URI）。

#### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#参数)

- `encodedURI`

  一个完整的编码过的 URI

#### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#返回值)

返回一个给定编码统一资源标识符(URI)的未编码版本的新字符串。

#### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI#异常)

当`*encodedURI*` 包含无效字符序列时，引发[`URIError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/URIError)（“格式错误的URI序列”）异常。

### 使用xhr发起post请求

```javascript
ar xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//发送合适的请求头信息
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {
    // 请求结束后,在此处写处理代码
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## json

#### [方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON#methods)

- [`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

  解析JSON字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性, 在返回之前进行某些修改。

- [`JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

  返回与指定值对应的JSON字符串，可以通过额外的参数, 控制仅包含某些属性, 或者以自定义方法来替换某些key对应的属性值。

```javascript
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

```javascript
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
```

### 序列话和反序列化

序列化：把数据对象转换为字符串

反序列化：把字符串转换位数据对象

### 封装自己的ajax函数

```javascript
/* 
 * 处理data函数
 * @param {data} 需要发送到服务器的数据
 * @returns {string} 返回拼接好的查询字符串 name=iccyyxx&age=21
*/
function resolveData(data) {
    var arr = []
    for (let k in data) {
        arr.push(k + "=" + data[k]);
    }
    return arr.join('&')
}
function myAjax(options) {
    var xhr = new XMLHttpRequest();
    var str = resolveData(options.data)

    if (options.method.toUpperCase === 'GET') {
        xhr.open(options.method, options.url + '?' + str)
        xhr.send()
    }
    else if (options.method.toUpperCase === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(str)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}
```



## XMLHttpRequest Level2新特性

1. 设置http请求的时限
2. 使用FormData对象管理表单数据
3. 可以上传文件
4. 获取数据参数的进度信息

### 设置请求时限

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:5500');
// 以ms为单位
xhr.timeout = 3;
xhr.ontimeout = function () {
    alert("请求超时");
}
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        alert("成功啦");
    }
}
```

### FormData对象

FormData对象的使用

```javascript
var formData = new FormData();
// 添加
formData.append("user", 'iccyyxx');
formData.append("age", '18')
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://127.0.0.1:5500/');
            xhr.send(formData);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        alert("成功啦")
    }
}
```

获取表单信息提交数据

```javascript
var form = document.querySelector('#form1');
form.addEventListener('submit', function (e) {
    // 阻止表单默认提交
    e.preventDefault();
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:5500/');
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("成功啦")
        }
    }
})
```

### 上传文件

