// 入口函数
$(function () {
    // 1.鼠标经过左边的小 li
    $(".left-tab li").mouseover(function () {
        console.log($(this));
        $(".left-tab li").removeClass("active");
        $(this).addClass("active");
        $(".right-img img").hide();
        $(".right-img img").eq($(this).index()).show();

        // console.log($(".right-image img").eq($(this).index())[0]);
        // $(".right-image").css("display", "none");
        // $(".right-image img").eq($(this).index()).css("display", "block");
    });

})