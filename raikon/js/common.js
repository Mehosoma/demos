$('#file-choice').change(function() {
    if ($(this).val() != '') $(this).prev().text($(this)[0].files[0].name);
    else $(this).prev().text('Прикрепите документ');
});

//ModalWindow
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
	
   		fixedContentPos: false,
    	fixedBgPos: true,
   		closeOnBgClick: true,

	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

//Date-Time

$('#datepicker').datepicker({
   locale: 'ru-ru'
});

$('#timepicker').timepicker({
	locale: 'ru-ru'
});