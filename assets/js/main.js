// setTimeout(removeanimation, 4500)
// setTimeout(switchoffO, 5600)
// setTimeout(switchoffP2, 5800)
// setTimeout(switchoffE, 6200)
// setTimeout(switchoffAll, 6500)
// setTimeout(switchPage, 7100)
// setTimeout(launchSite, 8200)
// setTimeout(launchClickToStart, 10000)
// setTimeout(startAnimationEnd, 14500)


let titre = document.querySelectorAll('.titre')
let loader = document.querySelector('.loader')
let imgbug = document.querySelector('.imgbug')
let waitingscreen = document.querySelector('.waitingscreen')
let mentions = document.querySelector('.legals')
let clicktostart = document.querySelector('.clicktostart')
let game = document.querySelector('.game')

waitingscreen.style = 'display: none;'
game.style = 'display: flex;'

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
    imgbug.style = 'display:block; animation: appear 1s alternate;'
}

function launchSite() {
    waitingscreen.style = 'display:flex; animation: appear 1s alternate;'
    imgbug.style = 'display:none;'
    mentions.style = 'display: flex; animation: appear 1s alternate;'
}

function launchClickToStart() {
    clicktostart.style = 'display: flex;'
    document.querySelector('.refnumber').style = 'animation: numberneon 1s alternate; animation-delay: 2.5s;'
    clicktostart.style = 'opacity: 100;'
    document.querySelector('.logo').style = 'position: relative'
}

document.querySelector('.start').addEventListener('click', function () {
    waitingscreen.style = 'display: flex; animation: disappear 1.3s alternate;'
})

function startAnimationEnd() {
    waitingscreen.addEventListener('animationend', function () {
        waitingscreen.style = 'display: none;'
        game.style = 'display: flex;'
    })
}