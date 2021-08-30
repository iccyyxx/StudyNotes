// 入口函数
$(function () {
    $(".left-tab").click(function () {
        $(".left-tab li").removeClass("active");
        $(this).addClass("active");

        // console.log($(".right-image img").eq($(this).index())[0]);
        // $(".right-image").css("display", "none");
        // $(".right-image img").eq($(this).index()).css("display", "block");
    });

})