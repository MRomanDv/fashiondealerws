const menuBtn = document.querySelector('.menu-btn')
const navContent = document.querySelector('.nav-content')
const body = document.querySelector('body')

menuBtn.addEventListener('click',()=>{
    navContent.classList.toggle('mobile-menu')
    if(navContent.classList.contains('mobile-menu')){
        body.style.position = 'fixed';
    }else {
        body.style.position = 'static'
    }
})