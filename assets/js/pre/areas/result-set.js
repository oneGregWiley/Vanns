// Sticky refinement bar
var $win = $(window)
  , $refinementsBar = $('.refinements-bar')
  , refinementsBarTop = $('.refinements-bar').length && $('.refinements-bar').offset().top - 0
  , isFixed = 0

processScroll()

$win.on('scroll', processScroll)

function processScroll() {
  var i, scrollTop = $win.scrollTop()
  if (scrollTop >= refinementsBarTop && !isFixed) {
    isFixed = 1
    $refinementsBar.addClass('refinements-bar-fixed')
  } else if (scrollTop <= refinementsBarTop && isFixed) {
    isFixed = 0
    $refinementsBar.removeClass('refinements-bar-fixed')
  }
}

// Filter selected (checkmark)
function checked() {
	var parentFilter = $(this).closest('section.tab-pane').attr('id');
	if ($('#'+parentFilter+' input:checked').length > 0){
		$('a[href=#'+parentFilter+'] span').addClass('selected');
	} else {
		$('a[href=#'+parentFilter+'] span').removeClass('selected');
	}
}
$(":checkbox").click(checked);

// jQuery UI Core
//@codekit-append "../plugins/jQueryUI-core.js";

// Slider
//@codekit-append "../plugins/slider.js";