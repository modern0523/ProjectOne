$(function ()
{
        new Swiper('#lunbo1', {
        // pagination: '.swiper-pagination',
        // paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 5,
        loop:true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

        new Swiper('#lunbo2', {
        // pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false
    });
});