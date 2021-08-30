# jQuery 的基本使用

## jQuery 的入口函数

两种方法：

```js 
1.
		$(document).ready(function() {

        });
2.
        $(function() {
            
        })
```

1. 相对于原生 js 的  DOMContentLoaded
2. 推荐使用第二种

## jQuery 的顶级对象 $

1. ` $` 是 jQuery 的别称，在代码中可以使用 jQuery 代替 $，一般用 $
2. $ 是 jQuery 的顶级对象

## jQuery 和 DOM 对象

1. 用原生 js 获取来的对象是 DOM 对象
2. jQuery 方法获取的元素是 jQuery 对象

```js
        // 1. DOM 对象
        var dom = document.querySelector('div');

        //2. jQuery 对象
         $('div'); //是一个 jQuery 对象
```

3. jQuery 对象本质是 利用 $ 对 DOM 对象包装后产生的对象（伪数组形式存储）

4. jQuery 对象只能使用 jQuery 方法， DOM 对象则使用原生的 JavaScript 属性和方法

### jQuery 和 DOM 对象可以相互转换

一般在 jQuery 没有的方法的情况下使用

example：隐藏 div 元素

```html
	<div class="div">1</div>
    <script>
        var myDiv = document.querySelector('.div');
        myDiv.style.display = 'none';
        // DOM 对象转换为 jQuery 对象
        $('.div').hide;
        // jQuery 对象转换为 DOM 对象
        $('.div')[0].style.display = 'none';
        $('.div').get(0).style.display = 'none';
    </script>
```

## jQuery 常用的 API  导读

- jQuery 选择器
- jQuery 样式操作
- jQuery 效果
- jQuery 属性操作
- jQuery 文本属性值
- jQuery 元素操作
- jQuery 尺寸、位置操作

# jQuery 选择器

## jQuery 基础选择器

`$("选择器")`

```js
$("#id");		// ID 选择器
$(".class");	// 类选择器
$("div");		// 标签选择器
$("div,p,li");	// 并集选择器
$("li.a");		// 交集选择器
$("*");			// 全选选择器
```

## jQuery 层级选择器

```js
$("ul>li");		//子代选择器，不包括孙子
$("ul li");		//后代选择器，包括孙子
```

## 隐式迭代！！

遍历内部 DOM 元素（伪数组形式存储）的过程叫做隐式迭代。

## jQuery 筛选选择器

```js
$("li:first");		// 获取第一个元素
$("li:last");		// 获取最后一个元素
$("li:eq(index)");	// 获取 li 的下标为 index 的元素（从0 开始）
$("li:odd");		// 
$("li:even");		//
```

## jQuery 筛选方法（！！）

| 语法                 | 说明                             |
| -------------------- | -------------------------------- |
| `parent()`           | 查找父级                         |
| `children(selector)` | 相对于`$("ul>li")`，查找亲儿子   |
| `find(selector)`     | 后代选择器                       |
| `siblings(selector)` | 查找兄弟节点，不包括本身         |
| `nextAll()`          | 查找当前元素之后的所有同辈元素   |
| ``preAll()``         | 查找当前元素之前的所有同辈元素   |
| `hasClass(class)`    | 判断当前元素是否含有某个特定的类 |
| `eq(index)`          | 查找下标为`index`的元素          |

