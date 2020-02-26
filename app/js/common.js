$(document).ready(function () {

	$('.hamb').on('click', function () {
		$(this).toggleClass('hamb__active');
		$('.overlay').toggleClass('overlay__active')
	});

	$('.overlay a').on('click', function () {
		$('.overlay').toggleClass('overlay__active');
		$('.hamb').toggleClass('hamb__active');
	});

	$("a[href^='#']").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({ scrollTop: destination }, 800);
	});

	$('.slider').slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		fade: true,
		pauseOnHover: false,	
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		slidesToShow: 1,
		dots: true
	});

	$('.gallery_img').slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}

		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}

		},
	]
	});

	$('.recipes_img').slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		fade: true,
		pauseOnHover: false,
		autoplaySpeed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1
	});



	$('.feedback-slider').slick({
		arrows: true,
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		autoplaySpeed: 1000,
		slidesToScroll: 1,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false
			}
		}]
	});

	// $('.feedback-mini').slick({
	// 	infinite: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	slidesToScroll: 3,
	// 	slidesToShow: 1,
	// });


	// $(".rateYo").rateYo({
	// 	rating: 3.6,
	// 	starWidth: "23px",
	// 	spacing: "5px"
	// });

let $items = $('.wine__items');
$items.isotope({
	filter: '*',
});

$('ul li').click(function () {
	$('ul .active').removeClass('active');
	$(this).addClass('active');

	let selector = $(this).attr('data-filter');

	$items.isotope({
		filter: selector,
		animationOptions: {
			duration: 500,
			animationEngine: "jquery"
		}
	});
});


	$('.menu-btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu-btn_active');
		$('.menu').toggleClass('menu_active');
	});

new WOW().init();


// flipclock

	var clock;

	$(document).ready(function () {

		clock = $('.clock').FlipClock(59, {
			clockFace: 'MinuteCounter',
			countdown: true,
			callbacks: {
				stop: function () {
					$('.message').html('<span class = "upss">Упсс, час вийшов... Але без знижки Ми Вас не відпустимо :)<span>');
				}
			}
		});
 // flipclock end 

	});
	// $('.trigger').on('click', function () {
	// 	$('.modal-wrapper').toggleClass('open');
	// 	$('.page-wrapper').toggleClass('blur-it');
	// 	return false;
	// });


	jQuery(function ($) {
		$("#phone").mask("+38(099)-999-9999");
	});


});