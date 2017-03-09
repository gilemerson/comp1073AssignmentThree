/*
    * File Name: Assignment Two - Mini Portfolio - Contact Page Update
    * Author Name: Gil Emerson (200186807)
    * Website Name: GE Design Studio 
    * File Description: Projects Javascript Page - (projects.js)
*/

/*Custom JS Lives Here*/

//Title variable creates a link to refrece 
var title = document.getElementById("title");
console.log(title.textContent);
title.textContent = "GE Design Studio";

//paragraphOne variable creates a link to refrece 
var paragraphOne = document.getElementById("paragraphOne");
console.log(paragraphOne.textContent);
paragraphOne.textContent = "Here we have laid out some examples of past projects we have completed for clients. These range from simple web applications to a fully functional website";

//headingOne variable creates a link to refrece 
var headingOne = document.getElementById("headingOne");
console.log(headingOne.textContent);
headingOne.textContent = "Example Projects";

//headingTwo variable creates a link to refrece 
var headingTwo = document.getElementById("headingTwo");
console.log(headingTwo.textContent);
headingTwo.textContent = "Emerson Marketing Group (EMG)";

//paragraphTwo variable creates a link to refrece 
var paragraphTwo = document.getElementById("paragraphTwo");
console.log(paragraphTwo.textContent);
paragraphTwo.textContent = "Canada's foremost sales organization specializing in infant and toddler products. We service all market channels from mass merchant and department stores to pharmacies, supermarkets and independent special retailers.";

//headingThree variable creates a link to refrece 
var headingThree = document.getElementById("headingThree");
console.log(headingThree.textContent);
headingThree.textContent = "Gil Emerson Design Studio Blog";

//paragraphThree variable creates a link to refrece 
var paragraphThree = document.getElementById("paragraphThree");
console.log(paragraphThree.textContent);
paragraphThree.textContent = "This is Gil Emerson Design Studios person WordPress blog";

//headingFour variable creates a link to refrece 
var headingFour = document.getElementById("headingFour");
console.log(headingFour.textContent);
headingFour.textContent = "GE Design Studio ";

//paragraphFour variable creates a link to refrece 
var paragraphFour = document.getElementById("paragraphFour");
console.log(paragraphFour.textContent);
paragraphFour.textContent = "Welcome to my personal portfolio. I am the President here at Gil Emerson Design Studio. Here we offer next generation web services. Creating impactful and engaging user websites, helping our clients build their online brand presence and grow their business, Enjoy";

//headingFive variable creates a link to refrece 
var headingFive = document.getElementById("headingFive");
console.log(headingFive.textContent);
headingFive.textContent = "Want to know the price for our services? Get a quote here! ";

//hours variable creates a link to refrece 
var footerPhoneNumber = document.getElementById("footerPhoneNumber");
console.log(footerPhoneNumber.textContent);
footerPhoneNumber.textContent = "T: 705-796-2933";

//footeraddress variable creates a link to refrece 
var footeraddress = document.getElementById("footeraddress");
console.log(footeraddress.textContent);
footeraddress.textContent = "P.O Box 365 Stayner, ON, L0M 1S0";



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