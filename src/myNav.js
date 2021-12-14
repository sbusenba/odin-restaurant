const myNav = () => {
let html = ''
let navBar = document.createElement('div')
navBar.classList.add('nav')
let navText = ['Main','Menu','Contact']
for(let i= 0;i<3;i++){
    let navItem = document.createElement('div')
    navItem.classList.add('navItem')
    navItem.innerText = navText[i]
    navBar.appendChild(navItem)
}
html = navBar;
    return html;
}
export default myNav;