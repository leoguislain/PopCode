setTimeout(removeanimation, 7000)
let titre = document.querySelectorAll('.titre')
let accolade = document.querySelectorAll('.accolade')

VanillaCounter();

function removeanimation() {
    titre.forEach(function (classmodif) {
        classmodif.classList.remove('lettreP', 'lettreO', 'lettreP2', 'lettreC', 'lettreO2', 'lettreD', 'lettreE')
        classmodif.classList.add('lettre')
    })
    accolade.forEach(function (classadd) {
        classadd.classList.add('accoladeON')
    })
}