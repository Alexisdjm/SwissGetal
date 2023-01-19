let header = document.getElementById('shopify-section-new-header')
let navlinks = document.getElementById('navbar-full-width')
let icons_container = document.getElementById('link-icons')
let window_ = document.getElementById('main-content')
let first_container = document.getElementById('new-header-container')
let lines = document.getElementById('mobile-button-lines');

let toggle_menu = document.getElementById('toggle-menu');
let ninja_menu = document.getElementById('left-hidden-menu-box');
let x = document.getElementById('close');
let search_glass = document.getElementById('search-link-glass')
let close_search = document.getElementById('close-search-form')
let right_box = document.getElementById('right-search-form')

function open(box) {
    box.style.visibility = 'visible';
    document.getElementById('bootcamp-alexis').style.overflow = 'hidden';
}

function close(box) {
    box.style.visibility = 'hidden';
    document.getElementById('bootcamp-alexis').style.overflow = 'visible';
}

toggle_menu.onclick = () => {
    open(ninja_menu)
}
x.onclick = () => {
    close(ninja_menu)
}

search_glass.onclick = (e) => {
    e.preventDefault();
    open(right_box)
}

close_search.onclick = () => {
    close(right_box)
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