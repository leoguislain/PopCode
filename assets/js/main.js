setTimeout(removeanimation, 4500)
setTimeout(switchoffO, 5600)
setTimeout(switchoffP2, 5800)
setTimeout(switchoffE, 6200)
setTimeout(switchoffAll, 6500)
setTimeout(switchPage, 7100)
setTimeout(launchSite, 8200)
setTimeout(launchClickToStart, 10000)

// setTimeout(launchSite, 5)


let titre = document.querySelectorAll('.titre')
let loader = document.querySelector('.loader')
let imgbug = document.querySelector('.imgbug')
let waitingscreen = document.querySelector('.waitingscreen')
let mentions = document.querySelector('.legals')
let clicktostart = document.querySelector('.clicktostart')

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
    mentions.style = 'display: flex;'
}

function launchClickToStart() {
    clicktostart.style = 'display: flex;'
    document.querySelector('.refnumber').style = 'animation: numberneon 1s alternate; animation-delay: 2.5s;'
    clicktostart.style = 'opacity: 100;'
    document.querySelector('.logo').style = 'position: relative'
}