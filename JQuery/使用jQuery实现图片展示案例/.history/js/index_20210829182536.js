// 入口函数
$(function () {
    $(".left-tab li").onclick(function () {
        $(".right-image").css("display", "none");
        $(".right-image").eq(this.index()).css("display", "block");
    })

})