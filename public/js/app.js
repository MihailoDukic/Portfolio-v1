// custom cursor 
document.addEventListener("DOMContentLoaded", function (event) {
    let cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll(".hoverable");
    let initCursor = false;

    for (let i = 0; i < links.length; i++) {
        let selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--link");
        });
    }

    window.onmousemove = function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        if (!initCursor) {
            TweenLite.to(cursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };
});

// preloader 

function preloader() {
 const pl = gsap.timeline(); 
 pl.to('.preloader__content__circle-anime', {scale: 150})
 pl.to('.preloader', {opacity: 0, zIndex: -2})
};

window.addEventListener('load', preloader);

// Navigation Animation 

const nav = gsap.timeline({defaults:{duration: .2, ease: "power4.easeInOut"}}); 
nav.to('body', {position: 'fixed'})
nav.to('.line-top', {top: '50%', rotate: 45})
nav.to('.line-bottom', {top: '50%', rotate: 135})
nav.to('.header__content__mobile-nav', {opacity: 1, visibility: 'visible', zIndex: 10})
nav.to('.header__content__toggle-mobile', {border: '1px solid #fff'})
nav.to('.line', {border: '1px solid #fff'})
nav.to('.menu__list-item', {opacity: 1, stagger: 0.2, marginLeft: 0})
nav.to('.anime-social', {opacity: 1, stagger: 0.2, marginLeft: 0})
nav.to('body', {position: 'relative'})
nav.reversed(true) 

function reverseAnime() {
    nav.reversed(!nav.reversed())
};
document.querySelector('.header__content__toggle-mobile').addEventListener('click', reverseAnime);