$(document).ready(function () {
    function leftBar() {
        var $doc = $(document);
        var $slidemenu_bg = $('#sidemenu-bg');
        var $sidemenu = $('#sidemenu');
        var $has_submenu = $sidemenu.find('> li.has-submenu');
        var $no_submenu = $sidemenu.find('> li:not(.has-submenu)');
        var removeActive = null;

        var move = {
            up: $('#move-up'),
            down: $('#move-down'),
            last: $doc.scrollTop()
        };

        move.up.click(function () {
            move.last = $doc.scrollTop();
            $doc.scrollTop(0);
            $doc.scroll();
            return move.down.removeClass('hide');
        });

        move.down.click(function () {
            $doc.scrollTop(move.last);
            $doc.scroll();
            move.up.removeClass('hide');
            return move.down.addClass('hide');
        });

        $doc.scroll(function () {
            if ($doc.scrollTop() > 0) {
                move.up.removeClass('hide');
                return move.down.addClass('hide');
            } else {
                return move.up.addClass('hide');
            }
        });

        $has_submenu.hover(function () {
                var $t = $(this);
                $has_submenu.removeClass('active');
                $t.addClass('active');
                $slidemenu_bg.removeClass('hide');
                return clearInterval(removeActive);
            }
            , function () {
                const $t = $(this);
                return removeActive = setTimeout((function () {
                    $t.removeClass('active');
                    return $slidemenu_bg.addClass('hide');
                }), 1000);
            });

        const hide = function () {
            $slidemenu_bg.addClass('hide');
            return $has_submenu.removeClass('active');
        };

        $slidemenu_bg.click(hide);
        return $no_submenu.hover(hide);
    }

    $('.nav-sub-menu li > .sub-menu-q').parent().hover(function() {
        var submenu = $(this).children('.sub-menu-q');
        if ( $(submenu).is(':hidden') ) {
            $(submenu).slideDown(200);
        } else {
            $(submenu).slideUp(200);
        }
    });

    leftBar();
});


