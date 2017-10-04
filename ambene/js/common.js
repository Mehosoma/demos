$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true, 
    smartSpeed:500,  
    navText: ["<span></span>","<span></span>"], 
    navContainer: '#customNav',           
    nav:true,          
    item:4,
    responsive:{
        1200:{
            items:4
        },        
        992:{
            items:3
        },
        768:{
            items:2
        },
        650:{         
            items:2
        },
        480:{         
            items:1
        },
        320:{
            items:1
        }

    }
  });

});


function checkParams() {
    var name = $('#modal-login').val();
    var pass = $('#modal-pass').val();    
     
    if(name.length != 0 && pass.length != 0) {
        $('.button-header-form').removeClass('disabled');
    } else {
        $('.button-header-form').addClass('disabled');
    }
}

$(document).ready(function(){

$("#tel-modal").on('hidden.bs.modal', function(){
    $('#tel-header-form').find('input[type=text], textarea').val('');
    $('.button-header-form').addClass('disabled');
  });

 

});