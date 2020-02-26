// Модальне вікно

// відкриваємо по кнопці
$('.js-button-campaign-mini').click(function() { 
	
	$('.js-overlay-campaign-mini').fadeIn();
	$('.js-overlay-campaign-mini').addClass('disabled');
});

// закриваємо на "хрестик"
$('.js-close-campaign-mini').click(function() { 
	$('.js-overlay-campaign-mini').fadeOut();
	
});

// закриваємо "поза межами" вікна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign-mini');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign-mini').fadeOut();
	}
});

// відкриваємо по таймеру
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign-mini').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign-mini").fadeIn();
		}
	}, 100000);
});

