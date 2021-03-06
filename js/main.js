$(function() {
	//一级标签切换
	$('.first li').click(function() {
		if ($(this).attr('id') == 'btn1') {
			$('#item2').hide()
			$('#item1').fadeIn()
			$(this).addClass('label-chosen')
			$(this).siblings('li').removeClass('label-chosen')
		} else {
			$('#item1').hide()
			$('#item2').fadeIn()
			$(this).addClass('label-chosen')
			$(this).siblings('li').removeClass('label-chosen')
		}
	})
	//二级标签切换
	$('.second ul li').click(function() {
		$(this).css({
			'color': 'black',
			'background-color': '#00ffb9',
			'border': '1px solid #00ffb9'
		})
		$(this).siblings('li').removeAttr('style')
		$('#cases').hide().fadeIn()
	})
	//案例滑动
	$('#prev').click(function() {
		$('#cases').animate({
			left: '0'
		})
	})
	$('#next').click(function() {
		$('#cases').animate({
			left: '-1230px'
		}, 'swing')
	})
	//详情页
	$('#cases li').click(function() {
		$('.example').fadeIn()
		if ($(this).attr('id') == 1) {
			$('.int').show()
		} else if ($(this).attr('id') == 2) {
			$('.dom').show()
		}
	})
	$('.icon-Close').click(function() {
		$('.example').fadeOut()
		$('.int').hide()
		$('.dom').hide()
	})

})
