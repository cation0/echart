let t = null;
t = setInterval(nowTime, 1000); // 开始运行
function nowTime() {
	// clearTimeout(t); // 清除定时器
	let myDate = new Date();
	let Y = myDate.getFullYear(); // 获取年
	let M = myDate.getMonth() + 1; // 获取月
	let D = myDate.getDate(); // 获取日
	let h = myDate.getHours(); // 获取时
	let m = myDate.getMinutes(); // 获取分
	let s = myDate.getSeconds(); // 获取秒
	
	Y = check(Y);
	M = check(M);
	D = check(D);
	h = check(h);
	m = check(m);
	s = check(s);
	
	document.querySelector('.showTime').innerHTML = "当前时间：" + Y + "年" + M + "月" + D + "日" + '-' + h + "时" + m + "分" + s + "秒";
}

function check(i) {
	let num = (i < 10) ? ('0' + i) : i;
	return num;
}