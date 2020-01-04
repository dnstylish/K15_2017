(function ($) {

    "use strict";

    $('.open-menu-btn').on('click', function () {
        const $this = $(this);
        if($this.hasClass('active')){
            $this.parents('.mobile-menu').find('.main-mobile-menu').removeClass('opened');
            $('body').removeClass('open_canvas');
            $this.removeClass('active');
        }else {
            $this.parents('.mobile-menu').find('.main-mobile-menu').addClass('opened');
            $('body').addClass('open_canvas');
            $this.addClass('active');
        }
    });


})(jQuery);