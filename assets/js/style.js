$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('affix');
    } else {
        $('.header').removeClass('affix');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $('.hasDatepicker').flatpickr({
        dateFormat: "d/m/Y"
    });


    var check_in = flatpickr("#from", { dateFormat: "d/m/Y", });
    var check_out = flatpickr("#to", { dateFormat: "d/m/Y", });



    $(".toggle-menu").click(function() {
        $('.mobile-menu').toggleClass('opened');
        $('body').addClass('ov-hidden');
    });
    $(".mobile-menu-close").click(function() {
        $('.mobile-menu').removeClass('opened');
        $('body').removeClass('ov-hidden');
    });


    $(".has-submenu").mouseover(function() {
        $(this).children('.submenu').children('.m-menu').fadeIn();
    });
    $(".has-submenu").mouseleave(function() {
        $(this).children('.submenu').children('.m-menu').fadeOut();
    });



    $(".tourz-pop-ser-btn").click(function() {
        var id_book = $(this).attr('data-id');
        $('.ver-2-search-form').not($('.ver-2-search-form[id = ' + id_book + ']')).hide();
        $('.ver-2-search-form[id = ' + id_book + ']').show();
    });













});