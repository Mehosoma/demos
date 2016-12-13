$(document).ready(function () {
   var tileSlider = $('.swiper-container');
	tileSlider.each(function(){
    var mySwiper = new Swiper(this, {
        loop: true,
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
    margin:37,
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
    margin:37,
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