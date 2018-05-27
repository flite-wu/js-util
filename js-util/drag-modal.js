var startDrag = false;
var l, t; // 设置弹出窗的 left, top 属性； 
var startX, startY;
var _this;

$(function() {
	$('body').on('mousedown', '.modal-header', function(e) {
		startDrag = true;

		startX = e.pageX;
		startY = e.pageY;
		_this = $(this).parent().parent();
		l = _this.offset().left;
		t = _this.offset().top;
		
		$(this).css('cursor', 'move');
	});

	$(document).mousemove(function(e) {
		if (startDrag) {
			var disX = e.pageX - startX;
			var disY = e.pageY - startY;
			_this.offset({
				left : l + disX,
				top : t + disY
			});

			// 防止选中文字代码
			try {
				if (document.selection) {
					if (document.selection.empty) {
						document.selection.empty();
					} else {
						document.selection = null;
					}
				} else if (window.getSelection) {
					window.getSelection().removeAllRanges();
				}
			} catch (e) {
			}
		}
	});

	$(document).mouseup(function() {
		startDrag = false;
	});

	
	
	
	;
	(function() {
		/* ------------- 调整模态框的出现事件 ------------- */
		if($(window.top.document.body).find('#contentIframe').length > 0){
			var scrT = 0, winH, iframeH, headerH, footerH;
			headerH = $(window.top.document.body).find('.header').outerHeight();
			footerH = $(window.top.document.body).find('.copyright').outerHeight();
			
			$('body').on('show.bs.modal', '.modal', function(e) {
				$(window.top.document.body).addClass('modal-open');
				iframeH = $(window.top.document.body).find('#contentIframe').outerHeight();
				
				scrT = $(window.top).scrollTop();
				winH = $(window.top).outerHeight();
				
				$(this).css({
					'top': scrT + 'px',
					'margin-top' : -(scrT > headerH ? headerH : scrT) + 'px'
				});
				
				if(winH > iframeH + headerH + footerH){
					$(this).css('height', iframeH + 'px');
				} else {
					//计算当前屏占用顶部的高度
					var t1 = 0;
					if(scrT < headerH){
						t1 = headerH - scrT;
					}
					
					//计算当前屏占用底部的高度
					var b1 = 0;
					if(scrT + winH > headerH + iframeH) {
						b1 = footerH - ((headerH + iframeH + footerH) - (scrT + winH));
					}
					
					//计算内容区在当前屏的高度
					var m1 = winH - t1 - b1;
					$(this).css('height', m1 + 'px');
				}
			});

			$('body').on('shown.bs.modal', '.modal', function(e) {
				$(window.top).scrollTop(scrT);
			});
			
			$('body').on('hide.bs.modal', '.modal', function(e) {
				$(window.top.document.body).removeClass('modal-open');
			});

			$('body').on('hidden.bs.modal', '.modal', function(e) {
				$(this).css({
							'top': 0,
							'cursor': 'defalut'
						}).find('.modal-dialog').css({
							'left' : 0, 
							'top' : 0,
							'margin-top' : 30 + 'px'
						});
			});
		}
	})();
});