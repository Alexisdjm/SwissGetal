let header = document.getElementById('new-header-container')
const header_container = document.getElementById('shopify-section-new-header')
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

const filter_menu = document.getElementById('product-filter-menu')
let shop_by_link = document.getElementById('div-0')
let inner_lists = document.getElementById('product-lists-flex')
const aboutUs_link = document.getElementById('div-1')
const aboutUs = document.getElementById('about-us-menu')

let counter = 0

let links = [shop_by_link, aboutUs_link, search_glass]

links.forEach((element) => {
    element.onclick = (e) => { e.preventDefault() }
})

const arr = [shop_by_link, filter_menu]
const arr2 = [aboutUs_link, aboutUs]

arr2.forEach(function(element) {
    element.onmouseenter = () => {
        counter++
        if (counter > 0) {
            aboutUs.classList.add('about-us-hover')
            if (window.scrollY === 0) {
                header.classList.add('white-new-header');
                navlinks.classList.add('white-header-links');
                icons_container.classList.add('white-header-icons');
                lines.classList.add('black-lines-button');
            }    
        }
    }
    element.onmouseleave = () => {
        counter--
        if (counter < 1) {
            aboutUs.classList.remove('about-us-hover')
            if (window.scrollY === 0 && counter < 1) {
                header.classList.remove('white-new-header');
                navlinks.classList.remove('white-header-links');
                icons_container.classList.remove('white-header-icons');
                lines.classList.remove('black-lines-button');
            }  
        }
    }
})

arr.forEach(function(element) {
    element.onmouseenter = () => {
        counter++
        if (counter > 0) {
            filter_menu.classList.add('open-hover')
            if (window.scrollY === 0) {
                header.classList.add('white-new-header');
                navlinks.classList.add('white-header-links');
                icons_container.classList.add('white-header-icons');
                lines.classList.add('black-lines-button');
            }    
        }
    }
    element.onmouseleave = () => {
        counter--
        if (counter < 1) {
            filter_menu.classList.remove('open-hover')
            if (window.scrollY === 0 && counter < 1) {
                header.classList.remove('white-new-header');
                navlinks.classList.remove('white-header-links');
                icons_container.classList.remove('white-header-icons');
                lines.classList.remove('black-lines-button');
            }  
        }
    }
})

function handdle(xx, box, what) {
    xx.onclick = () => {
        what === 'close' ? box.classList.remove('is-open') : box.classList.add('is-open')
    }
}

handdle(toggle_menu, ninja_menu, "open")
handdle(search_glass, right_box, "open")

handdle(x, ninja_menu, "close")
handdle(close_search, right_box, "close")

// toggle_menu.onclick = () => {
//     ninja_menu.classList.add('is-open')
// }
// x.onclick = () => {
//     ninja_menu.classList.remove('is-open')
// }

// search_glass.onclick = () => {
//     right_box.classList.add('is-open')
// }

// close_search.onclick = () => {
//     right_box.classList.remove('is-open')
// }

window.addEventListener('scroll', () => {
    
    if ( window.scrollY > 0) {
        header_container.classList.add('top-0')
        header.classList.add('white-new-header');
        first_container.classList.add('new-padding-header');
        navlinks.classList.add('white-header-links');
        icons_container.classList.add('white-header-icons');
        lines.classList.add('black-lines-button');
    } else {
        header_container.classList.remove('top-0')
        header.classList.remove('white-new-header');
        first_container.classList.remove('new-padding-header')
        navlinks.classList.remove('white-header-links');
        icons_container.classList.remove('white-header-icons');
        lines.classList.remove('black-lines-button');
        
    }
})