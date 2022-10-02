const mainPage = () => {
let html = ''
let mainDiv = document.createElement('div')
mainDiv.classList.add('menuDiv')
let titleDiv = document.createElement('div')
titleDiv.classList.add('titleDiv')
titleDiv.innerText = 'Malarky'
let pic = document.createElement('div')
pic.classList.add("mainImgHolder")
let img = document.createElement('img')
img.classList.add(`mainPic`)
pic.appendChild(img)
pic.appendChild(titleDiv)
let paragraphDiv = document.createElement('div')
paragraphDiv.classList.add("paragraphDiv")
paragraphDiv.innerText = 'Fine imaginary foods for the distinguished palate'
pic.appendChild(paragraphDiv)
mainDiv.appendChild(pic)





html = mainDiv;
    return html;
}
export default mainPage;