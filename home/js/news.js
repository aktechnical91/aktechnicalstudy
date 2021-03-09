$(document).ready(function(){

	var dd = $('#vticker').easyTicker({
		direction: 'up',
		//easing: 'easeInOutBack',
		speed: 'slow',
		interval: 2000,
		height: 'auto',
		visible: 3,
		mousePause: 0,
		controls: {
			up: '.up',
			down: '.down',
			toggle: '.toggle',
			stopText: '<i class="fa fa-play"></i>'
		}
	}).data('easyTicker');
	 
	cc = 1;
	$('.aa').click(function(){
		$('#vticker ul').append('<li>' + cc + ' Triangles can be made easily using CSS also without any images. This trick requires only div tags and some</li>');
		cc++;
	});
	
	$('.vis').click(function(){
		dd.options['visible'] = 3;
		
	});
	
	$('.visall').click(function(){
		dd.stop();
		dd.options['visible'] = 0 ;
		dd.start();
	});
	
	
	
	var dd = $('#tender').easyTicker({
		direction: 'up',
		//easing: 'easeInOutBack',
		speed: 'slow',
		interval: 4000,
		height: 'auto',
		visible: 3,
		mousePause: 0,
		controls: {
			up: '.up',
			down: '.down',
			toggle: '.toggle2',
			stopText: '<i class="fa fa-play"></i>'
		}
	}).data('easyTicker');
	 
	cc = 1;
	$('.aa').click(function(){
		$('#tender ul').append('<li>' + cc + ' Triangles can be made easily using CSS also without any images. This trick requires only div tags and some</li>');
		cc++;
	});
	
	$('.vis').click(function(){
		dd.options['visible'] = 3;
		
	});
	
	$('.visall').click(function(){
		dd.stop();
		dd.options['visible'] = 0 ;
		dd.start();
	});
	
	
});