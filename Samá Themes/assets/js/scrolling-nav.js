
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    $('a.page-scroll[href*="#"]:not([href="#"]), .btn-work-header').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -0)
                }, 700, "easeInOutExpo");
                return false;
            }
        }
    });

});

