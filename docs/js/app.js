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

var slide = document.getElementById("bat-slider-item");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

const slider = () => {
    slide.style.transform = `translateX(0)`;
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
}
btn1.addEventListener("click", slider);
// btn1.onclick = sliderImage(0);   
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
};
btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
};
btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
};