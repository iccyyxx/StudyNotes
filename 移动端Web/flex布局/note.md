# Flex 布局
## 常见父项属性
- `flex-direction`:设置主轴的方向
- `justify-content`:设置主轴上的子元素排列方式
- `flex-wrap`:设置子元素是否换行
- `align-content`:设置侧轴上的子元素的排列方式，**多行**
- `align-items`:设置侧轴上的子元素排列方式，**单行**
- `flex-flow`:复合属性，相对于同时设置了`flex-direction`和`flex-wrap`

### flex-direction
| 属性值         | 说明             |
| -------------- | ---------------- |
| row            | 默认值，从左到右 |
| row-reverse    | 从右到左         |
| column         | 从上到下         |
| column-reverse | 从下到上         |

### justify-content、align-content

`justify-content`定义了项目在主轴上的对齐方式

`align-content`定义侧轴上的排列方式

| 属性值        | 说明                       |
| ------------- | -------------------------- |
| flex-stat     | 默认值<br />从头部开始     |
| flex-end      | 从尾部开始                 |
| center        | 居中对齐                   |
| space-around  | 平分剩余空间               |
| space-between | 先两边贴边，再平分剩余空间 |

### flex-wrap

默认不换行，不够会修改子盒子宽度

| 属性值 | 说明             |
| ------ | ---------------- |
| wrap   | 换行             |
| nowrap | 默认值<br />换行 |

### align-items

在子项为单项时使用

| 属性值     | 说明                 |
| ---------- | -------------------- |
| flex-start | 默认值<br />从上到下 |
| flex-end   | 从下到上             |
| center     | 垂直居中             |
| stretch    | 拉伸                 |

## 子项常见属性

### flex 属性

### align-self

允许单个项目与其他项目不一样的对齐方式，可覆盖 align-items 属性

### order 属性

控制子项目的顺序

数值越小，排列越靠前，默认为 0

