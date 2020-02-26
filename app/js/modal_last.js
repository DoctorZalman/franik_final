// Модальне вікно

// відкриваємо по кнопці
$('.js-button-campaign-last').click(function() { 
	
	$('.js-overlay-campaign-last').fadeIn();
	$('.js-overlay-campaign-last').addClass('disabled');
});

// закриваємо на "хрестик"
$('.js-close-campaign-last').click(function() { 
	$('.js-overlay-campaign-last').fadeOut();
	
});

// закриваємо "поза межами" вікна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign-last');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign-last').fadeOut();
	}
});

// // відкриваємо по таймеру
// $(window).on('load', function () { 
// 	setTimeout(function(){
// 		if($('.js-overlay-campaign-last').hasClass('disabled')) {
// 			return false;
// 		} else {
			
// 			$(".js-overlay-campaign-last").fadeIn();
// 		}
// 	}, 100000);
// });

