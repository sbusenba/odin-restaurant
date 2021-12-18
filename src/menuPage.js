const menuPage = () => {
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('menuDiv')
    let foods = ['Nectar',
        'Ambrosia',
        'Soylent Green',
        'An Everelasting Gobstopper',
        'Stone Soup']
    let foodDescs = ['Drink of the Greek and Roman gods',
                'Food of the Greek and Roman gods',
                'This delicious delicacy contains a special secret ingredient!',
                'Flavor that lasts forever',
                'This savory soup is a childhood favorite']
    let foodImgClasse = []
    for (let i =0; i<5; i++){
        let menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')
        let pic = document.createElement('img')
        pic.classList.add(`menuPic${i}`,'pic')
        menuItem.appendChild(pic)

        let menuTextDiv = document.createElement('div')
        menuTextDiv.classList.add('menuText')
        let menuItemName = document.createElement('div')
        menuItemName.classList.add('menuItemName')
        menuItemName.innerText = foods[i]
        let menuDescText = document.createElement('div')
        menuDescText.innerText = foodDescs[i]
        menuTextDiv.appendChild(menuItemName)
        menuTextDiv.appendChild(menuDescText)

        menuItem.appendChild(menuTextDiv)
        mainDiv.appendChild(menuItem)
    }
    
        return mainDiv;
    }
    export default menuPage;