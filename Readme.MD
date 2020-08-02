# 一个后端程序员-love Simple博客园主题分享

<a name="zq3Jk"></a>
### 引
由于最近有些小伙伴反馈博客园的样式好看，自定义的很清新，也有不少小伙伴说让我分享出来，今天抽空整理一下分享给大家，这些样式也是自己实习那会搞的，大概16年那会吧，时间多爱学习也爱写博文，但是都比较基础，现在偶尔也在这上边发发博文，半年一发，一年一发，确实分享太少了，大部分学习笔记一部分用了有道云笔记，后边又转战github [https://github.com/loveincode](https://github.com/loveincode) ，毕竟已经支持了免费私人仓库，好多学习成才就扔到私人仓库放着了。所以写博客的时间就变少了。<br />以下是一些小伙伴反馈的截图：<br />
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181219923-2060636615.png)
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181232739-454041306.png)
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181239104-93189428.png)
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181247796-136937370.png)
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181252930-872028170.png)
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181302573-1145725810.png)
<br />
<a name="1vz4q"></a>
### 主题预览
地址 [https://www.cnblogs.com/loveincode/](https://www.cnblogs.com/loveincode/)
<a name="1"></a>
#### 1 首页
<a name="dLLNR"></a>
##### 复杂版
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802180913205-1092100004.png)

<a name="0kmiK"></a>
##### 简单版
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802180940988-262397401.png)

<a name="XdTlM"></a>
#### 2 文章详情页
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181012809-4105248.png)
<br />进度条，More/Simple按钮，菜单导航，返回最上按钮
<a name="SiJY0"></a>
#### 3 评论区
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181031088-514633850.png)


<a name="X7hka"></a>
### 改造
废话不多说，直接上码，很简单的一些前端代码，很久没管了，也很久没碰js css这些了，整理一下给大家，希望大家自取就行，有问题可以评论，也可以自行升级：<br />

<a name="fISmW"></a>
#### 1 首先博客皮肤选择 SimpleMemory
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181056771-894540185.png)

#### 2 页面定制css代码
```css
.postTitle21 {
	width: 100%;
	display: block;
	line-height: 1.5em;
	font-weight: 700;
	overflow: visible;
	font-size: 15px;
	text-shadow: #f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
}

.menu {
	font-size: 15px;
	color: red;
}

body {
	background-image: url(http://images.cnblogs.com/cnblogs_com/loveincode/1084341/o_LakePukaki.jpg);
	/*background-image: url(http://images.cnblogs.com/cnblogs_com/loveincode/1084341/o_loveincode.jpg);*/

	background-size: 100% 100%;
	background-attachment: fixed;
	background-color: rgb(223, 245, 232);
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
    /* -webkit-background-size: cover; */
	-moz-background-size: cover;
	background-size: cover;
}

#topdiv {
 /*页首内容*/
	display: none;
}

#cnblogs_post_body img {
    /*图片*/
	max-width: 950px;
}

#cnblogs_post_body p {
	margin: 2px auto;
	font-size: 1.1em;
	text-indent: 0;
	font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
	/*font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";*/
}

#sideBar {
 /*侧边栏字体*/
	font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";
  display: none;
}

#Header1_HeaderTitle {
 /*博客名*/
	font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";
	text-decoration: none;
}

#home {
	margin-top: 20px;
	width: 60%;
	background-color: rgba(255, 255, 255, 0.8);
       /*background-color: white;*/
	/*font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";*/
	border-radius: 10px;
}

#.c_b_p_desc {
 /*摘要*/
	font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";
}

#navigator {
	display: none;
}

#ad_t2 {
	display: none;
}

#cnblogs_c1 {
	display: none;
}

#under_post_news {
	display: none;
}

#under_post_kb {
	display: none;
}

#cnblogs_c2 {
	display: none;
}

#comment_form_container .comment_textarea {
 /*评论框*/
	width: 97%;
	border-radius: 10px;
	border: 1px solid #21759b;
	background: azure;
}

#footer {
	margin-top: 0px;
	margin-bottom: -20px;
}

#commentbox_opt>a {
	width: 100px;
	height: 28px;
	padding-top: 10px;
	font-size: 14px;
	color: #fff;
	text-align: -webkit-center;
	background: #21759b;
	border-radius: 3px;
	-moz-border-radius: 3px;
	-moz-transition: all 0.4s ease;
	-o-transition: all 0.4s ease;
	-ms-transition: all 0.4s ease;
	display: inline-block;
	vertical-align: top;
}

#comment_form_container p {
	text-align: center;
}

#topics .postDesc {
	text-align: right;
}

#comment_nav {
	display: none;
}

#back-to-top {
	background-image: url(https://files.cnblogs.com/files/loveincode/totop1.ico);
	width: 52px;
	height: 50px;
	overflow: hidden;
	position: fixed;
	right: 20px;
	bottom: 13px;
	z-index: 1000;
	cursor: pointer;
}

#blog-news {
	text-align: center;
}

#profile_block {
	//display: none;
	margin-top: 19px;
	line-height: 1.5;
	text-align: left;
	font-size: larger;
	margin-left: 40px;
}

.postBody p, .postCon p {
	text-indent: 2em;
	margin: 0 auto 1em auto;
	font-family: -webkit-body;
}

.liScore,.liRank {
	color: cadetblue;
}

.c_b_p_desc {
	font-size: 14px;
	line-height: 1.7;
	/*font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";*/
}

.entrylistItem {
	min-height: 20px;
	_height: 20px;
	margin-bottom: 0px;
	padding-bottom: 0px;
	padding-top: 0px;
	width: 100%;
}

.entrylistPostSummary {
	display: none;
}

.entrylistItemPostDesc {
	//display: none;
	text-align: right;
}

#con {
	display: block;
	position: fixed;
	color: white;
	color: #21759b;
	border: 1px solid #21759b;
	background: azure;
	border-radius: 10px;
	padding: 5px;
	font-size: 15px;
	font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";
	right: 55px;
	top: 105px;
	cursor: pointer;
}

#main {
	margin-top: 10px;
}

#mainContent {
 /*文章内容*/
	margin-left: 0px;
  width: 100%;
}

#topicListFooter {
	display: none;
}



#mainContent .forFlow {
	margin-left: 0px;
}

#cnblogs_post_body h1 {
	font-size: 23px;
	font-weight: bold;
	line-height: 1.5;
	margin: 10px 0;
	color: #ffffff;
	border-left: 8px solid #3186ad;
	border-radius: 10px;
	padding: 5px 8px;
	background-color: #3186ad;
}

#cnblogs_post_body h2 {
	font-size: 20px;
	font-weight: bold;
	line-height: 1.5;
	margin: 10px 0;
	color: #3480a2;
	border-left: 5px solid #2b98ca;
	padding: 2px 5px;
	background-color: #f5f5f5;
}

#cnblogs_post_body h3 {
	font-size: 16px;
	font-weight: bold;
	line-height: 1.5;
	margin: 10px 0;
	color: #3080a5;
	padding: 0px 2px;
}

.day .postTitle a:link, .postTitle a:visited, .postTitle a:active {
	color: #21759b;
	font-size: 16px;
 /* border-bottom: 2px solid #21759b; */
	transition: all 0.4s linear 0s;
}

.postTitle a:link, .postTitle a:visited, .postTitle a:active {
	color: #21759b;
	font-size: 20px;
 /* border-bottom: 2px solid #21759b; */
	transition: all 0.4s linear 0s;
}

#topics .postTitle {
 /*文章标题*/
	border: 0px;
	font-size: 130%;
	font-weight: bold;
	float: left;
	line-height: 1.5;
	width: 100%;
	text-align: center;
}

.day .postTitle {
 /*首页文章标题*/
	border-left: 0px solid #21759b;
	margin-bottom: 0px;
	font-size: 20px;
        /* margin-top: 37px; */
	float: right;
	width: 100%;
	clear: both;
	text-align: center;
 /* margin-right: -90px; */
}

.postDesc {
 /*首页文章时间*/ /*display:none;*/
	font-size: 13px;
	background: url(images/posted_time.png) no-repeat 0 20px;
	color: #757575;
	float: left;
	width: 100%;
	clear: both;
	text-align: left;
	padding-left: 20px;
	padding-right: 5px;
	margin-top: 5px;
	line-height: 1.5;
	text-align: center;
}

#homepage_top_pager {
 /*top翻页*/
	display: none;
}

.pager {
	text-align: right;
	margin-right: 10px;
	text-align: center;
	color: #2e6ab1;
	font-size: 14px;
	margin: 4em 0 1em;
	line-height: 1.6;
}

#nav_next_page a, .pager a {
 /*翻页样式*/
	box-shadow: 0 1px 3px #3671a5;
	border: 1px solid #3671a5;
	background: #3671a5;
	color: white;
	transition: all 0.4s linear 0s;
	display: inline-block;
	padding: 0px 6px;
	border: 0 none;
	box-shadow: none;
	border-radius: 10px;
 /* border-bottom: 2px solid #3671a5; */ /* font-size: 14px; */ /* color: #fff; */ /* background: #3671a5; */
}

#nav_next_page > a {
	padding: 5px 12px;
}

.pager a:hover {
	background: rgba(82, 168, 236, 0.8);
}

.topicListFooter {
 /*首页 下一页div*/
	text-align: center;
	margin-right: 10px;
	margin-top: 10px;
}

#blogTitle {
 /*博客标题*/
	height: 60px;
	clear: both;
	text-align: center;
}

#blogTitle h1 {
	font-size: 35px;
	font-weight: bold;
	line-height: 1.5em;
	margin-top: -30px;
}

#blogTitle h2 {
 /*博客副标题*/
	font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";
	font-size: 10px;
	float: inherit;
	;
}

.cnblogs_code {
 /*代码*/
	border: 1.5px solid #DDD;
	border-left: 3px solid #6CE26C;
	background-color: #E1FFFC;
}

.cnblogs_code div {
	background-color: #E1FFFC;
}

.cnblogs_code pre {
	background-color: #E1FFFC;
	border: solid 0px #ccc;
}

.dayTitle {
 /*日期title*/
	    /* display: block; */
	display: block;
	border: 0px solid #21759b;
    /* background: azure; */
	background: rgba(240, 255, 255, 0);
	border-radius: 10px;
	font-size: 12px;
	height: 20px;
    /* line-height: 1.5; */
	margin: 0px;
	margin-top: 0px;
	text-align: center;
    /* width: 103px; */
	margin-left: 0px;
	clear: both;
	position: relative;
    /* position: absolute; */
	top: 0px;
}

.dayTitle a {
	color: #21759b;
	display: flow-root;
	margin-top: 6.5px;
	width: 100px;
}

.c_b_p_desc_readmore {
 /*阅读全文*/
	display: block;
	padding-top: 5px;
	text-align: center;
}

#preinfo {
	font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}

#div_digg {
 /*推荐*/ /*display: none;*/
	float: right;
	margin-bottom: 10px;
	margin-right: 30px;
	font-size: 12px;
	width: 125px;
	text-align: center;
	position: fixed;
	color: white;
	color: #21759b;
 /* border: 1px solid #21759b; */ /* background: azure; */
	border-radius: 10px;
	padding: 5px;
	font-size: 15px;
	font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";
	right: 230px;
	bottom: -10px;
	cursor: pointer;
	margin-top: 10px;
}

.diggit {
 /*推荐*/
	float: left;
	width: 46px;
	border: 0px solid #21759b;
	height: 48px;
	background: url(https://files.cnblogs.com/files/loveincode/dianup_43.ico) no-repeat;
	text-align: center;
 /* cursor: pointer; */
	margin-top: 2px;
	padding-top: 5px;
	margin-left: 39px;
}

#digg_tips {
	color: #21759b;
}

.buryit {
 /*反对*/
	display: none;
}

#commentform_title {
 /*发表评论*/
	margin: 0px 0 0px;
	border-bottom: 0px solid #cccccc;
	background-image: none;
	padding: 0;
	text-align: center;
}

#author_profile {
 /*作者信息*/
	display: none;
}

#green_channel {
 /*分享按钮*/
	margin: auto;
	border: silver 0px dashed;
}

#green_channel #green_channel_digg {
 /*好文要顶*/ /*background-color: #2daebf;*/ /*position: fixed;*/ /*right: 280px;*/ /*bottom: 20px;*/
}

.feedbackItem {
 /*评论栏*/
	margin-top: 15px;
	border: 1px solid #21759b;
	background: azure;
	border-radius: 10px;
}

.feedbackCon {
 /*评论内*/
	border-bottom: 0px solid #EEE;
}

.body_right img {
 /*评论头像*/
	border: 0;
	border-radius: 40px;
	-webkit-transition: all 0.6s ease-out;
	-moz-transition: all 0.5s ease-out;
	-ms-transition: all 0.5s ease-out;
	-o-transition: all 0.5s ease-out;
	transition: all 0.5s ease-out;
}

.blog_comment_body {
	word-wrap: break-word;
	overflow: hidden;
	padding-left: 10px;
	padding-top: 8px;
}

#div_digg .diggnum {
 /*推荐数量*/
	line-height: 3em!important;
	color: white;
	padding-left: 2px;
	margin-top: 2px;
}

.diggword {
    /*推荐文字*/
	margin-top: 0px;
}

#aboutme {
	background-image: radial-gradient(ellipse farthest-corner at center top, #0c9292 0%, #0c5a5a 100%);
	color: white;
}

img[data-action="zoom"] {
	cursor: pointer;
	cursor: -webkit-zoom-in;
	cursor: -moz-zoom-in;
}

.zoom-img, .zoom-img-wrap {
	position: relative;
	z-index: 666;
	-webkit-transition: all 300ms;
	-o-transition: all 300ms;
	transition: all 300ms;
}

img.zoom-img {
	cursor: pointer;
	cursor: -webkit-zoom-out;
	cursor: -moz-zoom-out;
}

.zoom-overlay {
	z-index: 420;
	background: #fff;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
	filter: "alpha(opacity=0)";
	opacity: 0;
	-webkit-transition: opacity 300ms;
	-o-transition: opacity 300ms;
	transition: opacity 300ms;
}

.zoom-overlay-open .zoom-overlay {
	filter: "alpha(opacity=100)";
	opacity: 1;
}

.zoom-overlay-open, .zoom-overlay-transitioning {
	cursor: default;
}

.c_b_p_desc img {
 /*侧边栏图片*/
	display: block;
}

#digg_tips {
	visibility: hidden;
}

/* #sidebar_topviewedposts {
	margin-top: -110px;
} */

.postSeparator {
	display: none;
}

.postCon a:link, .postCon a:visited, .postCon a:active {
 /* 阅读全文 */ /* text-decoration: underline; */
	color: #3671a5;
	font-size: 15px;
 /*font-family: cursive;*/
}

.postCon a:link, .postCon a:active {
 /* text-decoration: underline; */ /*color: #6ce26c;*/
} /*进度条*/.read-state {
	border-top: 3px solid #b7e1f5;
	display: block;
	transition: width .2s linear 0s;
	position: fixed;
	width: 0px;
	top: 0;
	left: 0;
	z-index: 1;
}

#githubimg {
	top: 0;
} /*代码css*/.code {
	border: 1px solid #ccc;
	padding: 5px;
	background: #eee;
	color: #004080;
	overflow: auto;
	font-family: Consolas "Courier New" Fixedsys;
}

.longcode {
	border: 1px solid #ccc;
	padding: 5px;
	background: #eee;
	color: #004080;
	overflow: auto;
	height: 200px;
	font-family: Consolas "Courier New" Fixedsys;
}

.console {
	border: 1px solid #ccc;
	padding: 2px;
	background: #000;
	color: #ccc;
	overflow: auto;
	font-family: "Verdana";
}

pre {
	border: solid 1px #ccc;
	padding: 5px;
	overflow: auto;
	background: #eee;
	color: #004080;
	font-family: Consolas "Courier New" Fixedsys;
}

.code {
}

.longcode {
	height: 200px;
}

.console {
	background: #000;
	color: #ccc;
	font-family: "Verdana";
}

#cnzz_stat_icon_1264359939 {
	/*display: none;*/
}

.day {
    /* min-height: 10px; */
	_height: 10px;
	margin-bottom: 5px;
	padding-bottom: 0px;
	position: relative;
	border-left: 2px dotted #21759b;
}

.day>.postDesc {
	display: none;
}

.postCon {
	display: none;
}

.newsItem, .catListEssay, .catListLink, .catListNoteBook, .catListTag, .catListPostCategory, .catListPostArchive, .catListImageCategory, .catListArticleArchive, .catListView, .catListFeedback, .mySearch, .catListComment, .catListBlogRank, .catList, .catListArticleCategory {
	background: rgba(255, 255, 255, 0.15);
	-webkit-box-shadow: 1px 2px 3px #ddd;
	box-shadow: 2px 5px 0px #ddd;
	margin-bottom: 30px;
	word-wrap: break-word;
	border-radius: 10px;
	margin-top: 10px;
	padding-bottom: 10px;
	border: 1px solid #ddd;
}

#blog-sidecolumn h3, .newsItem h3 {
	padding-bottom: 10px;
	padding-left: 20px;
	font-size: 16px;
	border-bottom: 1px solid #ddd;
	font-weight: normal;
}

#blog-sidecolumn ul, .newsItem #blog-news {
	font-size: 0.9em;
	padding: 15px 20px;
}

.gallery img {
	max-width: 960px;
	height: unset;
}
.login_tips {
    background-image: url(#);
}
```
<a name="9Zm9l"></a>
#### 3 博客侧边栏公告(支持HTML代码)
```html
<script src="https://cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<link href="https://files.cnblogs.com/files/loveincode/toolbar.css" rel="stylesheet">
<style>
#sideToolbar {
    opacity: 0.8;
    position: fixed;
    bottom: -20px;
    right: 1%;
    width: 270px;
    height: 440px;
    /*font-family: "Comic Sans MS","Helvetica","Microsoft Yahei","Verdana","Arial","sans-serif";*/
}
</style>
<!--<script src="https://files.cnblogs.com/files/loveincode/jquery.min.js"></script>
-->
<script src="https://files.cnblogs.com/files/loveincode/con1.js"></script>
<script src="https://files.cnblogs.com/files/loveincode/tool.bar.js"></script>
<script src="https://files.cnblogs.com/files/loveincode/toolbar1.js"></script>
<script src="https://files.cnblogs.com/files/loveincode/C.omments.js"></script>
<!--
//<script src="https://files.cnblogs.com/files/loveincode/jquery.min.js"></script>
//
<script src="https://files.cnblogs.com/files/loveincode/transition.js"></script>
//
<script src="https://files.cnblogs.com/files/loveincode/zoom.js"></script>
-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
<!-- GoStats Simple HTML Based Code -->
博客人气：
<a target="_blank" title="web site traffic statistics" href="https://www.gostats.org"><img alt="web site traffic statistics" src="//www.gostats.org/0.png?a=601070246&ct=7&ci=3" style="border-width:0"/></a>
<!-- End GoStats Simple HTML Based Code -->人<!--<i class="fa fa-user fa-2x" style="color:#21759b" ></i>-->
</br>

<br/>
<img height="150" width="150" src="https://files.cnblogs.com/files/loveincode/Dragonball.ico">
<br/>
<i class="fa fa-map-marker fa-2x" style="color:#21759b"></i>&nbsp;蜀郡(成都)人  今混迹魔都
<br/>
<br/>
<link href="https://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<a target="_blank" href="https://github.com/loveincode" title="github"><i class="fa fa-github fa-2x"></i></a>
&nbsp;
<a target="_blank" href="mailto:huonevan@gmail.com" title="mail"><i class="fa fa-envelope-o fa-2x"></i></a>
&nbsp;
<a href="#" title="2017届毕业 软件工程"><i class="fa fa-university fa-2x"></i></a>
&nbsp;
<a href="#" title="centos"><i class="fa fa-linux  fa-2x"></i></a>
&nbsp;
<a href="https://www.cnblogs.com/loveincode/p/7286471.html" title="文章归档"><i class="fa fa-file-text fa-2x"></i></a>
</br>
<br/>

```
<a name="8xhu8"></a>
#### 4 页脚Html代码
```html
<script language="javascript" type="text/javascript">
//给img添加属性data-action="zoom"
/*
function getimg(){
   var pic = document.getElementsByTagName('img');
   for(i=0;i<pic.length;i++){
      // pic[i].setAttribute('data-action','zoom');
   }
}
getimg();
*/
//事件处理程序兼容写法
function addEvent(target,type,handler){
    if(target.addEventListener){
        target.addEventListener(type,handler,false);
    }else{
        target.attachEvent('on'+type,function(event){
            return handler.call(target,event);
        });
    }
}
(function(){
	var H;
	addEvent(window,'load',function(){
                var v111= document.getElementById('cnblogs_post_body');
                var postBody = $("body");
                var v2 = $('.cnblogs_post_body');
                if(v2!=null){
                    console.log("v2"+v2.css('height'));
                }
                if(v111!=null){
                    $("#postBody").max = H = cnblogs_post_body.clientHeight;
                    console.log("H"+H);
    console.log("scrollHeight"+cnblogs_post_body. scrollHeight);
                }
	});
	addEvent(window,'scroll',function(){
                if(H!=null){
		var h = document.documentElement.scrollTop || document.body.scrollTop;
                if(H-h<400){
                     h = H;
                }
                var radio = (h/H >= 1) ? 1 : h/H;
                var heightrate = Math.floor(100*radio);
		//$("#readState").style.width = heightrate+'%';
               var main111 = document.getElementById('readState');
               main111.style.width = heightrate+'%';
               }
	});
})();

function GenerateContentList()
{
    var jquery_h3_list = $('#cnblogs_post_body h1');
    if(jquery_h3_list.length>0)
    {
        var content = '<a name="_labelTop"></a>';
        content    += '<div id="navCategory">';
        content    += '<p style="font-size:16px"><b>章节目录</b></p>';
        content    += '<ul>';
        for(var i =0;i<jquery_h3_list.length;i++)
        {
            var go_to_top = '<div style="text-align: right"><a name="_label' + i + '"></a></div>';
            $(jquery_h3_list[i]).before(go_to_top);
            var li_content = '<li><a href="#_label' + i + ' " style="text-decoration: inherit;" >' + $(jquery_h3_list[i]).text() + '</a></li>';
            content += li_content;
        }
        content    += '</ul>';
        content    += '</div>';
        if($('#cnblogs_post_body').length != 0 )
        {
            $($('#cnblogs_post_body')[0]).prepend(content);
        }
    }
}
GenerateContentList();
</script>
<div style="margin-top:-40px;margin-bottom:-20px;">
	<center>
	<font color="#757575">
最简单即最美
	<br/>
有了信仰，自己要坚持努力 2017.07.09 21:34
	</font>
	<br/>
	<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1264359939'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1264359939%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
	</center>
</div>
<br/>
<p>
	<a id="back-to-top" title='返回顶部'><span></span></a>
</p>
<script type="text/javascript">
$(document).ready(function(){
    //首先将#back-to-top隐藏
    $("#back-to-top").hide();
    //当滚动条的位置处于距顶部150像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>150){
                $("#back-to-top").fadeIn(500);
            }
            else{
                $("#back-to-top").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},150);
            return false;
        });
    });
});
$(document).ready(function(){
	$('#cnblogs_post_body pre').find('>code').parent().css({'border':'dashed 1px #aaa','border-left':'solid 2px #6CE26C'});
	$("#cnblogs_post_body").append('<br /><center><hr />欢迎热爱Java的小伙伴学习交流 微信：9088584【验证暗号：Java后端loveincode 】<br/>欢迎同行与我交换<b>友链</b>，请邮箱联系（huonevan@gmail.com）如果你觉得博客内容有帮助，请收藏书签。<br/><b>版权声明</b>：转载文章之后必须在文章页面给出<b><font color="red">原文连接</font></b>（<a href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh" target="_blank">创意共享3.0许可证</a>）</center>');
});
</script>
<script type="text/javascript" src="https://files.cnblogs.com/files/loveincode/canvas-nest..min.js"></script>

```
<a name="5"></a>
#### 5 页首Html代码
```html
<script language="javascript" type="text/javascript">
//修改title icon
console.log($("title").html());
var stitle = $("title").html();
stitle = stitle.replace(/ - 博客园/g, "'s blogs - To strive, to seek, to find, and not to yield.");
console.log(stitle);
document.title=stitle;
//document.title="loveincode - To strive, to seek, to find, and not to yield.";
var link = document.head.querySelector("link");
console.log(link);
//link.href = "https://files.cnblogs.com/files/loveincode/yu.gif";

var gifURL = 'https://files.cnblogs.com/files/loveincode/Dragonball.ico',
    linkTag = $('<link href="' + gifURL + '" rel="shortcut icon" />');
// 请看清楚，是动态将link标签添加到head里
$($('head')[0]).append(linkTag);
</script>
<div class="read-state" id="readState" style="width: 0%;"></div>

<div id="topdiv" style="margin-left: 0px">
	<center>
<br>
<font size="6"  color="#757575"><a href="https://loveincode.cnblogs.com/" style="color:#757575;font-family: cursive;">将琴存诗</a> </font><br/>
<!--<hr width="150px"  style="FILTER: alpha(opacity=0,finishopacity=100,style=1)" width="80%" color=#757575 SIZE=1>-->
<font color="#ffffff">
<a href="https://www.cnblogs.com/" target="_blank" style="color:#ffffff;">
人生</a>
可以不要那么
<font size="3"><b>
<font color="#CD00CD">璀</font>
<font color="#00FF00">璨</font>
<font color="red">耀</font>
<font color="blue">眼</font></b>
</font>
，只需要有
<a href="https://i.cnblogs.com/EditPosts.aspx?opt=1" target="_blank" style="color:#ffffff;">
一个</a>
<font class="id" size="4" >　平凡的梦想　</font>
<a href="https://i.cnblogs.com/" target="_blank" style="color:#ffffff;">
足以</a>
。—— loveincode  -_^</font>
<a style="margin-left:20px" href="http://feed.cnblogs.com/blog/u/185616/rss">
<img src="https://files.cnblogs.com/files/loveincode/rss.ico"><font size="4"  color="#fc6423">RSS</font></a>
<br/>
<!--<hr width="550px" size="1px">-->
</form>
</center></div>


<a target="_blank" href="https://github.com/loveincode"><img id="githubimg" style="position: absolute;   opacity: 0.99;  z-index:999; left: 0; border: 0;" src="https://images.cnblogs.com/cnblogs_com/loveincode/1060894/o_github.png" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png"></a>

```
<a name="JaW1y"></a>
#### 6 自定义
以上代码里有些含有js，img代码是我上传到博客园文件中的，如
![](https://img2020.cnblogs.com/blog/632650/202008/632650-20200802181118140-561058994.png)
<br />大家可以自行修改，可以替换成自己想要的img，背景图，图标之类的，或者自行改造。<br />
