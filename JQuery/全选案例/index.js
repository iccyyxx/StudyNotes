$(function () {
    // 全选框改变
    $(".check-all").change(function () {
        $(".check,.check-all").prop("checked", $(this).prop("checked"));
    })
    // 选项改变
    $(".check").change(function () {
        if ($(".check:checked").length == $(".check").length) $(".check-all").prop("checked", true);
        else $(".check-all").prop("checked", false);
    })
})