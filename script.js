let searchbtn=document.querySelector('#search-button');
let searchbar=document.querySelector('.search-bar-container');

window.onscroll=() =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', ()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})

let formbtn=document.querySelector('#login-button');
let login=document.querySelector('.login-form');
let formClose=document.querySelector('#form-close');

formbtn.addEventListener('click', ()=>{
    login.classList.add('active');
})

formClose.addEventListener('click', ()=>{
    login.classList.remove('active');
})

let videobtn=document.querySelectorAll('.video-btn');

videobtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector(".controls .active").classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video').src=src;
    })
})
