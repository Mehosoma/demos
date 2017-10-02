/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */

// ['...'] notation using to avoid names minification by Google Closure Compiler
(function($) {
  var reverse = function(value) {
    return value.split('').reverse().join('');
  };

  var defaults = {
    numberStep: function(now, tween) {
      var floored_number = Math.floor(now),
          target = $(tween.elem);

      target.text(floored_number);
    }
  };

  var handle = function( tween ) {
    var elem = tween.elem;
    if ( elem.nodeType && elem.parentNode ) {
      var handler = elem._animateNumberSetter;
      if (!handler) {
        handler = defaults.numberStep;
      }
      handler(tween.now, tween);
    }
  };

  if (!$.Tween || !$.Tween.propHooks) {
    $.fx.step.number = handle;
  } else {
    $.Tween.propHooks.number = {
      set: handle
    };
  }

  var extract_number_parts = function(separated_number, group_length) {
    var numbers = separated_number.split('').reverse(),
        number_parts = [],
        current_number_part,
        current_index,
        q;

    for(var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
      current_number_part = '';
      for(q = 0; q < group_length; q++) {
        current_index = i * group_length + q;
        if (current_index === separated_number.length) {
          break;
        }

        current_number_part = current_number_part + numbers[current_index];
      }
      number_parts.push(current_number_part);
    }

    return number_parts;
  };

  var remove_precending_zeros = function(number_parts) {
    var last_index = number_parts.length - 1,
        last = reverse(number_parts[last_index]);

    number_parts[last_index] = reverse(parseInt(last, 10).toString());
    return number_parts;
  };

  $.animateNumber = {
    numberStepFactories: {
      /**
       * Creates numberStep handler, which appends string to floored animated number on each step.
       *
       * @example
       * // will animate to 100 with "1 %", "2 %", "3 %", ...
       * $('#someid').animateNumber({
       *   number: 100,
       *   numberStep: $.animateNumber.numberStepFactories.append(' %')
       * });
       *
       * @params {String} suffix string to append to animated number
       * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
       */
      append: function(suffix) {
        return function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.prop('number', now).text(floored_number + suffix);
        };
      },

      /**
       * Creates numberStep handler, which format floored numbers by separating them to groups.
       *
       * @example
       * // will animate with 1 ... 217,980 ... 95,217,980 ... 7,095,217,980
       * $('#world-population').animateNumber({
       *    number: 7095217980,
       *    numberStep: $.animateNumber.numberStepFactories.separator(',')
       * });
       * @example
       * // will animate with 1% ... 217,980% ... 95,217,980% ... 7,095,217,980%
       * $('#salesIncrease').animateNumber({
       *   number: 7095217980,
       *   numberStep: $.animateNumber.numberStepFactories.separator(',', 3, '%')
       * });
       *
       * @params {String} [separator=' '] string to separate number groups
       * @params {String} [group_length=3] number group length
       * @params {String} [suffix=''] suffix to append to number
       * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
       */
      separator: function(separator, group_length, suffix) {
        separator = separator || ' ';
        group_length = group_length || 3;
        suffix = suffix || '';

        return function(now, tween) {
          var negative = now < 0,
              floored_number = Math.floor((negative ? -1 : 1) * now),
              separated_number = floored_number.toString(),
              target = $(tween.elem);

          if (separated_number.length > group_length) {
            var number_parts = extract_number_parts(separated_number, group_length);

            separated_number = remove_precending_zeros(number_parts).join(separator);
            separated_number = reverse(separated_number);
          }

          target.prop('number', now).text((negative ? '-' : '') + separated_number + suffix);
        };
      }
    }
  };

  $.fn.animateNumber = function() {
    var options = arguments[0],
        settings = $.extend({}, defaults, options),

        target = $(this),
        args = [settings];

    for(var i = 1, l = arguments.length; i < l; i++) {
      args.push(arguments[i]);
    }

    // needs of custom step function usage
    if (options.numberStep) {
      // assigns custom step functions
      var items = this.each(function(){
        this._animateNumberSetter = options.numberStep;
      });

      // cleanup of custom step functions after animation
      var generic_complete = settings.complete;
      settings.complete = function() {
        items.each(function(){
          delete this._animateNumberSetter;
        });

        if ( generic_complete ) {
          generic_complete.apply(this, arguments);
        }
      };
    }

    return target.animate.apply(target, args);
  };

}(jQuery));



(function() {

  if ($('#video').length > 0){
    	// volume video
  	var video = document.getElementById("video");
  	video.volume = 0;
  } 
	
	//hover content3 element
	$('.rhinoplasty').hover(function () {
		$('.rhinoplasty__hover').fadeIn('300');
	}, function () {
		$('.rhinoplasty__hover').fadeOut('300');
	});

	$('.breast_surgery').hover(function () {
		$('.breast_surgery__hover').fadeIn('300');
	}, function () {
		$('.breast_surgery__hover').fadeOut('300');
	});

	$('.facial_rejuvenation').hover(function () {
		$('.facial_rejuvenation__hover').fadeIn('300');
	}, function () {
		$('.facial_rejuvenation__hover').fadeOut('300');
	});
  
	$('.ear_plastic').hover(function () {
		$('.ear_plastic__hover').fadeIn('300');
	}, function () {
		$('.ear_plastic__hover').fadeOut('300');
	});
  
	$('.liposuction').hover(function () {
		$('.liposuction__hover').fadeIn('300');
	}, function () {
		$('.liposuction__hover').fadeOut('300');
	});
  
	$('.intimate_plastic').hover(function () {
		$('.intimate_plastic__hover').fadeIn('300');
	}, function () {
		$('.intimate_plastic__hover').fadeOut('300');
	});
  
	$('.other_operations').hover(function () {
		$('.other_operations__hover').fadeIn('300');
	}, function () {
		$('.other_operations__hover').fadeOut('300');
	});
  
	$('.scar_treatment').hover(function () {
		$('.scar_treatment__hover').fadeIn('300');
	}, function () {
		$('.scar_treatment__hover').fadeOut('300');
	});
	
	$('.photo_review').hover(function () {
		$('.photo_review > a').css('text-decoration','underline');
	}, function () {
		$('.photo_review > a').css('text-decoration','none');
	});
	
    // counter
	var plus_number_step = $.animateNumber.numberStepFactories.append(' +')
	$('#operations').animateNumber({ number: 300, numberStep: plus_number_step }, 2000);
	$('#operations_rinoplastic').animateNumber({ number: 117 }, 2000);
	$('#operations_breast').animateNumber({ number: 134 }, 2000);
	$('#patients').animateNumber({ number: 850, numberStep: plus_number_step }, 2000);
	  

    // counter
  var plus_number_step1 = $.animateNumber.numberStepFactories.append(' +')
  $('#breast-grow').animateNumber({ number: 182}, 2000);
  $('#breast-low').animateNumber({ number: 56 }, 2000);
  $('#breast-oper').animateNumber({ number: 61 }, 2000);
  $('#breast-others').animateNumber({ number: 93 }, 2000);
    
  var plus_number_step2 = $.animateNumber.numberStepFactories.append(' +')
  $('#nose-grow').animateNumber({ number: 182 }, 2000);
  $('#nose-plast').animateNumber({ number: 56 }, 2000);
  $('#nose-repair').animateNumber({ number: 61 }, 2000);
  $('#nose-recon').animateNumber({ number: 93 }, 2000);
    
	
	
})(jQuery);		


//OwlCarousels в блоке Results
$(document).ready(function(){
  $(".results-carousel").owlCarousel({
    center: true,
    loop:true, 
    smartSpeed:500,   
    mouseDrag:false,
    touchDrag:false,    
    nav:true,    
    navText: ["<span></span>","<span></span>"],    
    margin:30,
    responsive:{
        1200:{
            items:1
        },        
        992:{
            items:1
        },
        768:{
            items:1
        },
        480:{         
            items:1
        },
        320:{
            items:1
        }

    }
  });

});

//OwlCarousel в блоке Reviews
$(document).ready(function(){
  $(".reviews-carousel").owlCarousel({
    center: false,
    loop:true, 
    smartSpeed:500,   
    mouseDrag:true,      
    nav:true,    
    dots:true,
    navText: ["<span></span>","<span></span>"],    
    margin:30,
    responsive:{
        1200:{
            items:1
        },        
        992:{
            items:1
        },
        768:{
            items:1
        },
        480:{         
            items:1
        },
        320:{
            items:1
        }

    }
  });

});

//OwlCarousel в блоке Events
$(document).ready(function(){
  $(".events-carousel").owlCarousel({
    center: false,
    loop:true, 
    smartSpeed:500,   
    mouseDrag:true,      
    nav:true,    
    navText: ["<span></span>","<span></span>"],    
    margin:30,
    responsive:{
        1200:{
            items:1
        },        
        992:{
            items:1
        },
        768:{
            items:1
        },
        480:{         
            items:1
        },
        320:{
            items:1,
            navContainer: '#customNav',
        }

    }

  });

var owl = $('.events-carousel');
  // Custom Navigation Events
$('.events-carousel .owl-next').click(function(){
    owl.trigger('next.owl.carousel');
})
$('.events-carousel .owl-prev').click(function(){
    owl.trigger('prev.owl.carousel');
})

});



//Инициализация twenty-twenty при смене слайда
$('.owl-carousel').on('changed.owl.carousel', function(event) {
  $("#container1").twentytwenty();
  $("#container2").twentytwenty();
  $("#container3").twentytwenty();
  $("#container4").twentytwenty();

});

$(".container5").twentytwenty();


//Смена слайдера при клике на категории в блоке Results
$('.results-link-slider .link_slider a').on('click',function(e){
  e.preventDefault();    
  $(".results-link-slider *").removeClass("link_slider_active"); 
  $(this).addClass("link_slider_active"); 
  
    $('.slider-wrap').each(function(){
      $(this).fadeOut(200);
    });
  
   var visible = $(this).attr('href');
   $(visible).delay(200).fadeIn(2000);  
});

//Смена слайдера при клике на категории в блоке Reviews
$('.reviews-link-slider .link_slider a').on('click',function(e){
  e.preventDefault();    
  $(".reviews-link-slider *").removeClass("link_slider_active"); 
  $(this).addClass("link_slider_active"); 
  
    $('.reviews-slider-wrap').each(function(){
      $(this).fadeOut(200);
    });
  
   var visible = $(this).attr('href');
   $(visible).delay(200).fadeIn(2000);  
});


//Анимация точек на карте
$('.map__city_point').mouseenter(function() {    
  $(this).parent().toggleClass('active-map-point');  
  $('.active-map-point .map-info').finish();
  $('.active-map-point .map__city_line').finish();
  if ($(window).width() < 767) {
  $('.active-map-point .map-info').animate({    
     opacity: '1'
     }, 500, function() {
  });  
  $('.active-map-point .map__city_line').animate({    
      height: '45px'
     }, 500, function() {
  });

} else{

  $('.active-map-point .map-info').animate({    
     opacity: '1'
     }, 500, function() {
  });  
  $('.active-map-point .map__city_line').animate({    
      height: '145px'
     }, 500, function() {
  });

}
 
});

$('.map__city_point').mouseleave(function() {  
  $('.active-map-point .map-info').finish();
  $('.active-map-point .map__city_line').finish();
  $('.active-map-point .map-info').animate({    
     opacity: '0'
     }, 500, function() {
  });   
  $('.active-map-point .map__city_line').animate({
      height: '0px'
     }, 500, function() {
  }); 
  $(this).parent().removeClass('active-map-point');   
});


//Show-hide menu on tablet resolution
$(document).ready(function(){
    $('.click-tablet').on('click',function(e){
        e.preventDefault();        
          $('.menu-tablet-wrap').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active'); 
        $('.top_nav_bg').toggleClass('menu-tablet-open');
        $('.top-menu-toggle p').toggleClass('green-color');
        $('.desktop_menu').toggleClass('w-border');               
    });
});


//Show-hide menu on mobile resolution
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.top_menu__link').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active'); 
        $('.top_nav_bg').toggleClass('menu-tablet-open');
        $('.top-menu-toggle p').toggleClass('green-color');
        $('.desktop_menu').toggleClass('w-border'); 
        $('.right_menu').removeClass('show');               
    });
});

//Show-hide footer menu on mobile resolution
$(document).ready(function(){
    $('.click-footer-mobile').on('click',function(e){
        e.preventDefault();        
          $('.footer-navigation').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("footer .menu-toggle-button").toggleClass('is-active');                      
    });
});

//Submenu animation
$(document).ready( function() {
    $(".hover_drop").on('click', function (e) {
    e.preventDefault();
      $('.right_menu').addClass('show')
    });
});

$(document).ready( function() {
    $(".back").on('click', function (e) {
    e.preventDefault();
      $('.right_menu').removeClass('show')
    });
});


//Выбор спикер-участник
$('.conf-choice a').on('click',function(e){
  e.preventDefault();    
  $("*").removeClass("choice-active"); 
  $(this).addClass("choice-active"); 
   $('.conf-block').toggleClass('speaker-vis');
   $('.conf-block').fadeOut(300);
   $('.speaker-vis').fadeIn(300);
});


//Смена отзывов на странице Backcall
$('.backcall-links .link_slider a').on('click',function(e){
  e.preventDefault();    
  $(".backcall-links *").removeClass("link_slider_active"); 
  $(this).addClass("link_slider_active"); 
  
    $('.backcall-category').each(function(){
      $(this).fadeOut(300);
    });
  
   var visible = $(this).attr('href');
   $(visible).delay(300).fadeIn(600);  
});


//Смена результатов на странице Cases
$('.cases-sliders .link_slider a').on('click',function(e){
  e.preventDefault();    
  $(".cases-sliders *").removeClass("link_slider_active"); 
  $(this).addClass("link_slider_active"); 
  
    $('.cases-category').each(function(){
      $(this).fadeOut(0);
    });
  
  var visible = $(this).attr('href');
   
  var explode = function(){
      $(".container5").twentytwenty();      
    };
  setTimeout(explode, 100); 

  $(visible).fadeIn(1000);
   
});

//Scroll to ankor
$('.nav-list a[href^="."]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup();
});