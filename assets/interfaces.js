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

function blackorwhite(arrr, vari2) {
    arrr.forEach((element) => {
        element.onmouseenter = () => {
            vari2++
            if (window.scrollY === 0) {
                header.classList.add('white-new-header');
                navlinks.classList.add('white-header-links');
                icons_container.classList.add('white-header-icons');
                lines.classList.add('black-lines-button'); 
            }
        }
        element.onmouseleave = () => {
            vari2--
            if (window.scrollY === 0 && vari2 < 1) {
                header.classList.remove('white-new-header');
                navlinks.classList.remove('white-header-links');
                icons_container.classList.remove('white-header-icons');
                lines.classList.remove('black-lines-button');
            } 
        }
    })
}

function showhide(element, css, box, vari) {
    element.onmouseenter = () => {
        vari++
        if (vari > 0) {
            hoverstatus(box, "in", css, vari)
        } 
        console.log(vari)
    }
    element.onmouseleave = () => {
        vari--
        if (vari < 1) {
            hoverstatus(box, "out", css, vari)
        }
        console.log(vari)
    }
}

aboutUs.onmouseover = () => {console.log('hovered')}
aboutUs.onmouseout = () => {console.log('not hovered')}

aboutUs_link.onmouseover = () => {console.log('hovered')}
aboutUs_link.onmouseout = () => {console.log('not hovered')}

aboutUs.onclick = () => { console.log('click')}

// showhide(shop_by_link, "about-us-hover", filter_menu, counter)
// showhide(filter_menu, "about-us-hover", filter_menu, counter)
// showhide(aboutUs_link, "open-hover", aboutUs, counter)
// showhide(aboutUs, "open-hover", aboutUs, counter)
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