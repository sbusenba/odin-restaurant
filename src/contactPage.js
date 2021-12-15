const contactPage = () => {
    let html = ''
    let contactDiv = document.createElement('div')
    contactDiv.classList.add('contactDiv')
    let mainDiv = document.createElement('div')
    let pic = document.createElement('div')
    pic.classList.add('contactPic')
    mainDiv.appendChild(pic)  

    let paragraphDiv = document.createElement('div')
    paragraphDiv.innerText = 'Contact info'
    mainDiv.appendChild(paragraphDiv)
    contactDiv.appendChild(mainDiv)
    html = contactDiv;
        return html;
    }
    export default contactPage;