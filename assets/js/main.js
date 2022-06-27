setTimeout(removeanimation, 7000)
setTimeout(switchoffO, 9600)
setTimeout(switchoffP2, 11000)
setTimeout(switchoffE, 11600)
setTimeout(switchoffAll, 12300)
setTimeout(switchPage, 13000)
setTimeout(launchSite, 14000)


let titre = document.querySelectorAll('.titre')
let loader = document.querySelector('.loader')
let imgbug = document.querySelector('.imgbug')
let main = document.querySelector('.main')

function removeanimation() {
    titre.forEach(function (classmodif) {
        classmodif.classList.remove('lettreP', 'lettreO', 'lettreP2', 'lettreC', 'lettreO2', 'lettreD', 'lettreE')
        classmodif.classList.add('lettre')
    })
}

function switchoffAll() {
    titre.forEach(function (classoff) {
        classoff.classList.remove('lettre')
    })
}

function switchoffO() {
    titre[4].classList.remove('lettre')
}

function switchoffP2() {
    titre[2].classList.remove('lettre')
}

function switchoffE() {
    titre[6].classList.remove('lettre')
}

function switchPage() {
    document.body.style = 'background : black;'
    loader.style = 'display:none;'
    imgbug.style = 'display:block;'
}

function launchSite() {
    document.body.style = 'background : white;'
    main.style = 'display:flex;'
    imgbug.style = 'display:none;'
}

