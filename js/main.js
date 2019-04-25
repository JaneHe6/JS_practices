window.onload=function(){
	var divCon = document.getElementById("container");
	divCon.onmouseover=function(){

		move(0);	
	}
	divCon.onmouseout=function(){
		move(-300);
	}
}
var time=null;
function move(end){
	clearInterval(time);
	var divCon = document.getElementById("container");
	
	time = setInterval(function(){
		//////以下为相同速度出现以及退出 /////////////////
//		var speed = 0;
//		if(divCon.offsetLeft > end){
//			speed = -10;
//		}else{
//			speed = 10;
//		}
/////////////////////////////////////////////////
/////以下为缓冲速度出现以及退出，对其运动速度进行判断后进行向上或向下取整
		var speed = (end - divCon.offsetLeft)/10;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if (divCon.offsetLeft == end) {
			clearInterval(time);
		} else{
			divCon.style.left = divCon.offsetLeft + speed +'px';
		}
	},30);
}
