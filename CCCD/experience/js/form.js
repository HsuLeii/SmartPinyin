$(document).ready(function () {

    // 說明題型自動添加class
    $('.form-check').each(function () {
        if ($('input', this).prop('checked')) {
            $(this).addClass("check");
        }
    });

    // 題目點選選項添加class
    $('.form-check-input').click(function () {
        $(".form-check ").removeClass("check");
        $(this).parent().addClass("check");
    });

});