

import myNav from './myNav'
import mainPage from './mainPage'
import contactPage from './contactPage'
import menuPage from './menuPage'
import './style.css';


function clickedNav(){
    while (contentDiv.hasChildNodes()){
        contentDiv.removeChild(contentDiv.firstChild)
    }
    addNav(this.innerText)
    document.querySelectorAll('.navItem')

    switch(this.innerText){
        case 'Main':
            contentDiv.appendChild(mainPage())
        break;
        case 'Menu':
            contentDiv.appendChild(menuPage())
        break;
        case 'Contact':
            contentDiv.appendChild(contactPage())
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
