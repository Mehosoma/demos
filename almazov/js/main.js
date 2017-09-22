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
    	// volume video
	var video = document.getElementById("video");
	video.volume = 0;
	
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
	  

	
	
})(jQuery);		


//OwlCarousels в блоке Results
$(document).ready(function(){
  $(".results-carousel").owlCarousel({
    center: true,
    loop:true, 
    smartSpeed:500,   
    mouseDrag:false,    
    nav:true,    
    navText: ["<span></span>","<span></span>"],    
    margin:30,
    responsive:{
        1200:{
            items:1
        },        
        992:{
            items:3
        },
        768:{
            items:2
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
            items:3
        },
        768:{
            items:2
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
            items:3
        },
        768:{
            items:2
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

//Инициализация twenty-twenty при смене слайда
$('.owl-carousel').on('changed.owl.carousel', function(event) {
  $("#container1").twentytwenty();
  $("#container2").twentytwenty();
  $("#container3").twentytwenty();
  $("#container4").twentytwenty();

});

//Смена слайдера при клике на категории в блоке Results
$('.link_slider a').on('click',function(e){
  e.preventDefault();    
  $("*").removeClass("link_slider_active"); 
  $(this).addClass("link_slider_active"); 
  
    $('.slider-wrap').each(function(){
      $(this).fadeOut(200);
    });
  
   var visible = $(this).attr('href');
   $(visible).delay(200).fadeIn(2000);  
});

//Смена слайдера при клике на категории в блоке Reviews
$('.link_reviews a').on('click',function(e){
  e.preventDefault();    
  $("*").removeClass("link_reviews_active"); 
  $(this).addClass("link_reviews_active"); 
  
    $('.reviews-slider-wrap').each(function(){
      $(this).fadeOut(200);
    });
  
   var visible = $(this).attr('href');
   $(visible).delay(200).fadeIn(2000);  
});



$('.map__city_point').mouseenter(function() {    
  $(this).parent().toggleClass('active-map-point');  
  $('.active-map-point .map-info').finish();
  $('.active-map-point .map__city_line').finish();
  $('.active-map-point .map-info').animate({    
     opacity: '1'
     }, 1000, function() {
  });  
  $('.active-map-point .map__city_line').animate({    
      height: '145px'
     }, 1000, function() {
  });
 
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