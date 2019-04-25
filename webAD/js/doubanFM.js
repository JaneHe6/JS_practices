function startMove(obj, attr, end,fn) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		//判断属性
		if(attr == 'opacity') {
			var icu = Math.round(parseFloat(getStyle(obj, attr)) * 100); //添加Math.round()四舍五入是为了使取到的数值更加精确
		} else {
			var icu = parseInt(getStyle(obj, attr));
		}
		//算速度
		var speed = (end - icu) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//检测停止
		if(icu == end) {
			clearInterval(obj.time);
			if(fn){fn();}
		} else {
			if(attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (icu + speed) + ')';
				obj.style[attr] = (icu + speed) / 100;
			} else {
				obj.style[attr] = icu + speed + 'px'; //obj.style.width 也可以写成 obj.style['width']。该方法可以将需要改变的属性设置为变量进行传参
			}

		}
	}, 20);
}

function getStyle(obj, attr) { //通过这个函数可以使容器添加其他样式的情况下不影响改变,用getStyle代替offset解决offset带来的一些bug
	if(obj.currentStyle) {
		return obj.currentStyle[attr]; //针对IE浏览器获取样式
	} else {
		return getComputedStyle(obj, false)[attr]; //针对firefox浏览器获取样式
	}
}