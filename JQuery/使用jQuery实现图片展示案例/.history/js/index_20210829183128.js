// 入口函数
$(function () {

    $(".left-tab li").click(function () {
        console.log($(".right-image img").eq($(this).index()).innerHTML);
        $(".right-image").css("display", "none");
        $(".right-image img").eq($(this).index()).css("display", "block");
    });

})