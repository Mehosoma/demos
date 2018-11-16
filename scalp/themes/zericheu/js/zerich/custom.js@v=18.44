(function () {
    if (window.$) {
        $(document).ready(function () {
            //tools

            function include(array, callback) {
                var loader = function (src, handler) {
                    var script = document.createElement("script");
                    script.src = src;
                    script.onload = script.onreadystatechange = function () {
                        script.onreadystatechange = script.onload = null;
                        handler();
                    };
                    var head = document.getElementsByTagName("head")[0];
                    (head || document.body).appendChild(script);
                };
                (function () {
                    if (array.length !== 0) {
                        loader(array.shift(), arguments.callee);
                    } else {
                        if (callback && typeof (callback) === 'function') {
                            callback();
                        }
                    }
                })();
            }

            if (typeof getCookie === 'undefined') {
                var getCookie = window.getCookie = function (name) {
                    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                    return matches ? decodeURIComponent(matches[1]) : undefined;
                };
            }

            function addPxlImg () {
                if (localStorage.getItem('apypxlElement') && !getCookie("apypxlLoad")) {
                    include(['https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js'], function() {
                        $('body').append(localStorage.getItem('apypxlElement'));
                        console.log('apypxlElement added');
                        localStorage.removeItem('apypxlElement');
                        var date = new Date(new Date().getTime() + 60 * 1000 * 60 * 30);
                        document.cookie = "apypxlLoad=true; path=/; expires=" + date.toUTCString();
                    });
                }
            }
            //end tools

            if ($('#sidemenu').length && $('body > .wrapper').length) {
                var pageWrapper = $("body > .wrapper");
                var adminSidemenu = $('#sidemenu');
                if (window.innerWidth < 600) {
                    adminSidemenu.css({display: 'none'});
                } else {
                    pageWrapper.css({width: 'calc(100vw - 78px)', right: 0, position: 'absolute'});
                    adminSidemenu.css({transform: 'translateX(-65px)'});
                }
            }

            var forms = $('form');
            window.formsOnSubmit = [];
            for (var i = 0; i < forms.length; i++) {
                window.formsOnSubmit[i] = forms[i].onsubmit;
                forms[i].onsubmit = function(){
                    if (getCookie("utm_actionpay")) {
                        var roistatId = 1;
                        try {
                            roistatId = JSON.parse(getCookie("roistat_visit"));
                        } catch (e) {
                            roistatId = 1;
                        }
                        try {
                            if (JSON.parse(getCookie("utm_actionpay")).actionpay && JSON.parse(getCookie("utm")).campaign === 'actionpay') {
                                var apypxlElement = '<img src="https://apypp.com/ok/16567.png?actionpay=' + JSON.parse(getCookie("utm_actionpay")).actionpay + '&apid=' + roistatId + '" width="1px" height="1px"/>';
                                localStorage.setItem('apypxlElement', apypxlElement);
                                console.log('element pxl will be added');
                                if (typeof window.formsOnSubmit[i] === 'function') {
                                    window.formsOnSubmit[i]();
                                    addPxlImg();
                                }
                            } else {
                                if (typeof window.formsOnSubmit[i] === 'function') {
                                    window.formsOnSubmit[i]();
                                }
                            }
                        } catch (e) {
                            console.log('invalid utm cookie json, can not send data to pixel!');
                            if (typeof window.formsOnSubmit[i] === 'function') {
                                window.formsOnSubmit[i]();
                            }
                        }
                    }
                }
            }

            addPxlImg();

            $('body').append('<div id="toTopButton" style="background: url(/themes/zericheu/images/promo/autofollow/Artboard.svg);width: 80px;height: 80px;position: fixed;bottom: 30px;left: 30px;cursor: pointer;"></div>');
            if (window.scrollY < 800) {
                $('#toTopButton').hide();
            } else {
                $('#toTopButton').show();
            }


            $(document).scroll(()=>{
                if ($('#toTopButton').fadeIn) {
                    let y = $(this).scrollTop();
                    if (y > 800) {
                        $('#toTopButton').fadeIn();
                    } else {
                        $('#toTopButton').fadeOut();
                    }
                }
            });

            $('#toTopButton').click(()=>{
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });
    }


}());