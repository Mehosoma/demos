//$(document).ready(function(){

//var first = 1.05;
//var zindex = 900;
//var tmargin = 10;

//$('.programs-list-slide').each(function (i) {
//    first -= 0.05;
//    zindex -= 10;
//    tmargin += -30;
//    $(this).css('transform', 'scale'+'('+first+')');
//   $(this).css('z-index', zindex);
//    $(this).css('top', tmargin);
//});

//});



//Programms-Slider
$(document).ready(function() {

  (function($) {
    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
  })(jQuery);
  
  //Initiliaze
  var itemList, item, className, thisItem, newOrder, itemDesc, desc;
  
  itemList  = $('.programs-list');
  item      = itemList.children('.programs-list-slide');
  
  
  //Add class name and dots for each item
  item.each(function(index) {
    
    className  = 'item-' + index;    
    $(this).addClass(className).attr('data-order', index);
    var applink = parseInt($(this).attr('data-order'));
    $('.programs-list-dots ul').append(
      $('<li></li>').attr('id', 'dotp'+applink).attr('data-order', index)
    );
    
  });
  
  
  //On clicked fire animation
  item.on('click', function() {

    if ($(this).hasClass('programs-list-slide-active')){

    }else{
    
        thisItem  = $(this);
        thisOrder = parseInt(thisItem.attr('data-order')) - 1;

        thisItem.addClass('show');
        
        //Reorder item position
        item.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() { 
          $('.programs-list-slide').removeClass('programs-list-slide-active');
          thisItem.removeClassWild("item-*").removeClassWild('show').addClass('item-0').addClass('programs-list-slide-active').attr('data-order', '0');         
        });

        //Move siblings items backward
        window.setTimeout(function () {    
          
          for(var i = thisOrder; i >= 0; i--) {
          
            //Reorder item position
            movedItem = item.filter('[data-order=' + i + ']');
            newOrder  = parseInt(movedItem.attr('data-order')) + 1;
            className = 'item-' + newOrder;
            
            //Move them with transition
            movedItem.removeClassWild("item-*").removeClassWild('show').addClass('transition ' + className).attr('data-order', newOrder);
            
            //Remove their transition
            item.on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function() { 
              item.removeClass('transition');
            });
            
          }  
        }, 500);

        window.setTimeout(function () { 

            $(".programs-list-dots ul").empty()

            item.each(function(index) {
        
                   var applink = parseInt($(this).attr('data-order'));
                    $('.programs-list-dots ul').append(
                       $('<li></li>').attr('id', 'dotp'+applink).attr('data-order', applink)
                    );
                    
            });
         }, 1100);
    }
  });

//Click Dots Event
$(document).on('click', ".programs-list-dots ul li", function() {

  var inttab = parseInt($(this).attr('data-order'));
  var clickdot = $('.programs-list-slide').filter('[data-order=' + inttab + ']');
  clickdot.trigger( "click" );

});


});

//Marga-Note Visible
$(document).ready(function() {

});

