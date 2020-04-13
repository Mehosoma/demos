
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
$(document).ready(function(){
  $('.btn-form').on('click',function(e){
    $( ".form-gen" ).submit();
  });

   $(".form-gen").submit(function() {

     var formvalid = true;

       $(".form-gen input").each(function() { 
         if($(this).val() == '') {
            $(this).parent().find('p').addClass('show-att');
              return formvalid = false;
          }else{
            $(this).parent().find('p').removeClass('show-att');
          }
      });

        return formvalid;
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
        $(".filters-slider.slick-initialized").slick("unslick");  

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

    if ($(window).width() < 768) {

      $(function() {
        $('.selectpicker-mob').selectpicker();
      });

      $(".filters-slider.slick-initialized").slick("unslick");
               
      $('.filters-slider:not(.slick-initialized)').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
       });

         $('.selectpicker-mob').on('change', function() {
         
          var filter = $(this).val();
          var key = "."+filter;
          $('.filters-slider').slick('slickUnfilter');
          $('.filters-slider').slick('slickFilter', function() { return $(key, this).length === 1; });            
          $('.filters-slider').slick('slickGoTo', 0);
  
        });

        }else{

             $(function() {
              $('.selectpicker-mob').selectpicker();
            });

             $(".filters-slider.slick-initialized").slick("unslick");
                 
              $('.filters-slider:not(.slick-initialized)').slick({
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
               });

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
  }

  
});



//Show-hide Drop-Down Menu
$(document).ready(function(){ 

  if ($(window).width() >= 768) {    
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