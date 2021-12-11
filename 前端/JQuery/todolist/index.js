$(function () {
    load();
    // 按下回车，把完整数据 存储到本地存储里面
    $(".todo-add").on("keydown", function (e) {
        if (e.keyCode == 13) {
            if (!$(this).val()) {
                alert("请输入 todo 内容！");
            }
            else {
                // 先读取本地存储原来的数据
                var local = getData();
                // 更新数据
                local.push({ title: $(this).val(), done: false });
                // 把数组存储到本地存储
                saveData(local);
                load();
                $(this).val("");
            }

        }
    })

    // 点击完成
    $("ol").on("click", ".check", function () {
        // $(".check").click(function () {
        // 读取本地存储
        var local = getData();
        // 获取更改的数据
        var index = $(this.parentNode).attr("index");
        console.log(index);
        local[index]["done"] = !local[index]["done"];
        // 保存数据
        saveData(local);
        load();
    });
    // 删除
    $("ol").on("click", ".delete", function () {
        var local = getData();
        var index = $(this.parentNode).attr("index");
        local.splice(index, 1);
        saveData(local);
        load();
    })

    // 读取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todoList");
        if (data !== null) {
            // 转换格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存到本地存储
    function saveData(data) {
        localStorage.setItem("todoList", JSON.stringify(data));
    }
    // 渲染
    function load() {
        $("ol li").remove();
        var data = getData();
        var doing = 0;
        var done = 0;
        $.each(data, function (i, n) {
            if (n["done"] === false) {
                doing++;
                $("#todo-doing ol").prepend('<li index="' + i + '"><img src="./icon/checkbox-unchecked.svg" alt="" class="check"><span class="content">' + n["title"] + '</span><img src="./icon/icons8-cancel-16.png" alt="" class="delete"></li>');
            }
            else {
                $("#todo-done ol").prepend('<li index="' + i + '"><img src="./icon/checkbox-checked.svg" alt="" class="check"><span class="content">' + n["title"] + '</span><img src="./icon/icons8-cancel-16.png" alt="" class="delete"></li>');
                done++;
            }
        })
        $("#todo-done .count").text(done);
        $("#todo-doing .count").text(doing);
    }

    // $(".todo-add").change(function () {
    //     console.log($(this).val());
    //     $(this).val('');
    //     var addLi = "<li><li>";
    //     var img1 = '<img src="./icon/checkbox-unchecked.svg" alt="" class="check">';
    //     var img2 = '<img src="./icon/icons8-cancel-16.png" alt="" class="delete">';
    //     var span = '<span class="content">写todoList</span>';
    //     $(".todo-doing .todo-items ol").append();
    //     console.log($(addLi));
    //     console.log($(".todo-doing .todo-items ol"));
    // })
})