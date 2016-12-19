$(document).ready(function () {
   var tileSlider = $('.swiper-container');
	tileSlider.each(function(){
    var mySwiper = new Swiper(this, {
             
        pagination: $(this).parent().find('.swiper-pagination')[0],
        paginationType: 'fraction',
        nextButton: $(this).parent().find('.swiper-button-next')[0],
        prevButton: $(this).parent().find('.swiper-button-prev')[0]
    });
	}); 
    
});



$('.top_slider').owlCarousel({
    stagePadding: 120,
    loop:true,
    margin:30,
    nav: true,
    center: true,
       
    autoWidth: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1920:{
            items:3,                
        }
    }
})

$('.poster_block_wrap').owlCarousel({
    stagePadding: 120,
    loop:true,
    margin:30,
    nav: true,
    center: true,
    autoWidth: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1920:{
            items:3,                
        }
    }
})

$(document).ready(function(){
    $('.click').on('click', function(){

        $(this).parents(".iframe_overlay").addClass("active"); //добавляем класс текущей (нажатой)
        

         $(".active").css({
        'display' : 'none'        
        }); 

        $(this).parents(".iframe_overlay").removeClass("active"); //добавляем класс текущей (нажатой)      
    });
});

$(document).ready(function(){
    $('.click_media').on('click', function(){

        $(this).parents(".iframe_overlay").addClass("active_object"); //добавляем класс текущему родителю

         $(".active_object").css({
        'display' : 'none'        
        });

       

        $(this).parents(".iframe_overlay").removeClass("active_object"); //удаляем класс текущего родителя
    });
});


$(document).ready(function() {
  $('#next_button').on('click', function() {
    
    $('.play').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });

    $(".iframe_overlay").css({
        'display' : 'block'        
    });


});
  });

$(document).ready(function() {
  $('#prev_button').on('click', function() {
    
    $('.play').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });

    $(".iframe_overlay").css({
        'display' : 'block'        
    });

    });
}); 


   
$(document).ready(function(){
 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav' 
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
            }
        },
   
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false        
            }
        },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
            