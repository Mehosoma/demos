
//Svg to inline
$(document).ready(function(){
// Replace all SVG images with inline SVG  
  $('img.svg').each(function(){
   var $img = $(this);
   var imgID = $img.attr('id');
   var imgClass = $img.attr('class');
   var imgURL = $img.attr('src');

   $.get(imgURL, function(data) {
     var $svg = $(data).find('svg');
     if (typeof imgID !== 'undefined') {
       $svg = $svg.attr('id', imgID);
     }
     if (typeof imgClass !== 'undefined') {
       $svg = $svg.attr('class', imgClass+' replaced-svg');
     }
     $svg = $svg.removeAttr('xmlns:a');
     $img.replaceWith($svg);
   });
  });

$('.filters-slider').on('init', function(event, slick){
    // Replace all SVG images with inline SVG  
  $('img.svg').each(function(){
   var $img = $(this);
   var imgID = $img.attr('id');
   var imgClass = $img.attr('class');
   var imgURL = $img.attr('src');

   $.get(imgURL, function(data) {
     var $svg = $(data).find('svg');
     if (typeof imgID !== 'undefined') {
       $svg = $svg.attr('id', imgID);
     }
     if (typeof imgClass !== 'undefined') {
       $svg = $svg.attr('class', imgClass+' replaced-svg');
     }
     $svg = $svg.removeAttr('xmlns:a');
     $img.replaceWith($svg);
   });
  });
});

});

//ModalWindow
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	
   		fixedContentPos: false,
    	fixedBgPos: true,
   		closeOnBgClick: true,

	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
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
 
   });

});


//Select
$('.selectpicker')
  .on('show.bs.select', function() {
    $(this).parent().find('.dropdown-menu').first().stop(true, true).slideDown(300);
  })
  .on('hide.bs.select', function() {
    $(this).parent().find('.dropdown-menu').first().stop(true, false).slideUp(300, function() {
      $(this).removeClass('open');
    });
  })
  .on('hidden.bs.select', function() {
    $(this).addClass('open');
  });


//Validation
$(document).ready(function () {

      $(".check-gen input").change(function() {   
          $(this).closest('.check-gen').find('label').toggleClass('active-checked');      
       });

        var isFormValid = true;

        function checkFormValidity(form){
            isFormValid = true;
            $(".form-gen .contacts-form-field_input").each(function() { 

              var fieldVal = $.trim($('input', this).val());
                if(!fieldVal){
                    $(this).find('p').addClass('show-att');
                    isFormValid = false;
                }
                else{
                  $(this).find('p').removeClass('show-att');
                }   
          });

          if($(".check-gen label").hasClass('active-checked')) { 
          } else {
             isFormValid = false;
             alert('Для отправки формы необходимо согласиться с "Политикой конфиденциальности')
          }

        }


        //option A
        $("#contacts-form").unbind('submit').on('submit', function(event) {
            checkFormValidity("#contacts-form");
            if(isFormValid){
                var formID = $('form').attr('id'); // Получение ID формы
                var formNm = $('#' + formID);            
                $.ajax({
                    type: 'POST',
                    url: 'send.php', // Обработчик формы отправки
                    data: formNm.serialize(),
                    success: function (data) {
                       jQuery(formNm)[0].reset();
                       $(".contacts").css('display','none');
                       $(".main-contacts").css('display','none');
                       $(".contacts-add").css('display','flex');
                        $(".contacts-page").css('height','100vh');
                       $(".contacts-page footer").addClass('pos-abs');
                    }
                });
            }else{
                
            }
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        });

         //option A
        $("#main-form").unbind('submit').on('submit', function(event) {
            checkFormValidity("#main-form");
            if(isFormValid){
                var formID = $('form').attr('id'); // Получение ID формы
                var formNm = $('#' + formID);            
                $.ajax({
                    type: 'POST',
                    url: 'send.php', // Обработчик формы отправки
                    data: formNm.serialize(),
                    success: function (data) {
                       jQuery(formNm)[0].reset();
                       $(".contacts").css('display','none');
                       $(".main-contacts").css('display','none');
                       $(".contacts-add").css('display','flex');
                        $(".contacts-page").css('height','100vh');
                       $(".contacts-page footer").addClass('pos-abs');
                    }
                });
            }else{
                
            }
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        });
    });

  


//Gallery
$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
  });
});


//Filters
$(window).on('load resize', function() {  

  if ($(window).width() > 991) {
          var fActive = '';
     
    function filterColor(color){
     if(fActive != color){
     $('.filters-content-wrap .col-12').filter('.'+color).show();
     $('.filters-content-wrap .col-12').filter(':not(.'+color+')').hide();
     fActive = color;
     }
    }

     $('.nav-link').on('click',function(e){
         e.preventDefault();  
        $('.filters-nav-main .nav-link').removeClass('active');
        $(this).addClass('active');
     });
     
    $('.f-obl').click(function(){ filterColor('obl'); });
    $('.f-stocks').click(function(){ filterColor('stocks'); });
    $('.f-strat').click(function(){ filterColor('strat'); });
     $('.f-crypto').click(function(){ filterColor('crypto'); });
    $('.f-forex').click(function(){ filterColor('forex'); });
    $('.f-structure').click(function(){ filterColor('structure'); });
     
    $('.f-all').click(function(){
     $('.filters-content-wrap .col-12').show();
     fActive = 'all';
    });
    
    }else{
      
    }
    
});


//About-inner-slider
$(window).on('load resize', function() {  
  if ($(window).width() < 992) {

    $(function() {
      $('.selectpicker-mob').selectpicker();
    });

    if ($(window).width() < 768) {

      
      $('.filters-slider.slick-tablet').slick('slickUnfilter');
      $(".filters-slider.slick-tablet").slick("unslick");

      $('.filters-slider:not(.slick-mobile)').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
       });

      $('.filters-slider').addClass('slick-mobile');
      $('.filters-slider').removeClass('slick-tablet');


          $('.selectpicker-mob').on('change', function filterSlider(filter) {
            filter.preventDefault();  
            $('.filters-slider').slick('slickGoTo', 0); 
            $('.filters-slider').slick('slickUnfilter');         
            var filter = $(this).val();
            var key = "."+filter;
            $('.filters-slider').slick('slickFilter', function() { return $(key, this).length === 1; }); 
          });

        }else{           
              $('.filters-slider.slick-mobile').slick('slickUnfilter');
              $(".filters-slider.slick-mobile").slick("unslick"); 
                 
              $('.filters-slider:not(.slick-tablet)').slick({
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
               });

              $('.filters-slider').removeClass('slick-mobile');
              $('.filters-slider').addClass('slick-tablet');

                 $('.selectpicker-mob').on('change', function() {
                 
                  var filter = $(this).val();
                  var key = "."+filter;
                  $('.filters-slider').slick('slickUnfilter');
                  $('.filters-slider').slick('slickFilter', function() { return $(key, this).length === 1; });            
                  $('.filters-slider').slick('slickGoTo', 0);
          
                });
        }

  } else {
    $('.filters-slider.slick-initialized').slick('slickUnfilter');
    $(".filters-slider.slick-initialized").slick("unslick");   
    $('.filters-slider').removeClass('slick-mobile');
    $('.filters-slider').removeClass('slick-tablet'); 
    $('.filters-nav-main .nav-link').removeClass('active');
    $('.filters-nav-main .nav-link:nth-child(1)').addClass('active');    
  }
  
});



//Show-hide Drop-Down Menu
$(document).ready(function(){ 

  if ($(window).width() >= 990) {    
      $('.lang-choice a').on('mouseenter',function(e){
        event.preventDefault();       
          $(this).parent('').addClass('show-lang')
                                     
      });
      $('.lang-choice').on('mouseleave',function(e){
        event.preventDefault();    
          $(this).removeClass('show-lang')
      });
    }else{

    }
});

// Дисклеймер
let more = document.querySelector('.more-disclaimer');
let disclaimer = document.querySelector('.disclaimer');
let moreText = document.querySelector('.more-text');
more.onclick = function () {
  disclaimer.classList.toggle('active');
  if (disclaimer.classList.contains('active')) {
    moreText.textContent = 'Скрыть';
  } else {
    moreText.textContent = 'Подробнее';
  }
};

// Карточки
$('.card').click(function(){
  $(this).toggleClass('flipped');
});
