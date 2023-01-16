let header = document.getElementById('shopify-section-new-header')
let navlinks = document.getElementById('navbar-full-width')
let icons_container = document.getElementById('link-icons')
let window_ = document.getElementById('main-content')
let first_container = document.getElementById('new-header-container')
let lines = document.getElementById('mobile-button-lines');

console.log(lines)

let toggle_menu = document.getElementById('toggle-menu');
let ninja_menu = document.getElementById('left-hidden-menu-box');
let displayed = false;

toggle_menu.onclick = () => {

    console.log("display status:" + displayed)

    if (displayed === 'false') {
        ninja_menu.style.visibility = 'visible';
    } else {
        ninja_menu.style.visibility = 'hidden';
    }
    displayed = !displayed
}

window.addEventListener('scroll', () => {
    
    if ( window.scrollY > 0) {
        header.classList.add('white-new-header');
        first_container.classList.add('new-padding-header');
        navlinks.classList.add('white-header-links');
        icons_container.classList.add('white-header-icons');
        lines.classList.add('black-lines-button');
    } else {
        header.classList.remove('white-new-header');
        first_container.classList.remove('new-padding-header')
        navlinks.classList.remove('white-header-links');
        icons_container.classList.remove('white-header-icons');
        lines.classList.remove('black-lines-button');
    }
})