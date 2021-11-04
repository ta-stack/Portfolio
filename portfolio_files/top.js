

var spWindow = 559;
var tbWindow = 959;

$(function() {

	$('.main-slide').bxSlider({
		mode: 'fade',
		auto: true,
		speed: 3000,
		pause: 6000,
		pager: false,
		controls: false,
		touchEnabled: false,
	});
	

	//lazy load
	var mainTagline = $(".main-tagline");
	var subTagline = $(".sub-tagline");
	var aboutSecRight = $(".about-sec-right");
	
	//windowサイズ取得
	var windowWidth = document.documentElement.clientWidth;
	if(windowWidth <= spWindow) {
		//画面サイズ559以下（sp）
		setTimeout(function(){
			mainTagline.addClass('fade-in');
		},300);
		setTimeout(function(){
			subTagline.addClass('fade-in');
		},2200);
		setTimeout(function(){
			aboutSecRight.addClass('fade-in');
		},1600);

		$(window).scroll(function (){
			$('.fadein').each(function(){
				var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 120){
					$(this).addClass('scrollin');
				}
			});
		});

	} else if (windowWidth > spWindow && windowWidth <= tbWindow) {
		//画面サイズ959以下（tb）
		setTimeout(function(){
			mainTagline.addClass('fade-in');
		},300);
		setTimeout(function(){
			subTagline.addClass('fade-in');
		},2200);
		setTimeout(function(){
			aboutSecRight.addClass('fade-in');
		},1600);

		$(window).scroll(function (){
			$('.fadein').each(function(){
				var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 250){
					$(this).addClass('scrollin');
				}
			});
		});
		
	} else {
		//画面サイズ960以上（pc）
		setTimeout(function(){
			mainTagline.addClass('fade-in');
		},300);
		setTimeout(function(){
			subTagline.addClass('fade-in');
		},2400);
		setTimeout(function(){
			aboutSecRight.addClass('fade-in');
		},1600);

		$(window).scroll(function (){
			$('.fadein').each(function(){
				var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 350){
					$(this).addClass('scrollin');
				}
			});
		});
		
	}

});





