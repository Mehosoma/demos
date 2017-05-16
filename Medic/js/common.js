function checkParams() {
    var name = $('#modal-login').val();
    var pass = $('#modal-pass').val();    
     
    if(name.length != 0 && pass.length != 0) {
        $('#button-header-form').removeClass('disabled');
    } else {
        $('#button-header-form').addClass('disabled');
    }
}