const mainPage = () => {
let html = ''
let mainDiv = document.createElement('div')
mainDiv.classList.add('menuDiv')
let titleDiv = document.createElement('div')
titleDiv.classList.add('titleDiv')
titleDiv.innerText = 'Malarky'
mainDiv.appendChild(titleDiv)

let pic = document.createElement('div')
pic.classList.add('mainPic')
mainDiv.appendChild(pic)

let paragraphDiv = document.createElement('div')
paragraphDiv.innerText = 'Fine imaginary foods for the distinguished palate'
mainDiv.appendChild(paragraphDiv)



html = mainDiv;
    return html;
}
export default mainPage;