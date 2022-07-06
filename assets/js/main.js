let titre = document.querySelectorAll('.titre')
let loader = document.querySelector('.loader')
let imgbug = document.querySelector('.imgbug')
let waitingscreen = document.querySelector('.waitingscreen')
let mentions = document.querySelector('.legals')
let clicktostart = document.querySelector('.clicktostart')
let game = document.querySelector('.game')
let gameshow = document.querySelector('.gameshow')

waitingscreen.style = 'display: none;'
game.style = 'display: flex;'

var screensize = window.matchMedia("(min-width: 1200px)")
checksize(screensize)
screensize.addEventListener('change', checksize)

function checksize(screensize) {
    if (screensize.matches) {
        setTimeout(removeanimation, 4500)
        setTimeout(switchoffO, 5600)
        setTimeout(switchoffP2, 5800)
        setTimeout(switchoffE, 6200)
        setTimeout(switchoffAll, 6500)
        setTimeout(switchPage, 7100)
        setTimeout(launchSite, 8200)
        setTimeout(launchClickToStart, 10000)
        console.log(screensize)
    } else {
        loader.style = 'display:none;'
        titre.style = 'display:none;'
        imgbug.style = 'display:none;'
        clicktostart.style = 'display:none;'
        game.style = 'display:none;'
        waitingscreen.style = 'display: flex;'
        document.querySelector('.logo').style = 'position: relative; width: 40%'
        document.querySelector('.msgresize').classList.remove('resizemsg')
        document.querySelector('.msgresize').style = 'font-size: 7vw; display: flex; text-align: center'
        console.log(screensize)
    }
}

// FIN DE L'EFFET DEMARRAGE NEON
function removeanimation() {
    titre.forEach(function (classmodif) {
        classmodif.classList.remove('lettreP', 'lettreO', 'lettreP2', 'lettreC', 'lettreO2', 'lettreD', 'lettreE')
        classmodif.classList.add('lettre')
    })
}

// FIN DE L'ANIMATION DES LETTRES "POPCODE"
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

// AFFICHAGE DE L'ANIMATION DE L'ECRAN DE TELE
function switchPage() {
    document.body.style = 'background : black;'
    loader.style = 'display:none;'
    imgbug.style = 'display:block; animation: appear 1s alternate;'
}

// LANCEMENT DE LA PAGE AVEC LE LOGO (FIN DU LOADER)
function launchSite() {
    waitingscreen.style = 'display:flex; animation: appear 1s alternate;'
    imgbug.style = 'display:none;'
    mentions.style = 'display: flex; animation: appear 1s alternate;'
}

// LANCEMENT DES INFORMATIONS DU JEU ET DU BOUTON DE LANCEMENT DU JEU
function launchClickToStart() {
    clicktostart.style = 'display: flex;'
    document.querySelector('.refnumber').style = 'animation: numberneon 1s alternate; animation-delay: 1.5s;'
    clicktostart.style = 'opacity: 100;'
    document.querySelector('.logo').style = 'position: relative'
}

// LANCEMENT DE LA PAGE DU JEU
document.querySelector('.start').addEventListener('click', function () {
    waitingscreen.style = 'display: flex; animation: disappear 1.3s alternate;'
    waitingscreen.addEventListener('animationend', function () {
        waitingscreen.style = 'display: none;'
        game.style = 'display: flex; height: 100vh;'
        document.querySelector('.game').classList.remove('gameshow')
        document.querySelector('.game').style = 'animation: appear 1s alternate;'
        document.querySelector('.backgroundgame').classList.remove('gameshow')
        document.querySelector('.backgroundgame').style = 'animation: appear 1s alternate;'
        document.querySelector('.petitlogo').classList.remove('gameshow')
        document.querySelector('.petitlogo').style = 'animation: appear 1s alternate;'
        document.querySelector('.score').classList.remove('gameshow')
        document.querySelector('.score').style = 'animation: appear 1s alternate;'
        document.querySelector('.scorehorizontal').classList.remove('gameshow')
        document.querySelector('.scorehorizontal').style = 'animation: appear 1s alternate;'
        document.querySelector('.owned').classList.remove('gameshow')
        document.querySelector('.owned').style = 'animation: appear 1s alternate;'
        document.querySelector('.zoom').classList.remove('gameshow')
        document.querySelector('.zoom').style = 'animation: appear 1s alternate;'
        gameOn = true
    })
})

let error1 = false
let error2 = false
let error3 = false

// FONCTION D'ERREURS A MODIFIER
// document.querySelector('.backgroundgame').addEventListener('click', function () {
//     if (error1 == false & error1 != true) {
//         document.querySelector('.error1').style = 'opacity: 1; color: #0AEFF7;'
//         error1 = true
//         console.log('erreur1 =' + error1)
//         return
//     }
//     if (error1 == true & error2 == false) {
//         document.querySelector('.error2').style = 'opacity:1; color: #0AEFF7;'
//         error2 = true
//         console.log('erreur2=' + error2)
//         return
//     }
//     if (error2 == true & error3 == false) {
//         document.querySelector('.error3').style = 'opacity: 1; color: #0AEFF7;'
//         error3 = true
//         console.log('erreur3=' + error3)
//         return
//     }
// })

// COMPTEUR DE BONNES REPONSES

// OUVERTURE / FERMETURE MODAL REPONSES
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var modalanswer = document.querySelector('.modalanswer')
let gameOn = false
let answerOn = false
let answerzone = document.querySelector('.answerzone')

window.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
        document.querySelector('.answerzone').innerHTML = ""
        modalanswer.style = 'display:none;'
        answerOn = false
    }
});

window.onkeydown = function (event) {
    if(letters.includes(event.key) == true &gameOn == true) {
        modalanswer.style = 'display: flex; animation: appear 0.4s alternate;'
        document.querySelector('.answerzone').innerHTML += event.key
        answerOn = true
    }if (event.key == 'Backspace') {
        answerzone.innerHTML = answerzone.innerHTML.slice(0, -1)
    }else {
        return
    }
}

// VERIFICATEUR DE BONNES REPONSES
let languages = ['JavaScript', 'HTML', 'CSS', 'SQL', 'Python', 'Java', 'Bash', 'PowerShell', 'C#', 'PHP', 'C++', 'TypeScript', 'C', 'Ruby', 'Go', 'Assembly', 'Swift', 'Kotlin', 'R', 'VBA', 'Objective-C', 'Scala', 'Rust', 'Dart', 'Elixir', 'Clojure', 'WebAssembly']
let correctanswers = []

window.addEventListener("keydown", function (event) {
    if (event.key == "Enter" & answerOn == true) {
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].toLowerCase == document.querySelector('.answerzone').innerHTML.toLowerCase) {
                correctanswers.push(document.querySelector('.answerzone').innerHTML)
                document.querySelector('.answerzone').innerHTML = ""
                modalanswer.style = 'display:none;'
                console.log(correctanswers)
                break
            } else {
                break
            }    
        }
    } else {
        return
    }
})