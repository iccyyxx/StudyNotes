// 入口函数
$(function () {
    $(".left-tab li").click(function () {
        console.log($(this));
        $(".left-tab li").removeClass("active");
        $(this).addClass("active");
        $(".right-tab li").hide();
        $(this).show();

        // console.log($(".right-image img").eq($(this).index())[0]);
        // $(".right-image").css("display", "none");
        // $(".right-image img").eq($(this).index()).css("display", "block");
    });

})