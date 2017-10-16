$(function() {

	/*下拉菜单*/
	$(".listChild").hide();
	$(".list>li").hover(function() {
		$(this).find(".listChild").stop().slideDown(300).end().siblings().find(".listChild").hide();
	}, function() {
		$(this).find(".listChild").stop().slideUp(200);
	})

	/*遮罩*/
	$(".show ul li").hover(
		function() {
			$(this).find(".dask").stop().animate({
				"top": 0,
				opacity: 0.7
			}, 300)
		},
		function() {
			$(this).find(".dask").stop().animate({
				"top": -200,
				opacity: 0
			}, 300)
		}
	)

	/*tab1*/
	$(".box1 .newsTwo div:gt(0)").hide();
	$(".box1 .menu li").click(function() {
		$(this).addClass("se").siblings().removeClass("se");
		var index = $(this).index();
		$(".box1 .newsTwo div").eq(index).show().siblings().hide(); 
	})
	$(".box2 .newsTwo div:gt(0)").hide();
	$(".box2 .menu li").click(function() {
		$(this).addClass("se").siblings().removeClass("se");
		var index = $(this).index();
		$(".box2 .newsTwo div").eq(index).show().siblings().hide();
	})
	
	/*tab2*/
	$(".productInduct .proBox div:gt(0)").hide();
	$(".productInduct .proTitle h2").click(function() {
		$(this).addClass("proOn").siblings().removeClass("proOn");
		var index = $(this).index();
		$(".productInduct .proBox div").eq(index).show().siblings().hide();
	})
	

})