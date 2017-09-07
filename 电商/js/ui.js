$(function(){
	// body...
	$(".right").click(function(){
		nextscroll();
	});
	function nextscroll(){
		var cont = $(".ui-content");
		var offset = ($(".ui-content li").width())*-1;
		cont.stop().animate({marginLeft:offset},"slow",function(){
			var firstItem = $(".ui-content ul li").first();
			cont.find(".folder").append(firstItem);
			$(this).css("margin-left","0px");
		});
	};

	$(".left").click(function(){
		var cont = $(".ui-content");
		var offset = ($(".ui-content li").width()*-1);
		var lastItem = $(".ui-content ul li").last();
		cont.find(".folder").prepend(lastItem);
		cont.css("margin-left",offset);
		cont.animate({marginLeft:"0px"},"slow");
	});
}
	);