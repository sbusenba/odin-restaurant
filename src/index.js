console.log('Hello world')
let contentDiv = document.querySelector('#content')
console.table(contentDiv)
import myNav from './myNav'
import mainPage from './mainPage'
import './style.css';
function clickedNav(){
    console.log(this.innerText)

}
contentDiv.appendChild(myNav())
contentDiv.appendChild(mainPage())
let navButtons = Array(...document.querySelectorAll('.navItem'))
navButtons.forEach((button)=> {
    button.addEventListener('click',clickedNav)
})