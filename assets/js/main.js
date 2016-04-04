$(function(){
	var header = $('#nav');
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	});

	$item = $('.role-item');
	var item_num = $item.length;
	var deg = 360.0 / item_num;
	var rad = (deg*Math.PI/180.0);
		var circle_r = $item.width()*1.5;
		$item.each(function(i, elem){
			var x = Math.cos(rad*i) * circle_r + 72;
			var y = Math.sin(rad*i) * circle_r + 72;
			$(elem).css('left', x + 'px');
			$(elem).css('top', y + 'px');
		});

	$('.panel-wrap').css('width', 275*$('.event-panel').length+'px');

	// var bg_color = ['#406189','#A50308','#E89420','#7CA81C','#2981AA'];
	$('.era-tab').click(function(){
		$('.era-tab').css('background-color','#000');
		$('.era-tab').css('color','fff');
		$('.era-tab').removeClass('tab-balloon');
		$(this).delay(4000).css('background-color','#A72608');
		$(this).delay(4000).css('color','#ddd');
		$(this).delay(4000).addClass('tab-balloon');
		var era_tab_num = $(this).index();
		var era_break = $('.era-break');
		console.log(era_break.eq(era_tab_num).offset().left - $('.event-panel').eq(0).offset().left);
		console.log(era_break.eq(era_tab_num).offset().left);
		$('.panel-wrap').animate({'left' :   $('.panel-wrap').offset().left - era_break.eq(era_tab_num).offset().left+ 'px'},'fast');
	});
	
	var $prev = $('#prev'), $next = $('#next'), panel_width = 275;
	$prev.click(function(){
		var panel_left = $('.panel-wrap').offset().left;
		$('.panel-wrap').stop().animate({'left' : (panel_left - panel_width) + 'px'},'normal','easeOutCubic');
	});
	$next.click(function(){
		var panel_left = $('.panel-wrap').offset().left;
		$('.panel-wrap').stop().animate({'left' : (panel_left + panel_width) + 'px'},'normal','easeOutCubic');
	});	

	$('#particles').particleground({
    dotColor: '#bcbcbc', //ドットの色
    lineColor: '#bcbcbc', //線の色
    particleRadius: 5, //ドットの大きさ
    parallax: false,
     parallaxMultiplier: 5,
    curvedLines: true
});
});