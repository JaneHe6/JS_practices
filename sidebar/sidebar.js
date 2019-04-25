//立即执行函数
(function(){
//	构造函数首字母大写以区分
	var Sidebar = function(eId,closeBarId){
		this.state = 'opened';
		this.el = document.getElementById(eId || 'sidebar');
		this.closeBarEl = document.getElementById(closeBarId || 'closeBar');
		this.el.addEventListener('click',function(event){
			if(event.target !== this.el){
				this.triggerSwitch();
			}
		});
	};
	sidebar.prototype.close = function(){};
	sidebar.prototype.open = function(){};
})();
