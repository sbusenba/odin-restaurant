const myNav = () => {
let html = ''
let header = document.createElement('div')
header.classList.add('header')
let title  = document.createElement('div')
title.classList.add('title')
title.innerText='Malarky'
header.appendChild(title)

let navBar = document.createElement('div')
navBar.classList.add('nav')
let navText = ['Main','Menu','Contact']
for(let i= 0;i<3;i++){
    let navItem = document.createElement('div')
    navItem.classList.add('navItem')
    navItem.innerText = navText[i]
    navBar.appendChild(navItem)
}
header.appendChild(navBar)
    return header;
}
export default myNav;