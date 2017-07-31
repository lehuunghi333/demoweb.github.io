$(document).ready(function () {
    $('#slider').slick({
        prevArrow: "<button type='button' class='slick-prev'><</button>",
        nextArrow: "<button type='button' class='slick-next'>></button>",
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});