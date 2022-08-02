$(function(){
	$("ul.list li").css("opacity","0.25");
	$("ul.list li table").hide();
	$("ul.list li:first-child").css("opacity","1");
	$("input").click(function(){
		$(this).parent().next().css("opacity","1");
	});
	$("ul.list li:last-child input").click(function(){
		$(this).next("table").fadeIn();
	});
});