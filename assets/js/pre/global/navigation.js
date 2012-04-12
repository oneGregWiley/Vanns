$('.menubar li').click(function(){
	if (!$(this).hasClass('active')){
		if ($('#subnav').is(':hidden')){
			$('#subnav').slideDown(100, function(){
				$('.nav-marketing').fadeIn(1000);
			});
		} 	
		$(this).addClass('active');
	} else if ($(this).hasClass('active')){
		$('#subnav').slideUp(100, function() {
			$('.nav-marketing').hide();
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
		$('#subnav').slideUp(100, function() {
			$('.nav-marketing').hide();
		}); 

		$('.menubar li').removeClass('active');
	}
});