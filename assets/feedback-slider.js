let index = 1
let r = 1
show_slides(index)

function myloop() {
    setTimeout(function() {
        plusSlides(r);
        r++;
        if (r < 10) {
            myloop();
            r = 1;
        }
    }, 15000)
}

myloop();

function show_dots() {
    let amount = document.getElementsByClassName('comment-container').length;
    let container = document.getElementById('dots-container');
    container.innerHTML = '';

    for (let i = 1; i < amount; i++) {
        let dot = document.createElement('span')
        dot.classList.add('dot');
        dot.onclick = () => {
            current_slide(i);
        }
        container.append(dot)
    }
}

function plusSlides(n) {
    show_slides(index += n)
}

function current_slide(n) {
    show_slides(index = n)
}

function show_slides(n) {
    let i;
    show_dots();
    let dots = document.getElementsByClassName('dot');
    let slides = document.getElementsByClassName('comment-container')

    if (n > slides.length) {index = 1}
    if (n > 1) {index = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    for (i = 0; i < dots.length; i++) {
        console.log(dots[i])
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
}