// $(".promotion-slide").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     arrows: false,
//     responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 centerMode: true,
//             }
//         }
//     ]
// });

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});