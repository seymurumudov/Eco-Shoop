// -------- bu vanilla js ile yazilmis kodlardir

// let dropdownBtn = document.querySelector(".dropdown-category button")
// let dropdownCategoryMenu = document.querySelector(".dropdown-category-menu")

// function showMenu() {
//     dropdownCategoryMenu.style.display = "block"
// }

// dropdownBtn.addEventListener("click", showMenu)


// ------ bura jquery ile yazilmis kodlardir

let dropdownBtn = $(".dropdown-category button")
let dropdownCategoryMenu = $(".dropdown-category-menu")

function showMenu() {
    dropdownCategoryMenu.slideToggle()
}

dropdownBtn.click(showMenu)


const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});