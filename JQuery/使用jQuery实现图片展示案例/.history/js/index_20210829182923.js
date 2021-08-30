// 入口函数
$(function () {

    $(".left-tab li").click(function () {
        console.log($(this).index());
        $(".right-image").css("display", "none");
        $(".right-image").eq($(this).index()).css("display", "block");
    });

})