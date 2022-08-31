$(document).ready(function(){

    //select
    $('select').niceSelect();

    //Header fixed
    const btn = document.querySelector('.arrow-up');

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

         if (scrollDistance >= 500) {
             btn.classList.add('active');
        } else {
           btn.classList.remove('active');
         }
    });

    /* Page Scroll to id fn call */
    $(".header__item a, .greeting__links a, .footer__item a, arrow-up, .footer__schedule, a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:"a"
    });

      /* demo functions */
    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });

    const icons = document.querySelectorAll('.nav-open');
      icons.forEach (icon => {  
        icon.addEventListener('click', (event) => {
          icon.classList.toggle("open");
        });
      });

    $(".nav-open").on('click touch', function(e) {
       $('.header__list').slideToggle();
    }); 

    if($(window).width() < 850) {
         $(".header__list a").on('click touch', function(e) {
         $('.header__list').slideUp();
         $('.nav-open').removeClass('open');
      }); 
    } 

    

     var swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
         loop: true
    });

      var swiper1 = new Swiper('.swiper-1', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
          loop: true
    });

      var swiper2 = new Swiper('.swiper-2', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
          loop: true
    });


      var swiper3 = new Swiper('.swiper-3', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
          loop: true
    });

    var swiper4 = new Swiper('.swiper-4', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
          loop: true
    });

    var swiper5 = new Swiper('.swiper-5', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
          loop: true
    });

     var swiper6 = new Swiper('.swiper-6', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
        observeParents: true,
        observeSlideChildren: true,
          loop: true
    });
});	
