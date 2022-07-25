let titre = document.querySelectorAll('.titre')
let loader = document.querySelector('.loader')
let imgbug = document.querySelector('.imgbug')
let waitingscreen = document.querySelector('.waitingscreen')
let mentions = document.querySelector('.legals')
let clicktostart = document.querySelector('.clicktostart')
let game = document.querySelector('.game')
let gameshow = document.querySelector('.gameshow')
let resize = false

waitingscreen.style = 'display: none;'
game.style = 'display: flex;'

var screensize = window.matchMedia("(min-width: 1000px)")
checksize(screensize)
screensize.addEventListener('click', checksize)

function checksize () {
    setTimeout(removeanimation, 4500)
    setTimeout(switchoffO, 5600)
    setTimeout(switchoffP2, 5800)
    setTimeout(switchoffE, 6200)
    setTimeout(switchoffAll, 6500)
    setTimeout(switchPage, 7100)
    setTimeout(launchSite, 8200)
    setTimeout(launchClickToStart, 8800)
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
        document.querySelector('.zoomall').classList.remove('gameshow')
        document.querySelector('.zoomall').style = 'animation: appear 1s alternate;'
        document.querySelector('.consign').style = 'display: flex;'
        gameOn = true
    })
})

let error1 = false
let error2 = false
let error3 = false
let nowrite = false

// FONCTION D'ERREURS
function adderror() {
    if (error1 == false & error1 != true) {
        document.querySelector('.error1').style = 'opacity: 1; color: #0AEFF7;'
        error1 = true
        nowrite = false
        return
    }
    if (error1 == true & error2 == false) {
        document.querySelector('.error2').style = 'opacity:1; color: #0AEFF7;'
        error2 = true
        nowrite = false
        return
    }
    if (error2 == true & error3 == false) {
        document.querySelector('.error3').style = 'opacity: 1; color: #0AEFF7;'
        error3 = true
        document.querySelector('.modalegameover').style = 'display: flex'
        nowrite = true
        return
    }
}

function removeerrors() {
    console.log('lancement fonction clean error');
    if (error1 == true & error2 == true & error3 == true) {
        error1 = false
        error2 = false
        error3 = false
        document.querySelector('.error1').style = 'opacity: 0.3; color: white;'
        document.querySelector('.error2').style = 'opacity: 0.3; color: white;'
        document.querySelector('.error3').style = 'opacity: 0.3; color: white;'
    }
    // if (error1 == false & )
}

// OUVERTURE / FERMETURE MODAL REPONSES
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '+', '-', '#']
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
    if (letters.includes(event.key) == true & gameOn == true & nowrite == false) {
        modalanswer.style = 'display: flex; animation: appear 0.4s alternate;'
        document.querySelector('.answerzone').innerHTML += event.key
        answerOn = true
        modaledesc.style = 'display: none;'
        modaleowned.style = 'display: none;'
        modalelegals.style = 'display: none;'
        document.querySelector('.close') = 'display: none;'
    }
    if (event.key == 'Backspace') {
        answerzone.innerHTML = answerzone.innerHTML.slice(0, -1)
    }
    if (event.key == 'Enter') {
        modalanswer.style = 'display: flex; animation: appear 0.4s alternate;'
    } else {
        return
    }
}

// VERIFICATEUR DE BONNES REPONSES
let languages = ['JavaScript', 'HTML', 'CSS', 'SQL', 'Python', 'Java', 'Bash', 'PowerShell', 'C#', 'PHP', 'C++', 'TypeScript', 'C', 'Ruby', 'Go', 'Assembly', 'Swift', 'Kotlin', 'R', 'VBA', 'Objective-C', 'Scala', 'Rust', 'Dart', 'Elixir', 'Clojure', 'WebAssembly']
var myIndex = languages.indexOf(answerzone.innerHTML.toLowerCase())
let correctanswers = [];
let languagesrestants = languages
let errormsg = [`Tu n'as écrit aucune réponse !`, 'Tu as déjà trouvé ce langage.']
let alertmsg = document.querySelector('.alertmsg')
let alert = [`Tu as trouvé un langage !`, `Tu t'es trompé(e)`]
let msgerror = document.querySelector('.msgerror')

window.addEventListener('keydown', function (event) {
    if (event.key == 'Enter' & answerOn == true) {
        console.log('checkWin');
        checkWin()
        console.log(correctanswers.length + '=' + languages.length+correctanswers.length);
        for (var i = 0; i < languages.length; i++) {
            if (answerzone.innerHTML == "") {
                msgerror.innerHTML = errormsg[0]
                setTimeout(errordisappear, 1500)
                break
            }
            if (answerzone.innerHTML.toLowerCase() === languages[i].toLowerCase()) {
                setTimeout(showLanguage, 1500)
                let answerPosition = languages.indexOf(languages[i])
                correctanswers.push(answerzone.innerHTML)
                languages.splice(answerPosition, 1)
                answerzone.innerHTML = ""
                modalanswer.style = 'display:none;'
                alertmsg.style = 'display: flex; color: #0AEFF7; -webkit-text-stroke-color: #579BFE; -webkit-text-stroke: 2px;'
                alertmsg.innerHTML = alert[0]
                setTimeout(alertDisappear, 1500)
                addOwned()
                scoreup()
                break
            }
            if (answerzone.innerHTML.toLowerCase() === correctanswers[i]) {
                msgerror.innerHTML = errormsg[1]
                setTimeout(errordisappear, 1500)
                answerzone.innerHTML = ""
                console.log('Déjà dans le tableau')
                break
            }
            if (i + 1 == languages.length) {
                answerzone.innerHTML = ""
                modalanswer.style = 'display:none;'
                alertmsg.style = 'display: flex; color: rgb(247, 178, 178); -webkit-text-stroke-color: rgb(255, 0, 0); -webkit-text-stroke: 2px;'
                alertmsg.innerHTML = alert[1]
                setTimeout(alertDisappear, 1500)
                answerOn = false
                adderror()
            }
        }
    }
})

function alertDisappear() {
    alertmsg.classList.add('disappear')
    alertmsg.addEventListener('animationend', function () {
        alertmsg.classList.remove('disappear')
        alertmsg.innerHTML = ''
    })
}

function errordisappear() {
    msgerror.classList.add('disappear')
    msgerror.addEventListener('animationend', function () {
        msgerror.classList.remove('disappear')
        msgerror.innerHTML = ''
    })
}

// AUGMENTATION SCORE EN CAS DE BONNE REPONSE
let modalewin = document.querySelector('.modalewin')

function scoreup() {
    if (correctanswers.length < 10) {
        document.querySelector('.numberscore').innerHTML = "0" + correctanswers.length.toString()
    } else if (correctanswers.length < languages.length + correctanswers.length + 1) {
        document.querySelector('.numberscore').innerHTML = correctanswers.length.toString()
    } else {
        return
    }
}

// DIMINUTION SCORE EN CAS DE RESET
function scorereset() {
    document.querySelector('.numberscore').innerHTML = "00"
}

// RESET DES TABLEAUX
function resetarray() {
    languages = languages.concat(correctanswers)
    correctanswers.splice(0, correctanswers.length)
    scoreup()
}

// BARRE DE ZOOM
let bg = document.querySelector('.backgroundgame')
let zoombarprogress = document.querySelector('.zoombarprogress')

bg.addEventListener('wheel', function () {
    zoombarprogress.style = 'height: ' + bg.dataset.scale * 10 + '%'
})

bg.addEventListener('click', function () {
    zoombarprogress.style = 'height: ' + bg.dataset.scale * 10 + '%'
})

// FONCTION DE REDEMARRAGE DU JEU
let restart = document.querySelector('.restart')
let modalegameover = document.querySelector('.modalegameover')
let win = false
let lose = false
restart.addEventListener('click', function () {
    removeerrors()
    scorereset()
    resetarray()
    cleanCards()
    toShow = ''
    modalegameover.style = 'display: flex; animation: disappear 0.6s alternate;'
    modalegameover.addEventListener('animationend', function () {
        modalegameover.style = 'display: none;'
        nowrite = false
    })
})

document.querySelector('.restartwin').addEventListener('click', function () {
    removeerrors()
    scorereset()
    resetarray()
    cleanCards()
    toShow = ''
    modalewin.style = 'display: flex; animation: disappear 0.6s alternate;'
    modalewin.addEventListener('animationend', function () {
        modalewin.style = 'display: none;'
        nowrite = false
    })
})

// AFFICHAGE MODALE VICTOIRE
function checkWin() {
    if (languages.length  == 1) {
        modalewin.style = 'display: flex;'
        console.log('WIN')
        nowrite = true
    } else {
        console.log('PAS WIN');
        return
    }
}

//CLEAR CARDS

function cleanCards () {
    let cards = document.querySelectorAll('.card')
    cards.forEach(element => {
        element.remove()
    })
}

// AFFICHAGE DESCRIPTION LANGUAGES
let input = document.querySelector('input')
async function showLanguage() {
    if (input.checked) {
        return
    } else {
        let reponses = await fetch("assets/js/languages.json")
        let data = await reponses.json()
        console.log(data.languages)
        const index = data.languages.langage.findIndex((object) => {
            return object.name === correctanswers[correctanswers.length - 1]
        })
        document.querySelector('.languagename').innerHTML = data.languages.langage[index].name
        document.querySelector('.ldesc').innerHTML = data.languages.langage[index].description
        document.querySelector('.languagelogo').src = data.languages.langage[index].picture
        document.querySelector('.languagelogo').alt = 'Logo ' + data.languages.langage[index].name
        console.log(index);
        document.querySelector('.modaledesc').style = 'display : flex;'
    }
}

//AFFICHAGE MENTIONS LEGALES
let legals = document.querySelectorAll('.mentions')
let modalelegals = document.querySelector('.modalelegals')
legals.forEach(function (legal) {
    legal.addEventListener('click', async function () {
        console.log('legales')
        let reponses = await fetch("assets/js/languages.json")
        let data = await reponses.json()
        document.querySelector('.mentionslegales').innerHTML = data.legals.legal[0].content
        modalelegals.style = 'display: flex;'
        document.querySelector('.closelegals').style = 'display: flex;'
    })
})

document.querySelector('.closelegals').addEventListener('click', function () {
    modalelegals.style = 'display: flex; animation: disappear 0.6s alternate;'
    modalelegals.addEventListener('animationend', function () {
        modalelegals.style = 'display: none;'
    })
})

// FERMETURE MODALE DESCRIPTIVE
let closedesc = document.querySelector('.closedescmodale')
let modaledesc = document.querySelector('.modaledesc')
closedesc.addEventListener('click', function () {
    modaledesc.style = 'display: flex; animation: disappear 0.6s alternate;'
    modaledesc.addEventListener('animationend', function () {
        modaledesc.style = 'display: none;'
    })
})

// CURSOR CUSTOM
let cursor = document.querySelector(".cursor")
let cursorinner = document.querySelector(".cursor2")
let a = document.querySelectorAll(".hovereffect")

document.addEventListener("mousemove", function (e) {
  let x = e.clientX
  let y = e.clientY
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
})

document.addEventListener("mousemove", function (e) {
  let x = e.clientX
  let y = e.clientY
  cursorinner.style.left = x + "px"
  cursorinner.style.top = y + "px"
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click")
  cursorinner.classList.add("cursorinnerhover")
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click")
  cursorinner.classList.remove("cursorinnerhover")
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover")
  })
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover")
  })
})

//LANGAGES TROUVES
let owned = document.querySelector('.owned')
let modaleowned = document.querySelector('.modaleowned')
let closeowned = document.querySelector('.closeowned')

owned.addEventListener('click', function () {
    modaleowned.style = 'display: flex;'
    closeowned.style = 'display: flex;'
    if (correctanswers.length == 0) {
        document.querySelector('.empty').innerHTML = `Aucun langage n'a été trouvé pour le moment`
    }
    else {
        document.querySelector('.empty').innerHTML = ``
    }
})

let toShow = ''
async function addOwned() {
    let reponses = await fetch("assets/js/languages.json")
    let data = await reponses.json()
    console.log(data.languages)
    const indexOwned = data.languages.langage.findIndex((object) => {
        return object.name === correctanswers[correctanswers.length - 1]
    })
    toShow +=
    '<div class="card hovereffect" id="'+data.languages.langage[indexOwned].name+'"><img src="' + data.languages.langage[indexOwned].picture + '" alt="Logo de ' + data.languages.langage[indexOwned].name + '" class="ownedlogo"><p class="ownedtitle">' + data.languages.langage[indexOwned].name + '</p><div class="learnmore">En savoir plus</div></div>'
    document.querySelector('.cardcontainer').innerHTML = toShow
    let card = document.querySelectorAll('.card')
    console.log(card);
    card.forEach(element => {
        element.addEventListener('click', function () {
            console.log('TEST');
        const index = data.languages.langage.findIndex((object) => {
            return object.name === element.getAttribute('id')
        })
        document.querySelector('.languagename').innerHTML = data.languages.langage[index].name
        document.querySelector('.ldesc').innerHTML = data.languages.langage[index].description
        document.querySelector('.languagelogo').src = data.languages.langage[index].picture
        document.querySelector('.languagelogo').alt = 'Logo ' + data.languages.langage[index].name
        console.log(index);
        document.querySelector('.modaledesc').style = 'display : flex; z-index: 999999;'
        })
        
    });
}

closeowned.addEventListener('click', function () {
    modaleowned.style = 'display: flex; animation: disappear 0.6s alternate;'
    closeowned.style = 'display: flex; animation: disappear 0.6s alternate;'
    modaleowned.addEventListener('animationend', function () {
        modaleowned.style = 'display: none;'
        closeowned.style = 'display: none;'
    })
})

//ARRET ANIMATION ON CLICK

window.addEventListener('mousedown', function() {
    document.querySelector('.cursor').classList.remove('zoomcursor')
})
window.addEventListener('mouseup', function() {
    document.querySelector('.cursor').classList.add('zoomcursor')
})