window.onload = function(){
	waterfall('main','box');
	window.onscroll = function(){
		if(checkScrollSlide){
			
		}
	}
}
function waterfall(parent,box){
	//取出main下所有class为box的元素
	var oParent = document.getElementById(parent);
	var oBoxs = document.getElementsByClassName(box);
	console.log(oBoxs.length);
	//获取所有class为box的元素，可通过getElementsByClassName实现
//	getByClass(oParent,box);

	//计算整个页面显示的列数（页面宽/box的宽）
	var oBoxw = oBoxs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxw);
	//设置main的宽
	oParent.style.cssText = 'width:' + oBoxw * cols + 'px;margin: 0 auto';
	
	var hArr = [];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH = Math.min.apply(null,hArr);
			var index = getMinhIndex(hArr,minH);
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			//以下两种方法都可以
//			oBoxs[i].style.left = oBoxw * index + 'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
			
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
	console.log(hArr);
}
function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return i;
		}
	}
}

//检测是否具备滚动加载数据库的条件
function checkScrollSlide(){
	var oParent = document.getElementById("main");
	var oBoxs = document.getElementsByClassName("box");
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1]/2);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scrollTop);
}


//function getByClass(parent,clsName){
//	var boxArr = new Array(),
//		oElements = parent.getElementsByTagName('*');
//	for(var i=0;i<oElements.length;i++){
//		if(oElements[i].className == clsName){
//			boxArr.push(oElements[i]);
//		}
//	}
//	return boxArr; 
//}
