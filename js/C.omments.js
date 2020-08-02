console.log("添加评论照片");

function customTimer(inpId, fn) {
	if ($(inpId).length) {
		fn();
	} else {
		var intervalId = setInterval(function() {
			if ($(inpId).length) { //如果存在了
				clearInterval(intervalId); // 则关闭定时器
				customTimer(inpId, fn); //执行自身
			}
		}, 100);
	}
}
//添加 评论区的 形象照

function addImage() {

	var spen_html = "<span class='bot' ></span>\
                         <span class='top'></span>";
	$(".blog_comment_body").append(spen_html);

	$(".blog_comment_body").before("<div class='body_right' style='float: left;'><a target='_blank'><img  /></a></div>");
	var feedbackCon = $(".feedbackCon").addClass("clearfix");
	for (var i = 0; i < feedbackCon.length; i++) {
		var span = $(feedbackCon[i]).find("span:last")[0].innerHTML || "http://pic.cnitblog.com/face/sample_face.gif";
		$(feedbackCon[i]).find(".body_right img").attr("src", span);
		var href = $(feedbackCon[i]).parent().find(".comment_date").next().attr("href");
		$(feedbackCon[i]).find(".body_right a").attr("href", href);

	}
}

//页面加载完成是执行
$(function() {

	//添加 评论区的 形象照
	customTimer(".blog_comment_body", addImage);
});