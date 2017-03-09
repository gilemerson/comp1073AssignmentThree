/*
    * File Name: Assignment Two - Mini Portfolio - Contact Page Update
    * Author Name: Gil Emerson (200186807)
    * Website Name: GE Design Studio 
    * File Description: Bio Javascript Page - (bio.js)
*/

/*Custom JS Lives Here*/

//Title variable creates a link to refrece 
var title = document.getElementById("title");
console.log(title.textContent);
title.textContent = "GE Design Studio";

//paragraph One variable creates a link to refrece 
var paragraphOne = document.getElementById("paragraphOne");
console.log(paragraphOne.textContent);
paragraphOne.textContent = "Welcome and thank you for visiting Gil Emerson Design Studio. My name is Gil Emerson, I am a freelance web designer serving in Simcoe County all the way to the greater GTA. If you stopped here because you need a specialist in website creation, then you have come the right place. Please check my website at your own pace and see what we can do for you. Have a look at the quality of work and services offered. Until then let's get to know each other better. Gil Emerson Design Studio offers modern websites and web services that are as functional as their appearance. Whether you are an entrepreneur that has an idea or a company looking to create a website to represent your company or upgrade an existing website, Gil Emerson Design studio can help you towards the best solution. My team is driven by passion for pushing every idea as far as it can go and helping our clients achieve their design goals. Here at Gil Emerson Design Studio we create impactful and engaging user experiences, helping our clients build their own online brand presence, grow their business and connect with their clients. Every project is a unique experience for our creative and tech-savvy team.";

//paragraphTwo variable creates a link to refrece 
var paragraphTwo = document.getElementById("paragraphTwo");
console.log(paragraphTwo.textContent);
paragraphTwo.textContent = "Most our work hours are spent designing, maintaining and developing websites. Whatever your needs in concept or budget, contact me for a free estimate today. Quite simply, we create amazing website designs that connect with your target audience and engage visitors. A professional website design offers your customers information that is easy to find, entertaining to read, and an honest reflection of who you are. Our team will ensure that your website's design delivers in all respects. A polished website that screams professionalism, provides strong search ranking, effective content delivery, and an easy to use content management system. We will not only build you a website, we will not rest until we've built you a website that truly delivers. Our emphasis is on enablement and the delivery of solutions that go beyond client expectations.";


//headingFourOne variable creates a link to refrece 
var headingFourOne = document.getElementById("headingFourOne");
console.log(headingFourOne.textContent);
headingFourOne.textContent = "24/7 Support";
//paragraphThree
var paragraphThree = document.getElementById("paragraphThree");
console.log(paragraphThree.textContent);
paragraphThree.textContent = "Gil Emerson Design Studio offers 24/7/365 live chat support to all out clients and users";


//headingFourTwo variable creates a link to refrece 
var headingFourTwo = document.getElementById("headingFourTwo");
console.log(headingFourTwo.textContent);
headingFourTwo.textContent = "Responsive Layout";
//paragraphFour variable creates a link to refrece
var paragraphFour = document.getElementById("paragraphFour");
console.log(paragraphFour.textContent);
paragraphFour.textContent = "This is an approach aimed at crafting websites to provide an optimal viewing experience on all devices";


//headingFourThree variable creates a link to refrece 
var headingFourThree = document.getElementById("headingFourThree");
console.log(headingFourThree.textContent);
headingFourThree.textContent = "Custom Design";
//paragraphFive variable creates a link to refrece 
var paragraphFive = document.getElementById("paragraphFive");
console.log(paragraphFive.textContent);
paragraphFive.textContent = "With personalized custom website design created just for you, helping your business stand out";


//headingFourFour variable creates a link to refrece 
var headingFourFour = document.getElementById("headingFourFour");
console.log(headingFourFour.textContent);
headingFourFour.textContent = "Secure & Reliable";
//paragraphSix variable creates a link to refrece 
var paragraphSix = document.getElementById("paragraphSix");
console.log(paragraphSix.textContent);
paragraphSix.textContent = "Provide software to protect your website from hackers, viruses and blacklists";



//paragraphSeven variable creates a link to refrece
var paragraphSeven = document.getElementById("paragraphSeven");
console.log(paragraphSeven.textContent);
paragraphSeven.textContent = "SEO is one of the most misunderstood and misinterpreted terms in the world of marketing. SEO’s unfair characterization as a kind of alchemy over the past decade has caused many otherwise savvy business people to devalue its importance as part of a good, solid marketing plan for small, mid-sized, and even large businesses. I find this extremely unfortunate because SEO is a very viable marketing outlet that can bring your business more qualified leads and customers. Moreover, studies have shown that SEO can have a better ROI than traditional forms of marketing like TV and print ads. Like any other marketing method, SEO is not magic, but it provides a business visibility, branding, web traffic, a high ROI, credibility, and insight into customer behavior. Our company believes this is one of the most important services we can offer to make sure your website is exposed to the public and most important your targeted demographic.";


//contactHeader variable creates a link to refrece 
var contactHeader = document.getElementById("contactHeader");
console.log(contactHeader.textContent);
contactHeader.textContent = "Want to know the price for our services? Get a quote here!";

//wowtada variable creates a link to refrece 
var wowtada = document.getElementById("wowtada");
console.log(wowtada.textContent);
wowtada.textContent = "Contact Me";

//footerPhoneNumber variable creates a link to refrece 
var footerPhoneNumber = document.getElementById("footerPhoneNumber");
console.log(footerPhoneNumber.textContent);
footerPhoneNumber.textContent = "T: 705-796-2933";

//footeraddress variable creates a link to refrece 
var footeraddress = document.getElementById("footeraddress");
console.log(footeraddress.textContent);
footeraddress.textContent = "P.O Box 365 Stayner, ON, L0M 1S0";

//End Content JS


/*Popupt Navigation*/
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