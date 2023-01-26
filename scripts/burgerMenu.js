const btn = document.querySelector('.header__btn'),
menu = document.querySelector('.header__list');
let menuOpened = false
const menuToggler = ()=>{
    menuOpened = !menuOpened
    btn.classList.toggle('open-line')
    menu.classList.toggle('open')
}

btn.addEventListener('click', menuToggler)

window.onclick = (e)=>{
    if( menuOpened && !e.path.includes(btn) && !e.path.includes(menu)) menuToggler()
}