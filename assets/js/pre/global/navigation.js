$('.menubar li').click(function(){
	$(this).parent().css('-webkit-box-shadow','0px 2px 2px rgba(0, 0, 0, 0.25)').css('border-bottom','0');
	if (!$(this).hasClass('active')){
		if ($('#submenu').is(':hidden')){
			$('#submenu').slideDown(100, function(){
				$('.marketing').fadeIn(1000);
			});
		} 	
		$(this).addClass('active');
	} else if ($(this).hasClass('active')){
		$('#submenu').slideUp(100, function() {
			$('.marketing').hide();
		}); 
		$(this).removeClass('active');	
	}
	$(this).siblings().stop(true,true).removeClass('active');
	var classes   = $(this).attr('class');
	    arr       = classes.split(' ');
	    navToOpen = arr.shift();
	    $('#'+navToOpen).siblings().hide();
	document.getElementById(navToOpen).style.display = 'block'; 
});

var mouseIsIn = false;

$('nav').hover(function(){
	mouseIsIn = true;
}, function(){
	mouseIsIn = false;
});

$('body').mouseup(function(){
	if(!mouseIsIn){
		$('#submenu').slideUp(100, function() {
			$('.marketing').hide();
		}); 

		$('.menubar li').removeClass('active');
	}
});