/*
* @Author: Windsor
* @Date:   2017-09-15 17:10:03
* @Last Modified by:   Windsor
* @Last Modified time: 2017-09-15 18:03:32
*/
let info = document.getElementById('info');

let t = setInterval(function(){
	if(info.innerText <= 0){
		clearInterval(t);
		location.replace('login.html');
	}
	info.innerText -= 1;
},1000)