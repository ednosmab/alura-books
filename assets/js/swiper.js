const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});