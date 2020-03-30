
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
         $('.main-menu-wrap').animate({
             height: 'toggle'
           }, 600, function() {
         }); 
       $("header .menu-toggle-button").toggleClass('is-active');
 
   });

});


//Select
$(function() {
    $('.selectpicker').selectpicker();
});

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