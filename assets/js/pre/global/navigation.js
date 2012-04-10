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
	var navToOpen = $(this).attr('class');
	
	
});