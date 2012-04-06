$('.menubar li').click(function(){
	$(this).siblings().stop(true,true);
	var navToOpen = $(this).attr('class');
	$('#subnav').slideDown();
});