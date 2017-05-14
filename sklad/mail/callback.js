$(document).ready(function(){
	$('.callback_hanlder input:not([type="submit"]),textarea').keypress(function(e) {
		$('.callback_hanlder input:not([type="submit"]),textarea').removeAttr('style');
	});

	$('.callback_hanlder').submit(function(e) {
		e.preventDefault();
		_this = this;

		is_popup = ($(this).hasClass('popup'));

		$(this).find('input:not([type="submit"]),textarea').removeAttr('style');
		if ($('#success_callback_hanlder').length) {
			$('#success_callback_hanlder').remove();
		}		

		$.ajax({
			type: 'post',
			url: '/callback.php?type=' + $(this).data('type'),
			data: $(this).serialize(),
			dataType: 'json',
			success: function(json) {
				if (json.ok == 0) {
					if (json.errors) {
						$.each(json.errors, function(i,field) {
							$(_this).find('[name="' +  field + '"]').attr('style', 'background: #fcd9df; outline: 1px solid #fcd9df');
						});
					}
				} else {
					container = $(_this).parent();

					if (!is_popup) {
						container.attr('style', 'position: relative');
					} 

					container.append('<div style="display:none;position:absolute;background:#ccc;top:50%;left:50%;width:' + (container.width()/2) + 'px;height:' + (container.height()/2) + 'px;margin-left:-' + (container.width()/4) + 'px;margin-top:-' + (container.height()/4) + 'px;text-align:center;opacity:.9;outline:1px solid #aaa;cursor:pointer;' + (container.width()/2) + '" id="success_callback_hanlder"><table style="width:100%;height:100%;"><tr><td style="text-align:center;vertical-align:middle;">Заявка успешно отправлена!</td></tr></table></div>');
					
					if (!is_popup) {
						$('#success_callback_hanlder').click(function() {
							$('#success_callback_hanlder').fadeOut(500, function() {
								$('#success_callback_hanlder').remove();
								container.removeAttr('style');
							});
						});
					} else {
						setTimeout(function() {
							$('#success_callback_hanlder').fadeOut(500, function() {
								$('#success_callback_hanlder').remove();
							});
						}, 2000);
					}

					$(_this).find('input:not([type="submit"]),textarea').val('');

					$('#success_callback_hanlder').fadeIn();
				}
			}
		});
	});
});