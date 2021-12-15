const menuPage = () => {
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('menuDiv')
    for (let i =0; i<5; i++){
        let menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')
        let pic = document.createElement('div')
        pic.classList.add('menupic','pic')
        menuItem.appendChild(pic)
        let paragraphDiv = document.createElement('div')
        paragraphDiv.innerText = `Menu Item ${i+1}`
        menuItem.appendChild(paragraphDiv)
        mainDiv.appendChild(menuItem)
    }
    
        return mainDiv;
    }
    export default menuPage;