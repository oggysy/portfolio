
'use strict';
function BlurTextAnimeControl() {
    $('.blurTrigger').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('blur');
        } else {
            $(this).removeClass('blur');
        }
    });
}
$(window).scroll(function () {
    BlurTextAnimeControl();
});


$(window).on('load', function () {
    BlurTextAnimeControl();
});