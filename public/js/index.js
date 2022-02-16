//SELECTORS
const vlogo = document.getElementById('vlogo')
const Blogo = document.getElementById('Blogo')
const vl = document.getElementById('lv-logo')
const prada = document.getElementById('plogo')


const loadImg = (entry,observer)=> {
     entry.forEach((entrada)=>{
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible')
        }else {
            entrada.target.classList.remove('visible')
        }
     })
}

const observer = new IntersectionObserver(loadImg, {
    root:null,
    rootMargin: '0px 0px 0px 0px',  
    threshold: 1.0
});

observer.observe(vlogo)
observer.observe(Blogo)
observer.observe(vl)
observer.observe(prada)

//PRODUCTS SCROLL

const productContainer = [...document.querySelectorAll('.product-container')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]
console.log(nxtBtn)
productContainer.forEach((item,index)=>{
    let containerDimensions = item.getBoundingClientRect() 
    let containerWidth = containerDimensions.width 
    nxtBtn[index].addEventListener('click',()=>{
        item.scrollLeft += containerWidth
    })
    preBtn[index].addEventListener('click',()=>{
        item.scrollLeft -=containerWidth 
    })
})

//RESPONSIVE MENU

const menuBtn = document.querySelector('.menu-btn')
const topHeader = document.querySelector('.top-header')
const body = document.querySelector('body')

menuBtn.addEventListener('click',()=>{
       topHeader.classList.toggle('mobile-menu')
       if(topHeader.classList.contains('mobile-menu')) {
           body.style.position = 'fixed'
       }else {
           body.style.position = 'static';
       }
})
