//More simple 功能
function whichMobile() {
	var ua = navigator.userAgent;
	if (/iPhone OS (\d+_\d+)/.test(ua)) {
		return 'iPhone Mac' + RegExp.$1.replace("_", ".");
	}
	if (/iPad.+OS (\d+_\d+)/.test(ua)) {
		return 'iPad Mac' + RegExp.$1.replace("_", ".")
	}
	if (/Android (\d+\.\d+)/.test(ua)) {
		return 'Android' + RegExp["$1"];
	}
}
var githubimg1 = $('#githubimg');
if (githubimg1 != null) {githubimg1.attr("href","https://github.com/loveincode");}
window.onload = function() {

	var footer = document.getElementById('footer');
	console.log(footer.innerHTML);
	var footer_old = footer.innerHTML
	footer_new = footer_old.replace('loveincode', 'loveincode <br/><a href="//github.com/loveincode/love-simple-theme" target="_blank" >Love Simple Theme</a>   Theme By  <a href="//www.cnblogs.com/loveincode" target="_blank" >loveincode</a>');
	footer.innerHTML = footer_new;

	var oBox = document.getElementById('home');
	var main = document.getElementById('mainContent');
	var side = document.getElementById('sideBar');
	var topdiv = document.getElementById('topdiv')
	var btn = document.createElement('div');
	main.style.transition = 'width 1s';
	btn.id = 'con';
	var url = document.location;
	url = url+"";
	var onOff = false;
	if(url.indexOf("/p/") != -1 || url.indexOf("/category/") != -1){
		btn.innerHTML = 'More';
		btn.setAttribute("title", "查看博客更多详细信息");
	}else{
		if (!whichMobile()) {
			side.style.display = 'block';
			main.style.width = '686px';
			topdiv.style.display = 'block';
			btn.innerHTML = 'Simple';
			btn.setAttribute("title", "还我干净的博客浏览！！！");
			onOff = true;
		}
	}
	oBox.appendChild(btn);
	btn.onclick = function() {
		if (onOff) {
			if(window.location.href.indexOf("code") > 0){
			side.style.display = 'none';
			topdiv.style.display = 'none';
			main.style.width = '100%';
			onOff = false;
			this.innerHTML = 'More';
			this.setAttribute("title", "查看博客更多详细信息");
			}
		} else {
			side.style.display = 'block';
			main.style.width = '686px';
			topdiv.style.display = 'block';
			onOff = true;
			this.innerHTML = 'Simple';
			this.setAttribute("title", "还我干净的博客浏览！！！");
		}
	}
	var diggit = $('.diggit');
	if (diggit != null) {
		diggit.attr("title", "点个赞?")
		if(window.location.href.indexOf("code") > 0){}else{
			diggit.css("display", "none");
		}
	}
	if (whichMobile()) {
		var oContent = document.getElementById('con');
		if (oContent != null) {			oContent.style.display = 'none';		}
		var postDesc = $('.postDesc');
		if (postDesc != null) {			postDesc.css("display", "none");		}
		var githubimg = $('#githubimg');
		if (githubimg != null) {			githubimg.css("top", "auto");
		}
		var toolbar = document.getElementById('sideToolbar');
		if (toolbar != null) {			toolbar.style.width = '65%';		}
	}

}
