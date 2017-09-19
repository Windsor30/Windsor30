/*
* @Author: Windsor
* @Date:   2017-09-15 17:09:55
* @Last Modified by:   Windsor
* @Last Modified time: 2017-09-15 17:52:53
*/
	let user = document.getElementById('user');
	let psw = document.getElementById('psw');
	let logina = document.getElementById('logina');

	logina.onclick = function(){
		let u = user.value;
		let p = psw.value;
		if(u == 'zhangsan' && p == '12345'){
			location.replace('success.html');
		}else{
			location.replace('error.html');
		}
	}