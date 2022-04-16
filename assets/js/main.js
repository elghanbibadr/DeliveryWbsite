/*=============== SHOW MENU ===============*/
const header=document.querySelector('header');
const nav=document.querySelector('.nav');
const navCollapsible=document.querySelector('.nav__collapsible');
const hamburger=document.querySelector('.nav__hamburger');

function showMenu(){
    navCollapsible.classList.toggle('showList');
    header.classList.toggle('expandheader');
}
function fixNav(){
if(window.scrollY>0) nav.classList.add('fixNav');
else nav.classList.remove('fixNav');
}
window.addEventListener('scroll',fixNav)
hamburger.addEventListener('click',showMenu);



/*=============== SHOW SCROLL UP ===============*/
const links=document.querySelectorAll('.nav__link');
links.forEach(link=>link.addEventListener('click',(e)=>{
    e.preventDefault();
    let id=e.target.getAttribute('href');
    // console.log(id)
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
}))