$(function () {
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/topvektor.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/bottomvector.svg" alt=""></button>',
        vertical: true
    });
});

$('.product_name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product_content',
    vertical: true,
});
$('.product_content').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // asNavFor: '.product_name',
    fade: true,
    vertical: true,

});