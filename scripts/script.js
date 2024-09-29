window.addEventListener("load", () => {
    let openIcon = document.querySelector(".mobile_menu--icon-open");
    let closeIcon = document.querySelector(".mobile_menu--icon-close");

    const toggleMenu = () => {
        document.body.classList.toggle("open");
    }

    openIcon.addEventListener("click", toggleMenu);

    closeIcon.addEventListener("click", toggleMenu);
});
