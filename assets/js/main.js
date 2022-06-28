// setTimeout(removeanimation, 5000)
// setTimeout(switchoffO, 6600)
// setTimeout(switchoffP2, 6800)
// setTimeout(switchoffE, 7200)
// setTimeout(switchoffAll, 7500)
// setTimeout(switchPage, 8100)
// setTimeout(launchSite, 9200)

setTimeout(launchSite, 5)


let titre = document.querySelectorAll('.titre')
let loader = document.querySelector('.loader')
let imgbug = document.querySelector('.imgbug')
let waitingscreen = document.querySelector('.waitingscreen')

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
    waitingscreen.style = 'display:flex;'
    imgbug.style = 'display:none;'
}