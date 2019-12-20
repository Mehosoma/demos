jQuery(document).ready(function(){
	// открытие попапа
	jQuery(document).on("click",".btn-instr",function(){
		jQuery(".overlay, .popup").addClass("active");
		jQuery(".popup .txt").removeClass("active");
		jQuery(".txt-instr").addClass("active");
	});
	jQuery(document).on("click",".btn-task",function(){
		jQuery(".overlay, .popup").addClass("active");
		jQuery(".popup .txt").removeClass("active");
		jQuery(".txt-task").addClass("active");
	});
	jQuery(document).on("click",".close, .overlay",function(){
		jQuery(".overlay, .popup").removeClass("active");
	});
	jQuery(document).on("click",".btn-ok, .overlay",function(){
		jQuery(".overlay, .popup-load").removeClass("active");
	});

	// скролл
	var draggable = false;
	var scrollbar;
	// клик
	jQuery(document).on("mousedown",".scrollbar .ball",function (e){
		draggable = true;
		scrollbar = jQuery(this).closest(".scrollbar");
		point_move(e);
	});
	jQuery(document).on("mouseup",function(){
		draggable = false;
	});
	jQuery(document).on("mousemove",function (e){
		if (draggable) {
			e.preventDefault();
			point_move(e);
		}
	});
	// touch
	jQuery(document).on("touchstart",".scrollbar .ball",function (e){
		window.addEventListener('touchmove', preventDefault, { passive: false });
		draggable = true;
		scrollbar = jQuery(this).closest(".scrollbar");
		point_move(e);
	});
	jQuery(document).on("touchend",function(){
		draggable = false;
		window.removeEventListener('touchmove', preventDefault, { passive: false });
	});
	jQuery(document).on("touchmove",function (e){
		if (draggable) {
			point_move(e);
		}
	});
	// function
	function point_move(e){
		if (draggable) {
			var ball = scrollbar.find(".ball");
			var Y_mouse = e.pageY || e.originalEvent.touches[0].clientY || e.originalEvent.changedTouches[0].clientY;
			var Y_element = scrollbar.offset().top;
			var Y = Y_mouse - Y_element;
			var H = scrollbar.height();
			Y = 100/H*Y; // percent
			if (Y < 0)
				Y = 0;
			else if (Y > 100)
				Y = 100;
			// move
			ball.css({
				top: Y+"%",
			});
			var sblock = scrollbar.prev(".scroll-block");
			var sbox = sblock.find(".scroll-box");
			var H_sblock = sblock.height();
			var H_sbox = sbox.height();
			var size = H_sbox - H_sblock;
			sbox.css({
				transform: "translateY(-"+size/100*Y+"px)",
			});
		}
	};
	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
	      e.preventDefault();
	  e.returnValue = false;  
	}

	var touch_draggable = false;
	var scrollblock;
	var Y_start_touch;
	// touch
	jQuery(document).on("touchstart",".scroll-block",function (e){
		window.addEventListener('touchmove', preventDefault, { passive: false });
		touch_draggable = true;
		scrollblock = jQuery(this);
		Y_start_touch = e.pageY || e.originalEvent.touches[0].clientY || e.originalEvent.changedTouches[0].clientY;
	});
	jQuery(document).on("touchend",function(){
		touch_draggable = false;
		window.removeEventListener('touchmove', preventDefault, { passive: false });
	});
	jQuery(document).on("touchmove",function (e){
		if (touch_draggable) {
			scroll_move(e);
		}
	});
	// function
	function scroll_move(e) {
		if (touch_draggable) {
			var Y_touch = e.pageY || e.originalEvent.touches[0].clientY || e.originalEvent.changedTouches[0].clientY;
			var Y = Y_start_touch - Y_touch;
			Y_start_touch = Y_touch;
			var H = scrollblock.height();
			Y = 100/H*Y; // percent
			var scrlbr = scrollblock.next(".scrollbar");
			var ball = scrlbr.find(".ball");
			var per = 100/scrlbr.height()*parseFloat(ball.css("top"));
			Y = Y + per;
			if (Y < 0)
				Y = 0;
			else if (Y > 100)
				Y = 100;
			// move
			ball.css({
				top: Y+"%",
			});
			var sblock = scrollblock;
			var sbox = sblock.find(".scroll-box");
			var H_sblock = sblock.height();
			var H_sbox = sbox.height();
			var size = H_sbox - H_sblock;
			sbox.css({
				transform: "translateY(-"+size/100*Y+"px)",
			});
		}
	};

	// wheel
	var W_draggable = false;
	var W_scrollblock;
    $(document).on('mouseover',".scroll-block",function(e){
    	W_draggable = true;
    	W_scrollblock = jQuery(this);
    });
    $(document).on('mouseleave',".scroll-block",function(e){
    	W_draggable = false;
    });
    $(".scroll-block").bind('mousewheel', function(e){
		if (W_draggable) {
    		W_move(e);
    	};
    });
	// function
	function W_move(e) {
		if (W_draggable) {
	    	var step = 100;
			var H = W_scrollblock.height();
			Y = 100/H*step; // percent
			var scrlbr = W_scrollblock.next(".scrollbar");
			var ball = scrlbr.find(".ball");
			var per = 100/scrlbr.height()*parseFloat(ball.css("top"));
	        if(e.originalEvent.wheelDelta /120 > 0) {
	            // scrolling up
				Y = per - Y;
	        }
	        else{
	            // scrolling down
				Y = per + Y;
	        }
			if (Y < 0)
				Y = 0;
			else if (Y > 100)
				Y = 100;
			// move
			ball.css({
				top: Y+"%",
			});
			var sblock = W_scrollblock;
			var sbox = sblock.find(".scroll-box");
			var H_sblock = sblock.height();
			var H_sbox = sbox.height();
			var size = H_sbox - H_sblock;
			sbox.css({
				transform: "translateY(-"+size/100*Y+"px)",
			});
		};
    };
});


//Change input value
$(document).ready(function(){
$('.b1').on('click', function(e){
	$('.input-text').html('Напишите синоним:');
});
$('.b2').on('click', function(e){
	$('.input-text').html('Напишите антоним:');
});
$('.b3').on('click', function(e){
	$('.input-text').html('Напишите пароним:');
});
$('.b4').on('click', function(e){
	$('.input-text').html('Напишите ассоциацию:');
});
});

//Change input value
$(document).ready(function(){
	$('.popup-load .button').on('click', function(e){
		$('.popup-load .button').removeClass('popupload-btn-active');
		$(this).toggleClass('popupload-btn-active');
	});
});