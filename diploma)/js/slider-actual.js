export const actualSlider = () => {
    new Swiper('.actual__slider', {
        loop: true,
        pagination: {
            el: '.actual__pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.actual__prev',
            nextEl: '.actual__next',
        },
    });
};