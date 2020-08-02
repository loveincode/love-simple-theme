var a = $(document);
a.ready(function() {
	var b = $('body'),
		c = 'cnblogs_post_body',
		d = 'sideToolbar',
		e = 'sideCatalog',
		f = 'sideCatalog-catalog',
		g = 'sideCatalogBtn',
		h = 'sideToolbar-up',
		i = '<div id="sideToolbar"style="display:none;">\<div class="sideCatalogBg"id="sideCatalog">\<div id="sideCatalog-sidebar">\<div class="sideCatalog-sidebar-top"></div>\<div class="sideCatalog-sidebar-bottom"></div>\</div>\<div id="sideCatalog-catalog">\<ul class="nav"style="zoom:1">\</ul>\</div>\</div>\<a href="javascript:void(0);"id="sideCatalogBtn"class="sideCatalogBtnDisable"></a>\</div>',
		j = '',
		k = 200,
		l = 0,
		m = 0,
		n = 0,
		o, p = 18,
		q = true,
		r = true,
		s = $('#' + c);
	if (s.length === 0) {
		return
	};
	b.append(i);
	o = s.find(':header');
	if (o.length > p) {
		//r = false;
		var t = s.find('h1');
		var u = s.find('h2');
		if (t.length + u.length > p) {
			//q = false
		}
	};
	var sumsum = 0;
	o.each(function(t) {
		var u = $(this),
			v = u[0];		var title = u.text();		var text = u.text();
		u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
		if (v.localName === 'h1') {
			l++;			sumsum++;			m = 0;
			if (text.length > 20) text = text.substr(0, 20) + "...";
			j += '<li><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
		} else if (v.localName === 'h2') {
			m++;
			sumsum++;
			n = 0;
			if (q) {
				if (text.length > 18) text = text.substr(0, 18) + "...";
				j += '<li class="h2Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
			}
		} else if (v.localName === 'h3') {
			n++;
			sumsum++;
			if (r) {
				if (u.text.length > 18) u.text = u.text.substr(0, 18) + "...";
				j += '<li class="h3Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + u.text() + '</a></li>';
			}
		}
	});
	$sideToolbar = $('#' + d);
	if (sumsum == 1) {		$sideToolbar.css('display', 'none')	}
	if (sumsum == 0) {		$sideToolbar.css('display', 'none')	}
	$('#' + f + '>ul').html(j);
	b.data('spy', 'scroll');
	b.data('target', '.sideCatalogBg');
	$('body').scrollspy({		target: '.sideCatalogBg'	});
	if(window.location.href.indexOf("code") > 0){}else{$('#' + f + '>ul').html("");	}
	$sideCatelog = $('#' + e);
	$('#' + g).on('click', function() {
		if ($(this).hasClass('sideCatalogBtnDisable')) {
			$sideCatelog.css('display', 'none')
		} else {
			$sideCatelog.css('display', 'block')
		};
		$(this).toggleClass('sideCatalogBtnDisable')
	});
	$('#' + h).on('click', function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500)
	});
	a.on('scroll', function() {
		var t = a.scrollTop();
		if (t > k) {
			if (sumsum != 0) {
				$sideToolbar.css('display', 'block')
			}
		} else {
			$sideToolbar.css('display', 'none')
		}

	})
});