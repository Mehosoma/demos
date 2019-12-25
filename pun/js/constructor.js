jQuery(document).ready(function(){
	document.getElementById("view-box").appendChild( View.getCanvas() );	

	onTextureChange();
	onModelChange();
		
	View.setSize( 1600, 1200 );

	// выбор текстуры
	jQuery(document).on("click","#T .inner-box",function(){
		onTextureChange();
	});
	// выбор передней части
	jQuery(document).on("click","#F .inner-box",function(){
		// выбирая переднюю часть мы меняем допустимые варианты спины
		var ind = jQuery(this).index();
		jQuery("#B .inner").removeClass("active");
		jQuery("#B .inner").eq(ind).addClass("active");
		jQuery("#B .inner .inner-box").removeClass("active");
		jQuery("#B .inner.active .inner-box:first").addClass("active");
		
		onModelChange();
	});
	// выбор остальных частей
	var Ps = "#S .inner-box, #B .inner-box, #V .inner-box";
	jQuery(document).on("click",Ps,function(){
		onModelChange();
	});

	function onTextureChange()
	{
		// путь к текстуре
		var t = jQuery("#T .inner-box.active img").attr("src");
		View.setTexture( t );
	}

	function onModelChange()
	{
		// путь к 3д моделям
		var folder = "obj3/"
		// передняя часть... в данный момент переключение осуществляется из пункта "силуэт"
		var f = folder + jQuery("#F .inner-box.active").attr("data-obj");
		// спина
		var b = folder + jQuery("#B .inner-box.active").attr("data-obj");
		// рукава
		var s = folder + jQuery("#S .inner-box.active").attr("data-obj");
		// манжет
		var corner = s == folder + "sleeve_long.obj" ? folder + "corner_cut.obj" : null;
		// воротник
		var v = folder + jQuery("#V .inner-box.active").attr("data-obj");
		
		View.setValues( f, b, s, corner, v );
	}
});