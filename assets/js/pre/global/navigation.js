$.each($('#submenu .container'), function() {
    var containerHeight = $(this).height();
	//alert(containerHeight);
$(this).css("height", containerHeight);
});
$("#submenu").hide();
$('.menubar li').click(function(){
	var classes   = $(this).attr('class');
	    arr       = classes.split(' ');
	    navToOpen = arr.shift();
	    containerHeight = $('#'+navToOpen).height();
	$('#submenu').css('height',containerHeight);
	$('#submenu').css('visibility','visible');
	$('.menubar').addClass('open');
	if (!$(this).hasClass('active')){
		if ($('#submenu').is(':hidden')){
			$('#submenu').slideDown(150, function(){
				$('.marketing').fadeIn(1000);
				$(this).addClass('open');
			});
		} 	
		$(this).addClass('active');
	} else if ($(this).hasClass('active')){
		$('#submenu').removeClass('open').slideUp(150, function() {
			$('.marketing').hide();
			$('.menubar li').removeClass('active');
			$('.menubar').removeClass('open');
		}); 
		$(this).removeClass('active');	
	}
	$(this).siblings().stop(true,true).removeClass('active');
	    $('#'+navToOpen).siblings().hide();
		$('#'+navToOpen).fadeIn();
});
var mouseIsIn = false;
$('nav').hover(function(){
	mouseIsIn = true;
}, function(){
	mouseIsIn = false;
});

$('body').mouseup(function(){
	if(!mouseIsIn){
		$('#submenu').removeClass('open').slideUp(100, function() {
			$('.marketing').hide();
			$('.menubar li').removeClass('active');
			$('.menubar').removeClass('open');
		}); 
	}
});