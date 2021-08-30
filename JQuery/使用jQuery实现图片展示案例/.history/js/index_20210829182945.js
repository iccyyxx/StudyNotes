// 入口函数
$(function () {

    $(".left-tab li").click(function () {
        console.log($(".right-image").eq($(this).index()));
        $(".right-image").css("display", "none");
        $(".right-image").eq($(this).index()).css("display", "block");
    });

})