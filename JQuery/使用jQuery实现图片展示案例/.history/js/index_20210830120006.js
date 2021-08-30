// 入口函数
$(function () {
    // 1.鼠标经过左边的小 li
    $(".left-tab li").mouseover(function () {
        // 2. 得到当前小 li 的索引号
        var index = $(this).index();
        $(".left-tab li").removeClass("active");
        $(this).addClass("active");
        // 让右侧对应的图片显示
        $(".right-img li").hide();
        $(".right-img li").eq(index).show();

        // console.log($(".right-image img").eq($(this).index())[0]);
        // $(".right-image").css("display", "none");
        // $(".right-image img").eq($(this).index()).css("display", "block");
    });

})