const header = document.getElementById('static-white-header')
const header_container = document.getElementById('shopify-section-new-header')
const navlinks = document.getElementById('static-black-links')
const icons_container = document.getElementById('black-icons')
const lines = document.getElementById('black-hamburger-lines');

let toggle_menu = document.getElementById('toggle-menu');
let ninja_menu = document.getElementById('left-hidden-menu-box');
let x = document.getElementById('close');
let search_glass = document.getElementById('search-link-glass')
let close_search = document.getElementById('close-search-form')
let right_box = document.getElementById('right-search-form')

function handdle(xx, box, what) {
    xx.onclick = (e) => {
        e.preventDefault();
        what === 'close' ? box.classList.remove('is-open') : box.classList.add('is-open')
    }
}

handdle(toggle_menu, ninja_menu, "open")
handdle(search_glass, right_box, "open")

handdle(x, ninja_menu, "close")
handdle(close_search, right_box, "close")

window.addEventListener('scroll', () => {
    
    if ( window.scrollY > 0) {
        header_container.classList.add('top-0')
        first_container.classList.add('new-padding-header');
    } else {
        header_container.classList.remove('top-0')
        first_container.classList.remove('new-padding-header')
    }
})