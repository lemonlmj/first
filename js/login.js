var number=document.getElementById("number");
var password=document.getElementById("password");
var number_msg=document.getElementById("number_msg");
var error=document.getElementById("error");
var password_msg=document.getElementById("password_msg");
var login=document.getElementById("login");

number.onblur=function(){
	number_msg.innerHTML="";
	if(number.value==""){
		number_msg.innerHTML="*用户名不能为空";
		number.focus();
		return false;
	}
}

password.onblur=function(){
	password_msg.innerHTML="";
	if(password.value==""){
		password_msg.innerHTML="*密码不能为空";
		password.focus();
		return false;
	}
}

function demo(){
	if(number.value==""){
		number_msg.innerHTML="*用户名不能为空";
		number.focus();
		return false;
	}
	if(password.value==""){
		password_msg.innerHTML="*密码不能为空";
		password.focus();
		return false;
	}
	
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4&&xmlhttp.status==200){
			var data=JSON.parse(xmlhttp.responseText);
			if(number.value==data[0].number && password.value==data[0].password){
					location.href="home.html";
					error.innerHTML="";
				}
			else if(number.value==data[1].number && password.value==data[1].password){
					location.href="home.html";
					error.innerHTML="";
				}
			else{
				error.innerHTML="*用户名或密码不正确";
			}
		}
	}
	xmlhttp.open("GET","js/data.txt","true");
	xmlhttp.send();
	
}

