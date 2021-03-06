$(document).ready(function() {

	$(".popup_form").magnificPopup();

	$(document).ready(function(){
      $('.resp_slick').slick({
        accessibility: true,   
        dots: true,
        fade: true,
      });
    });
	
	function wResize() {
		$("header").css("min-height", $(window).height());	
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	$(".phone .tab_item").not(":first").hide();
	$(".phone .wrapper .tab").click(function() {
	$(".phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".feed_header .tab_item").not(":first").hide();
	$(".feed_header .wrapper .tab").click(function() {
	$(".feed_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".feed_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "/scripts/send.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Я свяжусь с вами в ближайшее время");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close()
				ths.trigger("reset")
			}, 1000);
		});
		return false;
	});

});

// Css animation

$(window).load(function() {

	$(".tabs_header").animated("rollIn", "fadeOut");
	$(".row2 img").animated("rotateIn", "fadeOut");
	$(".adv_item").animated("fadeInLeft", "fadeOut");
	$(".adv .send").animated("zoomInRight", "fadeOut");
	$(".adv h2").animated("slideInUp", "fadeOut");
	$(".sheme h2").animated("slideInUp", "fadeOut");
	$(".resp_header h2").animated("slideInUp", "fadeOut");
	$(".resp_header p").animated("slideInUp", "fadeOut");
	$(".resp_header span").animated("bounce", "fadeOut");
	$(".slick_content img").animated("zoomIn", "fadeOut");
	$(".feed_header h2").animated("zoomIn", "fadeOut");
	$(".service h2").animated("slideInUp", "fadeOut");
	$(".service img").animated("zoomIn", "fadeOut");
	$(".service_descr span").animated("bounceIn", "fadeOut");
	$(".about img").animated("zoomIn", "fadeOut");	
	$(".about h2").animated("slideInUp", "fadeOut");

});