const mainPage = () => {
let html = ''
let mainDiv = document.createElement('div')
let pic = document.createElement('div')
pic.classList.add('pic')

let paragraphDiv = document.createElement('div')
mainDiv.appendChild(pic)
paragraphDiv.innerText = 'Lorem Ipsum'
mainDiv.appendChild(paragraphDiv)



html = mainDiv;
    return html;
}
export default mainPage;