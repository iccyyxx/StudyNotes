#
## 移动端特殊样式
```css
/* CSS3 盒子模型 */
box-sizing:border-box;
-webkit-box-sizing:border-box;
/* 点击高亮我们需要去除  */
-webkit-tap-highlight-color:transparent;
/* 在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式 */
-webkit-appearance:none;
/* 禁用长按页面时的弹出菜单 */
img,a{
    -webkit-touch-callout:none;
}
```
## 移动端常见布局
1. 单独制作移动端页面
   - 流式布局
   - flex 弹性布局
   - less+rem 媒体查询布局
   - 混合布局
2. 响应式页面兼容移动端
   - 媒体查询
   - bootstarp
### 流式布局（百分比布局）
通过盒子的宽度设置成百分比来根据屏幕的宽度进行伸缩，不受固定像素的限制，内容向两边填充
