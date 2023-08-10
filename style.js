const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener('click',()=>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    menuBtn.classList.remove('active');
});

const cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').addEventListener('click',()=>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuBtn.classList.remove('active');
});

const loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').addEventListener('click',()=>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    menuBtn.classList.remove('active');
});

const menuBtn = document.querySelector('.navbar');

document.querySelector('#menu-btn').addEventListener('click',()=>{
    menuBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
});

window.onscroll =()=>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    menuBtn.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length ) % slides.length;
    slides[index].classList.add('active');
}


