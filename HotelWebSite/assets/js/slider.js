//For Single-Room Page

var swiper = new Swiper(".roomGalleryTop", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".roomGalleryBottom", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".perMonth", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".next-button",
//         prevEl: ".prev-button",
//     },
// });

// var swiper = new Swiper(".imgSlider", {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
//
// var swiper = new Swiper(".textSlider", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".entertainmentSlider", {
//     slidesPerView: 5,
//     spaceBetween: 0,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//         },
//     }
// });

