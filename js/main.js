window.onload = function () {
    setTimeout(function () {
        (function ($) {
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
    }, 950)
}
// menu
document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.querySelector(".menu-btn");
    const menu = document.getElementById("menu");
    const menuItems = menu.querySelectorAll("li a");
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("d-none");
    });
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.add("d-none");
        });
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== openMenuButton) {
            menu.classList.add("d-none");
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
document.getElementById("closeMenu").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.add("d-none");
});
// Smooth Scroll
const btn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// gallery
const gallery = document.querySelector('.gallery');
for (let i = 1; i <= 9; i++) {
    gallery.innerHTML += `
        <img src="img/photo/${i}.jpg" alt="Image ${i}">
    `;
}
// confer
const confer = document.querySelector('.confer');
for (let i = 1; i <= 4; i++) {
    confer.innerHTML += `
        <img src="img/conference/${i}.jpg" alt="Image ${i}">
    `;
}
