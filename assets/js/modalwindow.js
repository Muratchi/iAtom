$(function(){
	var modal_window = $('.content-wrap');
	var black_out = $('.black-out');
	var button = $('.role-item');
	var cancel = $('.cancel-wrap');

	button.click(function(){
		index = $(this).index();
		modal_window.fadeOut();
		black_out.fadeIn();
		modal_window.eq(index).fadeIn();
	});
	cancel.click(function(){
		black_out.fadeOut();
		modal_window.fadeOut();
	});
});