window.onload=function(){
		/******************************************tab标签**************************************/
	
	var menu1=document.getElementById("menu1").childNodes;
	var con1=document.getElementById("newsTwo1").childNodes;
	var menu=document.getElementById("menu").childNodes;
	var con=document.getElementById("newsTwo").childNodes;
		for (var i=0; i<menu1.length; i++) {
			menu1[i].onclick=function(){
			for (var i=0; i<menu1.length; i++){
				if(menu1[i]==this){
					this.className="se";
					con1[i].className="";
				}else{
					menu1[i].className="";
					con1[i].className="hide";
				}
			}
		}
	}

		for (var i=0; i<menu.length; i++) {
			menu[i].onclick=function(){
			for (var i=0; i<menu.length; i++){
				if(menu[i]==this){
					this.className="se";
					con[i].className="";
				}else{
					menu[i].className="";
					con[i].className="hide";
				}
			}
		}
	}
		
}
