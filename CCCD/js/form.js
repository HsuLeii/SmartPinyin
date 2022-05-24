$(document).ready(function(){
$(".form-check-input:radio").on('click', function(){
    $(".form-check ").removeClass("check");
    $(this).parent().addClass("check");
});
});