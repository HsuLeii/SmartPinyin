$(function(){
	$(".courses.practice > a.enterBtn").click(function(){
		$(this).addClass("active").append("<div class='arrow top'></div>").siblings().removeClass("active").find(".arrow.top").remove();		
		$($(this).attr("href")).show().siblings(".workOn").hide();;
		return false;
	});
});