/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
const swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,
    // Parameters Navigations
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        // when window width is >= 1400px
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});

/*=============== SWIPER PRODUCTS ===============*/
const swiperProducts = new Swiper(".new-arrivals__container", {
    spaceBetween: 24,
    loop: true,
    // Parameters Navigations
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        // when window width is >= 1400px
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");
console.log(tabs);

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active__tab");
        });
        target.classList.add("active__tab");

        tabs.forEach((tab) => {
            tab.classList.remove("active__tab");
        });
        tab.classList.add("active__tab");
    });
});
