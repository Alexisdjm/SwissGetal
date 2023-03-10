const header = document.getElementById('new-header-container')
const header_container = document.getElementById('shopify-section-new-header')
const navlinks = document.getElementById('navbar-full-width')
const icons_container = document.getElementById('link-icons')
const lines = document.getElementById('mobile-button-lines');

let toggle_menu = document.getElementById('toggle-menu');
let ninja_menu = document.getElementById('left-hidden-menu-box');
let x = document.getElementById('close');
let search_glass = document.getElementById('search-link-glass')
let close_search = document.getElementById('close-search-form')
let right_box = document.getElementById('right-search-form')

const filter_menu = document.getElementById('product-filter-menu')
const shop_by_link = document.getElementById('div-0')
const aboutUs_link = document.getElementById('div-1')
const aboutUs = document.getElementById('about-us-menu')

const left_navbar = document.getElementById('navbar-full-width')
const right_icons = document.getElementById('link-icons')

let counter = 0
let second_counter = 0

let links = [shop_by_link, aboutUs_link]
let header_items = [left_navbar, right_icons, filter_menu, aboutUs]

links.forEach((element) => {
    element.onclick = (e) => { e.preventDefault() }
})

const arr = [shop_by_link, filter_menu]
const arr2 = [aboutUs_link, aboutUs]

function hoverstatus(box, what, open_class, varr) {
    if (what === "in") {
        box.classList.add(`${open_class}`)
    } else if (what === "out") {
        varr < 1 ? box.classList.remove(`${open_class}`) : ''
    } 
}

function handleCss(what) {
    if (what === 'add') {
        header.classList.add('white-new-header');
        navlinks.classList.add('white-header-links');
        icons_container.classList.add('white-header-icons');
        lines.classList.add('black-lines-button'); 
    } else if(what === 'remove') {
        header.classList.remove('white-new-header');
        navlinks.classList.remove('white-header-links');
        icons_container.classList.remove('white-header-icons');
        lines.classList.remove('black-lines-button');
    }
}

function blackorwhite(arrr, vari2) {
    arrr.forEach((element) => {
        element.onmouseenter = () => {
            vari2++
            if (window.scrollY === 0) {
                handleCss('add')
            }
        }
        element.onmouseleave = () => {
            vari2--
            if (window.scrollY === 0 && vari2 < 1) {
                handleCss('remove')
            } 
        }
    })
}

function showhide(arrr, css, box, vari) {
    arrr.forEach(element => {
        element.onmouseover = () => {
            vari++
            if (vari > 0) {
                hoverstatus(box, "in", css, vari)
            } 
        }
        element.onmouseout = () => {
            vari--
            if (vari < 1) {
                hoverstatus(box, "out", css, vari)
            }
        }
    })
}

showhide(arr2, "about-us-hover", aboutUs, counter)
showhide(arr, "open-hover", filter_menu, counter)
blackorwhite(header_items, second_counter)

//-----------------------------------------------------------------------------------------------------------------

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
        header.classList.add('new-padding-header');
        handleCss('add')
    } else {
        header_container.classList.remove('top-0')
        header.classList.remove('new-padding-header')
        handleCss('remove')
    }
})

// -------------------------------------------------------------------------------------------------------------------------