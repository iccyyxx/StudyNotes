// 入口函数
$(function () {
    console.log($(".left-tab"));
    $(".left-tab li").onclick(function () {
        $(".right-image").css("display", "none");
        $(".right-image").eq(this.index()).css("display", "block");
    })

})