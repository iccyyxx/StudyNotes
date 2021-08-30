// 入口函数
$(function () {

    $(".left-tab li").click(function () {
        console.log($(".left-tab li").class);
        $(".left-tab li").class = "";
        $(this).class = "active";
        console.log($(this).class);
        // console.log($(".right-image img").eq($(this).index())[0]);
        $(".right-image").css("display", "none");
        $(".right-image img").eq($(this).index()).css("display", "block");
    });

})