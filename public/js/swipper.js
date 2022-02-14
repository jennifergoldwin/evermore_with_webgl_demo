const swiper = new Swiper('.weapon-section', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiper1 = new Swiper('.items-section', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const swiper2 = new Swiper('.hero-section', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper3 = new Swiper('.world-section', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});