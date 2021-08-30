// 入口函数
$(function () {

    $(".left-tab li").click(function () {
        console.log($(".left-tab li").class);
        $(".left-tab li")[0].className = "";
        $(this)[0].className = "active";
        console.log($(this)[0].className);
        // console.log($(".right-image img").eq($(this).index())[0]);
        $(".right-image").css("display", "none");
        $(".right-image img").eq($(this).index()).css("display", "block");
    });

})