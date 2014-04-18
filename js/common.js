var pathname = window.location.pathname;
var page_pathname = pathname.split('/');
var check_hash = ($(location).attr('hash'));
var dudamobile_home = (page_pathname[1] === "" );
var non_product_page =	!dudamobile_home &&
						page_pathname[1] !== ('templates') &&
						page_pathname[1] !== ('features') &&
						page_pathname[1] !== ('plans') &&
						(page_pathname[1] !== ('dudaone') && page_pathname.length >= 2);
var partner_page = (page_pathname[1] === ('website-design-reseller-program') || page_pathname[2] === ('website-design-reseller-program'));
var inner_page = (non_product_page) ||
				 (partner_page) ||
				 (page_pathname[1] === ('templates-2')) ||
				 (page_pathname[1] === ('templates')) ||
				 (page_pathname[1] === ('features')) ||
				 (page_pathname[1] === ('plans')) ||
				 (page_pathname[1] === ('dudaone') && page_pathname.length >= 3);
var is_dudaone = (pathname.indexOf('dudaone') > -1);
var is_tablet_or_smaller = ($(window).width() < 1025);
var is_mobile_or_smaller = ($(window).width() < 640);
var domain = "http://my.dudamobile.com";
if(location.href.indexOf('duda-edit')> -1) {
	domain = "http://my-test.dudamobile.com";
}

//Determine if intro should be shown 
if(inner_page) {
	$('.one-home .row.p150-0-0').css({'padding-top': '75px'});
	$('.mobile-home .row.p150-0-0').css({'padding-top': '75px'});
	$('.top-bar.small-choice').css({'display': 'block', 'opacity':'.95'});
	$('.p20-0').removeClass('morphin-time');
	console.log('no intro');
} else if (is_tablet_or_smaller) {
	$('.one-home .row.p150-0-0').css({'padding-top': '75px'});
	$('.mobile-home .row.p150-0-0').css({'padding-top': '75px'});
	$('.top-bar.small-choice').css({'display': 'none', 'opacity':'0'});
	$('.p20-0').removeClass('morphin-time');
	console.log('smallscreen');
} else {
	$('.top-bar-section.large-choice-top').css({'display': 'block'});
}

// Change to small header on scroll (exception for small screens and inner pages)
if (!is_tablet_or_smaller || !inner_page) {
$('.morphin-time').waypoint(function(direction){
	if(direction === 'down') {
		$('.top-bar-section.large-choice-top').animate({height: '0', opacity: '0'}, 300);
		$('.one-home .row.p150-0-0').addClass('large-choice-top-padding');
		$('.mobile-home .row.p150-0-0').addClass('large-choice-top-padding');
		$('.top-bar.small-choice').css({'display': 'block'}).animate({opacity:'.95'}, 600);
	} else if(direction === 'up'){
		$('.top-bar-section.large-choice-top').animate({height: '150', opacity: '1'}, 300);
		$('.one-home .row.p150-0-0').removeClass('large-choice-top-padding');
		$('.mobile-home .row.p150-0-0').removeClass('large-choice-top-padding');
		$('.top-bar.small-choice').css({'display': 'none', 'opacity': '0'});
	}
}, {
	offset: 260
});
} else {
	$('.small-choice.top-bar').slideDown();
}

//Slide up big nav on click
$('.top-bar-section.large-choice-top ul li').on('click', function(event){
	var clicked = $(this).children('a').attr('data');
	if (clicked === 'one') { //if dudaone link is clicked 
		if (is_dudaone) {
			event.preventDefault();
			$('.top-bar-section.large-choice-top').animate({height: '0', opacity: '0'}, 300);
			$('.one-home .row.p150-0-0').addClass('large-choice-top-padding');
			$('.top-bar.small-choice').css({'display': 'block'}).animate({opacity:'.95'}, 600);
			console.log('clicked is one and is dudaone');
		} else {
			 window.location.href = $(this).children('a').prop('href');
			console.log('I should link to dudaone');
		}
	} else { //if dudamobile link is clicked	
		if(!is_dudaone) {
			event.preventDefault();
			$('.top-bar-section.large-choice-top').animate({height: '0', opacity: '0'}, 300);
			$('.mobile-home .row.p150-0-0').addClass('large-choice-top-padding');
			$('.top-bar.small-choice').css({'display': 'block'}).animate({opacity:'.95'}, 600);
			console.log('clicked is mobile and is on dudamobile');
		} else {
			 window.location.href = $(this).children('a').prop('href');
			console.log('I should link to dudamobile');
		}
	}
});

//Determine if DudaOne or DudaMobile Page
if (is_dudaone) {
	$('.top-bar-section.large-choice-top ul li.one').addClass('active-left');
	$('.top-bar-section.slide-down-nav ul li.one').addClass('active-left');
	$('.arrow-down, .arrow-big-down').addClass('one');
	$('.top-page-toggle.one-page').show();
} else {
	$('.top-bar-section.large-choice-top ul li.mobile').addClass('active-left');
	$('.top-bar-section.slide-down-nav ul li.mobile').addClass('active-left');
	$('.arrow-down, .arrow-big-down').addClass('mobile');
	$('.top-page-toggle.mobile-page').show();
}

// Non-product pages header
if (non_product_page) {
	$('.top-bar-section.slide-down-nav ul.left li').removeClass('active-left');
	$('.arrow-down, .arrow-big-down').hide();
}

if (page_pathname[1] === 'careers' ||
		page_pathname[1] === 'about' ||
		page_pathname[1] === 'website-design-reseller-program' ||
		page_pathname[1] === 'compare') {
	$('.mobile-page').hide();
}

// Partner page nav
if (partner_page) {
	$('.top-bar-section.slide-down-nav ul.left li').removeClass('active-left');
	$('.arrow-down, .arrow-big-down').hide();
}

//Set active on partner pages 

if ('.partners'.length > 0) {
	if (check_hash == "#design" || check_hash == "") {
		$('.partner-tabs.design').addClass('active');
		$('#design').addClass('active');

	} else if (check_hash == "#white") {
		$('.partner-tabs.white').addClass('active');
		$('#white').addClass('active');

	} else {
		$('.partner-tabs.compare').addClass('active');
		$('#compare').addClass('active');
	}
}

//Mobile and tablet fixes
if (is_tablet_or_smaller) {
	$('.top-bar').parent().removeClass('fixed');
	$('.top-bar-section.slide-down-nav').show();
	$('.template').removeClass('fixed');

	if (is_dudaone) {
		$('nav.tab-bar p a[href="/dudaone"] img').addClass("on").attr("src","http://dm-util.s3.amazonaws.com/duda_website/img/menu/one-on.png");
	} else {
		$('nav.tab-bar p a[href="/"] img').addClass("on").attr("src","http://dm-util.s3.amazonaws.com/duda_website/img/menu/mobile-on.png");
	}
}

if (is_tablet_or_smaller) {
	$('.arrow-slide').hide();
}

$('.in-menu-close').on('click',function(e){
	e.preventDefault();
	$('.off-canvas-wrap').removeClass('move-left');
});

//After-duda slide
$('.after-duda').delay(1000).animate({'right': '100px'}, 1000);

//Devices slide
$('.device-slide-2').delay(500).animate({'left':'160px'}, 800);
$('.device-slide-1').delay(500).animate({'right': '220px'}, 800);

//Parallax Images
$(window).stellar({horizontalScrolling: false});

// Add Active to Page Links
$('nav section ul.right li.one-page a[href*="' + page_pathname[2] + '"]').parent().addClass('active-right');
$('nav section ul.right li.mobile-page a[href*="' + page_pathname[1] + '"]').parent().addClass('active-right');
$('aside.left-off-canvas-menu ul li a[href="' + pathname + '"]').parent().addClass('active');
	
//Add Placeholder to Joomla Modules 

$('form.convert-form input[type=text]').attr("placeholder", "Enter your URL");

// Keep gifs from caching & firing at proper time

$('.gif-1').attr('src','/templates/duda_2014/img/home/one/header.gif?rnd=' + Math.random() + '');


$('.gif-3').waypoint(function(direction){
if (direction === 'down') {
	$('.gif-3').attr('src', '/templates/img/home/mobile/desktop-to-mobile-gif.gif?rnd=' + Math.random() + '').fadeIn();
}
}, {
	offset: 850
});

//Fade in images effect
if (!is_tablet_or_smaller) {
	$('.fade-img').parent().waypoint(function(){
	$(this).children('.fade-img').addClass('inview');
}, {
	offset: 700
});
} else {
	$('.fade-img').css({'opacity': '1'});
}

//Read More & FAQ Trigger
if('.faq'.length) {
	$(".faq > .answer").hide();
	$(".question > .faq_trigger").on("click",function(){
		$(this).parent().next().slideToggle();
});
}

$(".more").hide();
$("a.read-more").on("click",function(){
	$("a.read-more").hide();
	$(".more").fadeIn();
});

//Pricing for tablet and mobile
if(is_tablet_or_smaller) {
	var pricingTable = $('div.mobile-pricing ul.pricing-table'),
	pricingList = $('li.bullet-item');

	$(pricingTable).find(pricingList).hide();
	$(pricingTable).on('click',function(){
		$(this).find(pricingList).slideToggle();
		$(this).find('div').toggleClass('small-arrow-down small-arrow-up');
	});
}

//DudaMobile Convert Form
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

var dudaUrl = getURLParameter('duda_site_url');
if (dudaUrl != null && dudaUrl !== 'null') {
	$("input[name='dm_site_url']").val(dudaUrl);
	$(".convert-form").submit();
}
