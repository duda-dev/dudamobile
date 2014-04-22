//Smooth Scroll
var scrollToTemplates = $('#templates');
$('.landing a[href$="#templates"]').on('click', function() {
	$('html, body').animate({
		scrollTop: scrollToTemplates.offset().top
	}, 800);
	return false;
});

//Hide all nav and real footer for landing pages 
if ($('.landing').length > 0 ) {
	$('.second-fixed, .footer > .row:first-of-type, .footer .large-6:first-of-type').hide();
}