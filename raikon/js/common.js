$('#file-choice').change(function() {
    if ($(this).val() != '') $(this).prev().text($(this)[0].files[0].name);
    else $(this).prev().text('Прикрепите документ');
});