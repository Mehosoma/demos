$(document).ready(function(){
$('.slider-p').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,   		
  		arrows: false, 
  		dots: true, 		
  		 responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        autoplay: true
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
  			]
	});
});


$('.left').click(function(){
  $('.slider-p').slick('slickPrev');
})

$('.right').click(function(){
  $('.slider-p').slick('slickNext');
})