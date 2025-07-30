// Inicializando la variable swiper
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nexEl: ".swiper-button-next",
        nexEl: ".swiper-button-prev",
    },
});

// Inicializando la otra variable
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nexEl: ".swiper-button-next",
        nexEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

// Otra config
let tabInputs = document.querySelectorAll(".tabInput");
//
tabInputs.forEach(function (input) {
    //
    input.addEventListener("change", function () {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper" + id);
        thisSwiper.swiper.update();
    });
});
