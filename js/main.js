// loader
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
    const openMenuButton = document.getElementById("openMenu");
    const menu = document.getElementById("menu");
    const openMenu = () => {
        menu.style.display = "block";
    };
    const closeMenu = () => {
        menu.style.display = "none";
    };
    const menuItems = menu.querySelectorAll("li a");
    menuItems.forEach(item => {
        item.addEventListener("click", closeMenu);
    });
    openMenuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        openMenu();
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== openMenuButton) {
            closeMenu();
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
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

for (let i = 1; i <= 50; i++) {
    gallery.innerHTML += `
        <img src="img/photo/${i}.jpg" alt="Image ${i}">
    `;
}
// confer
const confer = document.querySelector('.confer');

for (let i = 1; i <= 9; i++) {
    confer.innerHTML += `
        <img src="img/conference/${i}.jpg" alt="Image ${i}">
    `;
}
