$('#file-choice').change(function() {
    if ($(this).val() != '') $(this).prev().text($(this)[0].files[0].name);
    else $(this).prev().text('Прикрепите документ');
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

//Date-Time

$('#datepicker').datepicker({
   locale: 'ru-ru'
});

$('#timepicker').timepicker({
	locale: 'ru-ru'
});


//Show-hide menu

$(document).ready(function(){
   $('.click-mobile').on('click',function(e){
       e.preventDefault();  
         $('.main-menu-wrap').animate({
             height: 'toggle'
           }, 600, function() {
         }); 
       $("header .menu-toggle-button").toggleClass('is-active');
 
   });

});


$(document).ready(function(){
  $('.project__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
      breakpoint: 768,
      settings: {
        adaptiveHeight: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.project__slider',
    centerMode: false,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});


//Projects Filters
//       $(".projects__block__col").hide();
//       if ($('.projects__filters input[type="checkbox"]:checked').length > 0) {
//         $(".projects__filters :checkbox:checked").each(function() {
//             $("." + $(this).val()).show();
//         });
//       }else{
//         $(".projects__block__col").show();
//       }
//    });

//Projects Filters New
//$(".projects-new__filters__block :checkbox").click(function() {
//       $(".projects-new__projects").hide();
//       if ($('.projects-new__filters__block input[type="checkbox"]:checked').length > 0) {
//         $(".projects-new__filters__block :checkbox:checked").each(function() {
//             $("." + $(this).val()).show();
//         });
//       }else{
//          $(".projects-new__projects").show();
//      }
//    });


//RangeSlider
$( "#range" ).slider({
    animate: "slow",
    range: "min",    
    value: 50
});