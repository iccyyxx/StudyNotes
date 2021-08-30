// 入口函数
$(function () {

    $(".left-tab li").click(function () {
        console.log($(".left-tab li")[0].classNname);
        // console.log($(".right-image img").eq($(this).index())[0]);
        // $(".right-image").css("display", "none");
        // $(".right-image img").eq($(this).index()).css("display", "block");
    });

})