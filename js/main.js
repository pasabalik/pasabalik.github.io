// -----------------------------------------------------------------------------
// Main Javascript
// -----------------------------------------------------------------------------
(function($) {
    "use strict";

    $(window).load(function(){

        // Preloader
        // ----------------------------------------
        if($('#preloader').length > 0){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        }

        // news post slider
        // ----------------------------------------
        if($('.n-post-slider').length > 0){
            $('.n-post-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                autoWidth: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }
    });

    
    // Animating the navbar toggle
    // ----------------------------------------
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
    });

    // Sliders
    // ----------------------------------------

    // home splash slider
    if($('.splash-slider').length > 0){
        $('.splash-slider').owlCarousel({
            singleItem: true,
            transitionStyle: 'fade',
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: true,
            navigation: false
        });
    }

    // simple gallery slider
    if($('.gallery-slider').length > 0){
        $('.gallery-slider').owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: true
        });
    }

    // full width gallery slider
    if($('.full-gallery-slider').length > 0){
        $('.full-gallery-slider').owlCarousel({
            itemsDesktop: [1199,4],
            itemsDesktopSmall: [992,3],
            itemsTablet: [768,3],
            itemsMobile: [479,1],
            slideSpeed: 1000,
            autoPlay: 5000,
            pagination: false,
            navigation: true,
            navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
        });
    }

    // testimonials slider
    if($('.testimonials-slider').length > 0){
        $('.testimonials-slider ').owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: true,
            navigation: false
        });
    }

    // Progress
    // ----------------------------------------
    if($('.progress-circle').length > 0){
        $('.progress-circle').circleProgress({
            size: 170,
            startAngle: -Math.PI / 2,
            thickness: 5,
            emptyFill: "#f9f9f9",
            fill: {
                color: "#d7514d"
            }
        });
    }

    // Gallery Popup
    // ----------------------------------------

    // image popup
    if($('.popup').length > 0){
        $('.popup').magnificPopup({
          type: 'image'
        });
    }

    // video popup
    if($('.popup-video').length > 0){
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });
    }

    // Masonry Grid
    // ----------------------------------------
    if($('.masonry').length > 0){
        $(".masonry").gridalicious({
            gutter: 20,
            width: 330,
            selector: '.post'
        });
    }
})(jQuery);


