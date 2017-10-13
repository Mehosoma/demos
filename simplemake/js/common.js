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


//Time counter
$(".example").TimeCircles({
    "animation": "smooth",
    "bg_width": 1,
    "fg_width": 0.04,
    'use_inner_background': true,
    'circle_inner_bg_color': "#414141",
    "circle_bg_color": "#414141",
    "time": {
        "Days": {
            "text": "дней",
            "color": "#00d0f4",
            "show": true
        },
        "Hours": {
            "text": "часов",
            "color": "#00d0f4",
            "show": true
        },
        "Minutes": {
            "text": "минут",
            "color": "#00d0f4",
            "show": true
        },
        "Seconds": {
            "text": "секунд",
            "color": "#00d0f4",
            "show": true
        }
    }
});

//перезагрузка страницы при смене ориентации экрана

window.addEventListener("orientationchange", function(e) {
         e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);    
        location.reload();
    }, false);


$(document).ready(function(){
  $(".owl-carousel-rev").owlCarousel({
    loop:true, 
    smartSpeed:500,             
    nav:true,
    dots:true,          
    item:3,
    dotsEach:true,
    responsive:{
        1200:{
            items:3
        },        
        992:{
            items:2
        },
        768:{
            items:1
        },
        650:{         
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

$(document).ready(function(){
  $(".owl-carousel-port").owlCarousel({
    loop:true, 
    smartSpeed:500,             
    nav:true,
    dots:true,          
    item:3,
    dotsEach:true,    
    responsive:{
        1200:{
            items:3
        },        
        992:{
            items:2
        },
        768:{
            items:1
        },
        650:{         
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



//Show-hide tarifs block
$(document).ready(function(){

    $('.add-row-but').on('click',function(e){
        e.preventDefault(); 

    if ($(window).width() > 767) {

        if ($("div#addrow"+ this.id).hasClass('active-row')){
               $('.active-row').css('height', '0px');
               $("div#addrow"+ this.id).removeClass('active-row');
               $("div#addrow"+ this.id).toggleClass('active-row1');
        } else{
          if (!$('*').not($("div#addrow"+ this.id)).hasClass('active-row1')){
              var height = $("div#addrow"+ this.id).children(".col-lg-12").height();                        
              $("div#addrow"+ this.id).toggleClass('active-row');
              $('.active-row').css('height', height);
              $("div#addrow"+ this.id).toggleClass('active-row1'); 
          }else{ 
               $('* .active-row').css('height', '0px');         
              $('.active-row1').toggleClass('active-row'); 
              $(this).delay(700).queue(function () { 
              $('*').removeClass('active-row1');       
              var height = $("div#addrow"+ this.id).children(".col-lg-12").height();                        
              $("div#addrow"+ this.id).toggleClass('active-row');
              $('.active-row').css('height', height);
              $("div#addrow"+ this.id).toggleClass('active-row1');
              $(this).dequeue();});       
          }
        }

    }else{

       if ($("div#addrow"+ this.id).hasClass('active-row')){
        $("div#addrow"+ this.id).css('height', '0px');
        $("div#addrow"+ this.id).removeClass('active-row');        
      }else {

      var height = $("div#addrow"+ this.id).children(".col-lg-12").height();                        
      $("div#addrow"+ this.id).toggleClass('active-row');
      $('.active-row').css('height', height);
      }

    }

    });   
});


//Shadow fixed-menu
$(function(){
  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top > 100) $("header").css({'box-shadow' : '0px 2px 10px 0px rgba(0,0,0,0.2)'});
    else{} ;
  });
});


//Counter-animation
$('.activities').waypoint(function(direction) {    
  $('#number-clients').animateNumber({ number: 192}, 2000);
  $('#number-prize').animateNumber({ number: 8}, 1500);
  $('#number-company').animateNumber({ number: 86}, 2000);
  $('#number-serv').animateNumber({ number: 122}, 2000);
}, { offset: '60%'});


//ModalWindow
$(document).ready(function(){
    $(".popup_form").magnificPopup();
});


//ScrollToSection
$('.main-menu a[href^="."]').click(function(){
  //Сохраняем значение атрибута href в переменной:
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
return false;
});


//Show-hide menu
$(document).ready(function(){
    $('.click-mobile').on('click',function(e){
        e.preventDefault();        
          $('.main-menu').animate({
              height: 'toggle'
            }, 600, function() {
          });         
        $("header .menu-toggle-button").toggleClass('is-active'); 
        $('.top_nav_bg').toggleClass('menu-tablet-open');
        $('.top-menu-toggle p').toggleClass('green-color');
        $('.desktop_menu').toggleClass('w-border');               
    });
});