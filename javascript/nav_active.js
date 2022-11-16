document.addEventListener("DOMContentLoaded", () =>{
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const nav_links = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');

    nav_links.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksAnim .5s ease forwards ${index/7 + 0.3}s`;
        }
    })
});
})
