function getLength(str) {
	return str.replace(/[^\x00-xff]/g, "xx").length;
}

function findStr(str, n) {
	var tmp = 0;
	for(var i = 0; i < str.length; i++) {

		if(str.charAt(i) == n) {
			tmp++
		}
	}
	return tmp;
}
window.onload = function() {
	var aInput = document.getElementsByTagName("input");
	var name = aInput[0];
	var pw = aInput[1];
	var pw2 = aInput[2];
	var nick_msg = document.getElementById("nick_msg");
	var pw1_msg = document.getElementById("pw1_msg");
	var pw2_msg = document.getElementById("pw2_msg");
	var count = document.getElementById("count");
	var lev = document.getElementById("levBox").getElementsByTagName("span");
	var regBtn=document.getElementById("regBtn");
	var name_length = 0;

	//用户名

	name.onfocus = function() {
		nick_msg.style.display = 'block';
		nick_msg.innerHTML = '4-30个字符';

	}

	name.onkeyup = function() {
		count.style.visibility = 'visible';
		get_length = getLength(this.value);
		
		count.innerHTML = get_length + '个字符';
		
		if(get_length == 0) {
			count.style.visibility = 'hidden';

		}

	}

	name.onblur = function() {

		//含有非法字符
		var re = /[^\w\u4e00-\u9fa5]/g;
		
		if(re.test(this.value)) {
			nick_msg.innerHTML = '含有非法字符';
		}
		//不能为空
		else if(this.value == '') {
			nick_msg.innerHTML = '*不能为空';
		}
		//长度不能超过30个字符
		else if(get_length > 30) {
			nick_msg.innerHTML = '长度不能超过30个';
		}
		//长度不能少于4个字符
		else if(get_length < 4) {
			nick_msg.innerHTML = '长度不能少于4个';
		}
		//ok
		else {
			nick_msg.innerHTML = 'ok';

		}
	}

	//密码

	pw.onfocus = function() {
		pw1_msg.style.display = 'block';
		pw1_msg.innerHTML = '6-16位数字、请使用字母和数字或符号的组合密码';

	}
	pw.onkeyup = function() {

		//长度大于6中
		if(this.value.length > 6) {
			lev[1].className = 'on';
			pw2.removeAttribute("disabled");
			pw2_msg.style.display = 'block';
			pw2_msg.innerHTML = '请再输入密码';
		} else {
			lev[1].className = '';
			pw2.setAttribute("disabled", "");
			pw2_msg.style.display = 'none';

		}
		//长度大于10强
		if(this.value.length > 10) {
			lev[2].className = 'on';
			pw2.removeAttribute("disabled");
			pw2_msg.style.display = 'block';
			pw2_msg.display = 'block';
			pw2_msg.innerHTML = '请再输入密码';

		} else {
			lev[2].className = '';
			pw2.setAttribute("disabled");
			pw2_msg.style.display = 'none';

		}
	}
	pw.onblur = function() {
			var m = findStr(pw.value, pw.value[0]);
			var re_n = /[^\d]/g;
			var re_t = /[^a-zA-Z]/g;
			//不能为空
			if(this.value == '') {
				pw1_msg.innerHTML = '*不能为空';

			}
			//不能用相同的字符
			else if(m == this.value.length) {

				pw1_msg.innerHTML = '*不能用相同字符';

			}
			//长度应为6-16个字符
			else if(this.value.length < 6 || this.value.length > 16) {

				pw1_msg.innerHTML = '*长度应为6-16个字符 ';

			}
			//不能全为数字
			else if(!re_n.test(this.value)) {
				pw1_msg.innerHTML = '*不能全为数字 ';

			}
			//不能全为字母
			else if(!re_t.test(this.value)) {
				pw1_msg.innerHTML = '*不能全为字母 ';

			}
			//ok
			else {
				pw1_msg.innerHTML = 'ok ';

			}
		}
		//确定密码

	pw2.onblur = function() {

		if(this.value != pw.value) {

			pw2_msg.innerHTML = '*两次密码不一致';

		} else {
			pw2_msg.innerHTML = 'ok';

		}
	}
	
	regBtn.onclick=function(){
		if(nick_msg!="" && pw1_msg!=="" && pw2_msg!==""){
			location.href="index.html";		
		}
	}

}