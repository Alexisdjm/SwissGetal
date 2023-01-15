let header = document.getElementById('shopify-section-new-header')
let navlinks = document.getElementById('navbar-full-width')
let icons_container = document.getElementById('link-icons')
let window_ = document.getElementById('main-content')



window.addEventListener('scroll', () => {

    console.log(window.scrollY)
    
    if ( window.scrollY > 0) {
        header.classList.add('white-new-header');
        navlinks.classList.add('white-header-links');
        icons_container.classList.add('white-header-icons');
    } else {
        header.classList.remove('white-new-header');
        navlinks.classList.remove('white-header-links');
        icons_container.classList.remove('white-header-icons');
    }
})