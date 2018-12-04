$(document).on('click','.js-videoPoster',function(e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  // Берем ссылку видео из data
  var src = iframe.data('src');
  // скрываем постер
  wrapper.addClass('videoWrapperActive');
  // подставляем в src параметр из data
  iframe.attr('src',src);
}


//Show-hide button
$(document).ready(function(){

  if ($(window).width() >= 992) {

    $('.hidden-btn-vis').on({

       mouseenter: function () {
          $(this).find(".hidden-btn").animate({
              height: 'toggle'
                }, 300, function() {
              });
       },

       mouseleave: function () {
          $(this).find(".hidden-btn").animate({
              height: 'toggle'
                }, 10, function() {
              });      
       }
    });
  }

});