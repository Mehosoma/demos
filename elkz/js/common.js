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

$('#bx-pager').owlCarousel({

    center: true,  
    margin: 50,    
    nav: true,
    autoWidth: true,
    startPosition: 4,

})

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

        $(this).parents(".iframe_overlay").addClass("active_object"); //добавляем класс текущей (нажатой)
        

         $(".active_object").css({
        'display' : 'none'        
        }); 

        $(this).parents(".iframe_overlay").removeClass("active_object"); //добавляем класс текущей (нажатой)      
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


$('.album_slider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade',
    pagerCustom: '#bx-pager',
    infiniteLoop: true,
});