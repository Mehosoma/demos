// tabs
jQuery(document).on("click",".menu li",function(){
	jQuery(".menu").addClass("active");
	jQuery(".menu li").removeClass("active");
	jQuery(this).addClass("active");
	jQuery(".menu .tab").removeClass("active");
	jQuery(".menu .tab").eq(jQuery(this).index()).addClass("active");
	jQuery(".img-block").addClass("active");
	jQuery(".menu .close").addClass("close-active");
});
jQuery(document).on("click",".menu .close",function(){
	jQuery(".menu").removeClass("active");
	jQuery(".menu li").removeClass("active");
	jQuery(".menu .tab").removeClass("active");
	jQuery(".img-block").removeClass("active");
	jQuery(".menu .close").removeClass("close-active");
});
// list
jQuery(document).on("click",".menu .list .list-title",function(){
	if (!jQuery(this).parent().hasClass("active"))
		jQuery(".menu .list").removeClass("active");
	jQuery(this).parent().toggleClass("active");
});
jQuery(document).on("click",".menu .list .list-box",function(){
	// list-title
	var list = jQuery(this).closest(".list");
	list.find(".list-title span").text(jQuery(this).find("span").text());
	jQuery(".menu .list").removeClass("active");
});
// radio
jQuery(document).on("click",".menu label",function(){
	jQuery(this).closest(".checkbox-block").find("label").removeClass("active");
	jQuery(this).addClass("active");
});
// color
jQuery(document).on("click",".menu .color-block .color-box",function(){
	jQuery(this).closest(".color-block").find(".color-box").removeClass("active");
	jQuery(this).addClass("active");
});
// inner-box
jQuery(document).on("click",".menu .inner-box",function(){
	jQuery(this).closest(".inner-block").find(".inner-box").removeClass("active");
	jQuery(this).closest(".inner-block").find("p").removeClass("active");
	jQuery(this).addClass("active");
	jQuery(this).find('p').addClass("active");
});
// inner-tab
jQuery(document).on("click",".menu .inner-tab",function(){
	var ths = jQuery(this);
	ths.closest(".inner-tabs").find(".inner-tab").removeClass("active");
	ths.addClass("active");
	ths.closest(".inner-tab-block").find(".inner-tab-box").removeClass("active");
	ths.closest(".inner-tab-block").find(".inner-tab-box").eq(ths.index()).addClass("active");
});
// txt-block
jQuery(document).on("click",".menu .txt-box",function(){
	jQuery(this).closest(".txt-block").find(".txt-box").removeClass("active");
	jQuery(this).addClass("active");
});
// inner-pug
jQuery(document).on("click",".menu .inner-pug",function(){
	jQuery(this).closest(".inner-pugs").find(".inner-pug").removeClass("active");
	jQuery(this).addClass("active");
});


//
jQuery(document).on("click",".menu .tab-sleeve .inner-box",function(){
	if (jQuery(this).hasClass("short"))
			jQuery('.mangets').css('display','none');
		else{
			jQuery('.mangets').css('display','flex');
		}

});

//
jQuery(document).on("click",".menu .tab-sil .inner-box",function(){
	if (jQuery(this).hasClass("sil-gen")){
			$('.bottom-hid').css('display','flex')
			$('.back-hid').css('display','none');
		}else{
			jQuery('.bottom-hid').css('display','none')
			jQuery('.back-hid').css('display','flex');
		}

});