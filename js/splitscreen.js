	var dmSplitScreen = pathname.indexOf('dudamobile-split') > -1,
	d1SplitScreen = pathname.indexOf('dudaone-split') > -1;

if(dmSplitScreen || d1SplitScreen){
	var introHeight  = $(window).height() - 50,
	dudaone_button = $('.intro-choice a[data="dudaone"]'),
	dudamobile_button = $('.intro-choice a[data="dudamobile"]'),
	intro_choice = $('.intro-choice');

	//Spit Screen Get Height
	$('.intro-choice').height(introHeight);
	$('body').addClass('fixed');

	//Split Screen Fade Out

	$(dudaone_button).on('click', function(e){
		if(d1SplitScreen) {
			e.preventDefault();
			$(intro_choice).fadeOut();
			$('body').removeClass('fixed');
			$()
		}
	});

	$(dudamobile_button).on('click', function(e){
		if(dmSplitScreen) {
			e.preventDefault();
			$(intro_choice).fadeOut();
			$('body').removeClass('fixed');
		}
	});
}

if (check_hash === "#no_intro") {
	$('#homepageChoiceModal').css({'display': 'none',
									'visibility': 'hidden',
									'opacity': 0});
	$('.large-choice-top').css({'display': 'none'});
	$('.one-home .row.p150-0-0').css({'padding-top': '75px'});
	$('.mobile-home .row.p150-0-0').css({'padding-top': '75px'});
	$('.top-bar.small-choice').css({'display': 'block', 'opacity':'.95'});
	$('.p20-0').removeClass('morphin-time');
}

if (is_tablet_or_smaller) {
	intro_choice.hide();
}