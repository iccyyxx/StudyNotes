# 效果图

![效果](效果.gif)

## code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../jquery.min.js"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: #000;
        }

        .cute {
            width: 564px;
            height: 564px;
            margin: 100px auto;
            border: solid 2px #fff;
        }

        .cute li {
            float: left;
            margin: 20px 0 0 20px;
            width: 160px;
            height: 160px;
            list-style: none;

        }

        .cute li img {
            width: 160px;
            height: 160px;
        }
    </style>
</head>

<body>
    <div class="cute">
        <ul>
            <li><img src="./image/1.jpg" alt=""></li>
            <li><img src="./image/2.jpg" alt=""></li>
            <li><img src="./image/3.jpg" alt=""></li>
            <li><img src="./image/4.jpg" alt=""></li>
            <li><img src="./image/5.jpg" alt=""></li>
            <li><img src="./image/6.jpg" alt=""></li>
            <li><img src="./image/7.jpg" alt=""></li>
            <li><img src="./image/8.jpg" alt=""></li>
            <li><img src="./image/9.jpg" alt=""></li>
        </ul>
    </div>
    <script>
        $(function () {
            // 记得停止动画
            $(".cute li").hover(function () {
                $(this).siblings().stop().fadeTo(400, 0.5);
            }, function () {
                $(this).siblings().stop().fadeTo(400, 1);
            })
        })
    </script>

</body>

</html>
```

