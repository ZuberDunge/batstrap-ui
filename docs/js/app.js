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
if (localStorage.getItem("theme")) {
    document.body.classList.add("bat-dark")
    toggleIcon.classList = "toggle-i-icon far fa-lightbulb-on";
    clickedTheme = false;
}
toggleTheme.addEventListener("click", () => {
    if (clickedTheme) {
        toggleIcon.classList = "toggle-i-icon far fa-lightbulb-on";
        document.body.classList.add("bat-dark")
        localStorage.setItem("theme", "dark");
    } else {
        toggleIcon.classList = "toggle-i-icon fas fa-moon"
        document.body.classList.remove("bat-dark")
        localStorage.removeItem("theme")
    }
    clickedTheme = !clickedTheme;
})

let sideBarOpen = false;
const sideMenuIcon = document.querySelector(".bat-side-menu-icon");
const sideBar = document.querySelector(".bat-sidebar")
const sideContent = document.querySelector(".bat-content")
sideMenuIcon.addEventListener("click", () => {
    sideBarOpen = !sideBarOpen;
    if (sideBarOpen) {
        sideBar.classList.add("bat-show-sidebar");
        sideMenuIcon.innerHTML = ` Menu <i class="fas fa-angle-double-left"></i>`;
        sideContent.classList.add("bat-blur-5px");

    } else {
        sideBar.classList.remove("bat-show-sidebar");
        sideMenuIcon.innerHTML = ` Menu <i class="fas fa-angle-double-right"></i>`;
        sideContent.classList.remove("bat-blur-5px");
    }
});



const batDismiss = document.querySelectorAll(".bat-dismiss")

batDismiss.forEach(e => {
    e.addEventListener("click", (e) => {
        let parentAlert = e.target.parentNode;
        parentAlert.style.display = "none";
    })
})

document.querySelector("#modal-demo").addEventListener("click", () => {
    document.querySelector(".bat-modal").classList.add("bat-modal-show")
})

document.querySelector("#close-modal").addEventListener("click", () => {
    document.querySelector(".bat-modal").classList.remove("bat-modal-show")
})