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

        $(this).parents(".iframe_overlay").addClass("active"); //добавляем класс текущему родителю

         $(".active").css({
        'display' : 'none'        
        });

        $(".active").css({
        'display' : 'none'        
        }); 

        $(this).parents(".iframe_overlay").removeClass("active"); //удаляем класс текущего родителя
    });
});


$(document).ready(function() {
  $('.swiper-button-next').on('click', function() {
    
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
  $('.swiper-button-prev').on('click', function() {
    
    $('.play').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });

    $(".iframe_overlay").css({
        'display' : 'block'        
    });

    });
}); 