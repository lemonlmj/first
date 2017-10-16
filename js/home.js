window.onload=function(){
	
	/***************************************返回顶部***************************************/
	var oRTT=document.getElementById('rtt');
	//var pH=document.documentElement.clientHeight;
	var pH=300;
	var timer=null;
	var scrollTop;
	window.onscroll=function(){
	
		scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop>=pH){
			oRTT.style.display='block';
		}else{
			oRTT.style.display='none';
		}
		return scrollTop;
	};
	
	oRTT.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var now=scrollTop;
			var speed=(0-now)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(scrollTop==0){
				clearInterval(timer);
			}
			document.documentElement.scrollTop=scrollTop+speed;
			document.body.scrollTop=scrollTop+speed;
		}, 30);
	}
	
	/*******************************************轮播图**********************************/
	var banner=document.getElementById("banner");
	var btn=document.getElementById("btn").getElementsByTagName("span");
	var pic=document.getElementById("pic");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var index=1;
	
	next.onclick=function(){
		animate(-1920);
		if(index==3){
			index=1;
		}else{
			index++;
		}
		showBtn();
	}
	prev.onclick=function(){
		animate(1920);
		if(index==1){
			index=3;
		}else{
			index--;
		}
		showBtn();
	}
	/*轮播图片切换*/
	function animate(offset){
		var newleft=parseInt(pic.style.left)+offset;
		pic.style.left=newleft+"px";
		if(newleft<-3840){
			pic.style.left="0px";
		}
		if(newleft>0){
			pic.style.left="-3840px";
		}
	}
	/*控制菜单切换*/
	function showBtn(){
		for(var i=0;i<btn.length;i++){
			if(btn[i].className=="see"){
				btn[i].className="";
			}
		}
		btn[index-1].className="see";
	}
	/*点击控制菜单*/
	for(var i=0; i<btn.length;i++){
		btn[i].onclick=function(){
			var myIndex=parseInt(this.getAttribute("index"));
			var offset=-1920*(myIndex-index);
			animate(offset);
			index=myIndex;
			showBtn();
		}
	}
	
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},3000)
	}
	
	function stop(){
		clearInterval(timer);
	}
	banner.onmouseover=stop;
	banner.onmouseout=play;
	play();
	
}