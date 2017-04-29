
// Кнопка заблокирована/активна
jQuery(function($){ 
    $("input[name='disclaim']").click(function() {
        if (this.checked) {
       		$('#block').removeClass('disabled');
   		} else {
       		$('#block').addClass('disabled');
   		}         
    }); 
});

//Анимация треугольников на главной

$(window).load(function() {

	$('.polygon-left').css({'transform':'translateX(0px) translateY(0px)', 'opacity':'0.3'});
	$('.polygon-right').css({'transform':'translateX(0px) translateY(-0px)', 'opacity':'0.3'});

});


$(window).scroll(function() {
	if ($(this).scrollTop() > 200){  
    
    	$('.polygon-left').css({'transform':'translateX(-500px) translateY(175px)', 'opacity':'0'});
    	$('.polygon-right').css({'transform':'translateX(500px) translateY(-250px)', 'opacity':'0'});
 	
 	}
 		else{

 		$('.polygon-left').css({'transform':'translateX(0px) translateY(0px)', 'opacity':'0.3'});
 		$('.polygon-right').css({'transform':'translateX(0px) translateY(-0px)', 'opacity':'0.3'});
   
  	}
});


//Альбом-галерея

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({

    });
});


//Анимация Dropdown

$('.dropdown').on('show.bs.dropdown', function(e){

  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(1000, function(){    
    });

});

$('.dropdown').on('hide.bs.dropdown', function(e){

  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500, function(){   
  }); 
   
});


//Css animation



// Выравниваем блоки по высоте
$(document).ready(function(){
   $('.col-eq').colequalizer();
});


// Слайдер на мобильных разрешениях
$(document).ready(function () {


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
  
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';
    var fixed = 'fixed';   


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');
        

        $('#slidemenu').stop().animate({
            right: selected ? menuneg : '0px'
        });

        $('#navbar-height-col').stop().animate({
            right: selected ? slideneg : '0px'
        });

        $(pagewrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        });

                    
        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body').toggleClass('slide-active');
        $('#page-content, .navbar, body').toggleClass('pos-relative');
  


    });

    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';  


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');           
        }
    });
});


// Slider
$(document).ready(function(){
    $('#lightslider').lightSlider({
        item: 4,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '',
        nextHtml: '',  
        responsive : [
            {
                breakpoint:2560,
                settings: {
                    item:4,
                    slideMove:1,                   
                  }
            },

            {
                breakpoint:1500,
                settings: {
                    item:4,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint: 1200,
                settings: {
                    item:4,
                    slideMove:1,
                    
                  }
            },

            {
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                                       
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1,
                                     
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1,                   
                  
                  }
            }
        ]        
    });
    
});

