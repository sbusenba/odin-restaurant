

import myNav from './myNav'
import mainPage from './mainPage'
import contactPage from './contactPage'
import menuPage from './menuPage'
import './style.css';
import chalicePic from './imgs/chalice.jpeg'
import menuPicZero  from './imgs/setting1.jpg'
import menuPicOne from './imgs/setting2.jpg'
import menuPicTwo from './imgs/setting3.jpg'
import menuPicThree from './imgs/setting4.jpg'
import menuPicFour from './imgs/setting5.jpeg'
import mainImg from "./imgs/peter_pan.jpg"
import contactImg from "./imgs/mailman.jpg"
function clickedNav(){
    while (contentDiv.hasChildNodes()){
        contentDiv.removeChild(contentDiv.firstChild)
    }
    addNav(this.innerText)
    document.querySelectorAll('.navItem')

    switch(this.innerText){
        case 'Main':
            contentDiv.appendChild(mainPage())
            let mainPic = document.querySelector('.mainPic')
            mainPic.setAttribute('src',mainImg)
        break;
        case 'Menu':
            contentDiv.appendChild(menuPage())
            let menuPic0 = document.querySelector('.menuPic0')
            menuPic0.setAttribute('src',chalicePic)
            let menuPic1 = document.querySelector('.menuPic1')
            menuPic1.setAttribute('src',menuPicZero)
            let menuPic2 = document.querySelector('.menuPic2')
            menuPic2.setAttribute('src',menuPicOne)
            let menuPic3 = document.querySelector('.menuPic3')
            menuPic3.setAttribute('src',menuPicTwo)
            let menuPic4 = document.querySelector('.menuPic4')
            menuPic4.setAttribute('src',menuPicThree)
        break;
        case 'Contact':
            contentDiv.appendChild(contactPage())
            let contactPic = document.querySelector('.contactPic')
            contactPic.setAttribute('src',contactImg)
            break;


    }
}

function addNav(navText){
    contentDiv.appendChild(myNav())
    let navButtons = Array(...document.querySelectorAll('.navItem'))
    navButtons.forEach((button)=> {
        button.addEventListener('click',clickedNav)
        if (button.innerText == navText){
            button.classList.add('selected')
        }
    })
    
    

}
let contentDiv = document.querySelector('#content')
addNav('Main')
contentDiv.appendChild(mainPage())
let mainPic = document.querySelector('.mainPic')
mainPic.setAttribute('src',mainImg)
