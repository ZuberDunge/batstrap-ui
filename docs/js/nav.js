const menuIcon = document.querySelector(".bat-nav-icon")
const menulist = document.querySelector("#bat-menu-list")
const toggleIcon = document.querySelector("#toggle-i-icon")

const toggleTheme = document.querySelector(".bat-theme-toggle")
let clickedMenu = true;


menuIcon.addEventListener("click", () => {

    if (clickedMenu) {
        menuIcon.classList.add("bat-nav-icon-hover")
        menulist.classList.add("bat-show-list")
    } else {
        menuIcon.classList.remove("bat-nav-icon-hover")
        menulist.classList.remove("bat-show-list")
    }
    clickedMenu = !clickedMenu;
})

let clickedTheme = true;
toggleTheme.addEventListener("click", () => {
    if (clickedTheme) {
        toggleIcon.classList = "toggle-i-icon far fa-lightbulb-on";
    } else {
        toggleIcon.classList = "toggle-i-icon fas fa-moon"
    }
    clickedTheme = !clickedTheme;
})