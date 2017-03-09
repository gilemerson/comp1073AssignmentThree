/*
    * File Name: Assignment Three - Mini Portfolio - JSON DATA
    * Author Name: Gil Emerson (200186807)
    * Website Name: GE Design Studio 
    * File Description: App Javascript Page - (app.js)
*/

//Popout Navigation Menu

jQuery(document).ready(function ($) {
    //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll',
		{
		    previousTop: 0
		},
	    function () {
	        var currentTop = $(window).scrollTop();
	        //check if user is scrolling up
	        if (currentTop < this.previousTop) {
	            //if scrolling up...
	            if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
	                $('.cd-header').addClass('is-visible');
	            } else {
	                $('.cd-header').removeClass('is-visible is-fixed');
	            }
	        } else {
	            //if scrolling down...
	            $('.cd-header').removeClass('is-visible');
	            if (currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
	        }
	        this.previousTop = currentTop;
	    });
    }

    //open/close primary navigation
    $('.cd-primary-nav-trigger').on('click', function () {
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');

        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if ($('.cd-primary-nav').hasClass('is-visible')) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').addClass('overflow-hidden');
            });
        }
    });
});

//slider
jQuery(document).ready(function ($) {

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carousel-text').html($('#slide-content-0').html());

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
    });


    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});