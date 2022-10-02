const contactPage = () => {
    


    let contactDiv = document.createElement('div')
    contactDiv.classList.add('contactDiv')
    let mainDiv = document.createElement('div')
    let pic = document.createElement('img')
    pic.classList.add('contactPic')
    mainDiv.appendChild(pic)  

    let toContact = document.createElement('div')
    toContact.innerText = 'To Contact:'
    toContact.classList.add('toContact')
    mainDiv.appendChild(toContact)
    let contactAdd = document.createElement('div')
    contactAdd.innerText = "Please write an imaginary letter, addressed to an imaginary address, and await our response!"
    contactAdd.classList.add('contactInfo')
    mainDiv.appendChild(contactAdd)
    contactDiv.appendChild(mainDiv)
    
        return contactDiv;
    }
    export default contactPage;