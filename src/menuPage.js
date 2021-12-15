const menuPage = () => {
    let html = ''
    let mainDiv = document.createElement('div')
    let pic = document.createElement('div')
    pic.classList.add('pic')
    
    let paragraphDiv = document.createElement('div')
    mainDiv.appendChild(pic)
    paragraphDiv.innerText = 'Menu'
    mainDiv.appendChild(paragraphDiv)
    
    
    
    html = mainDiv;
        return html;
    }
    export default menuPage;