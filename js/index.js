// Make mobile navigation work

let btnMobileNav = document.querySelector('.mobile-navigation-btn')
let hero = document.querySelector('.hero')

btnMobileNav.addEventListener('click',()=>{
    hero.classList.toggle('nav-open')
})