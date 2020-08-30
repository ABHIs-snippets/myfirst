const hamburger = document.querySelector('.nav-list .hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 700) {
        header.style.backgroundColor = "#29323c";


    } else {
        header.style.backgroundColor = "transparent";


    }
})