//FormSubmit
$(document).ready(function () {
    $("form").unbind('submit').on('submit', function(event) {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: '/mailer/send.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: function (data) {
              jQuery(formNm)[0].reset();
              $('.nice-select .current').text("Выберите священника");
            }
        });
        return false;
    });
});