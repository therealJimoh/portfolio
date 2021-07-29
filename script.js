
const hambugger = document.querySelector(".hambugger");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");




const mobileMenu = () => {
    hambugger.classList.toggle("active");
    navList.classList.toggle("active");
}

const closeMobileMenu = () => {
    hambugger.classList.remove("active");
    navList.classList.remove("active");
}

navLink.forEach(link => link.addEventListener("click", closeMobileMenu));
hambugger.addEventListener("click", mobileMenu);