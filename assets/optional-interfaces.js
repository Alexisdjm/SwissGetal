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

const filter_menu = document.getElementById('product-filter-menu')
const shop_by_link = document.getElementById('div-0')
const aboutUs_link = document.getElementById('div-1')
const aboutUs = document.getElementById('about-us-menu')

let counter = 0

const arr = [shop_by_link, filter_menu]
const arr2 = [aboutUs_link, aboutUs]

let links = [shop_by_link, aboutUs_link]

function hoverstatus(box, what, open_class, varr) {
    if (what === "in") {
        box.classList.add(`${open_class}`)
    } else if (what === "out") {
        varr < 1 ? box.classList.remove(`${open_class}`) : ''
    } 
}

function handdle(xx, box, what) {
    xx.onclick = (e) => {
        e.preventDefault();
        what === 'close' ? box.classList.remove('is-open') : box.classList.add('is-open')
    }
}

function showhide(arrr, css, box, vari) {
    arrr.forEach(element => {
        element.onmouseover = () => {
            vari++
            if (vari > 0) {
                hoverstatus(box, "in", css, vari)
                console.log(element)
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

handdle(toggle_menu, ninja_menu, "open")
handdle(search_glass, right_box, "open")

handdle(x, ninja_menu, "close")
handdle(close_search, right_box, "close")

window.addEventListener('scroll', () => {
    
    if ( window.scrollY > 0) {
        header_container.classList.remove('top-positioning')
        header_container.classList.add('top-0')
        header.classList.add('new-padding-header');
    } else {
        header_container.classList.add('top-positioning')
        header.classList.remove('new-padding-header')
    }
})