 JavaScript Document

$(function(){
				$(".box1 .newsTwo div:gt(0)").hide();
				$(".box1 .menu li").click(function(){
					$(this).addClass("se").siblings().removeClass("se");
					var index=$(this).index();//获取点击的位置
					//$("#content :eq("+index+")").show().siblings().hide();
					$(".box1 .newsTwo div").eq(index).show().siblings().hide();//当前位置显示，其余隐藏
				})
				$(".box2 .newsTwo div:gt(0)").hide();
				$(".box2 .menu li").click(function(){
					$(this).addClass("se").siblings().removeClass("se");
					var index=$(this).index();//获取点击的位置
					//$("#content :eq("+index+")").show().siblings().hide();
					$(".box2 .newsTwo div").eq(index).show().siblings().hide();//当前位置显示，其余隐藏
				})
				
			})

	
}
