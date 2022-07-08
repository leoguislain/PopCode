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
        setTimeout(launchClickToStart, 8800)
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
        document.querySelector('.zoomall').classList.remove('gameshow')
        document.querySelector('.zoomall').style = 'animation: appear 1s alternate;'
        gameOn = true
    })
})

let error1 = false
let error2 = false
let error3 = false

// FONCTION D'ERREURS A MODIFIER
function adderror () {
    if (error1 == false & error1 != true) {
        document.querySelector('.error1').style = 'opacity: 1; color: #0AEFF7;'
        error1 = true
        console.log('erreur1 =' + error1)
        return
    }
    if (error1 == true & error2 == false) {
        document.querySelector('.error2').style = 'opacity:1; color: #0AEFF7;'
        error2 = true
        console.log('erreur2=' + error2)
        return
    }
    if (error2 == true & error3 == false) {
        document.querySelector('.error3').style = 'opacity: 1; color: #0AEFF7;'
        error3 = true
        console.log('erreur3=' + error3)
        return
    }
}

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
    if (letters.includes(event.key) == true & gameOn == true) {
        modalanswer.style = 'display: flex; animation: appear 0.4s alternate;'
        document.querySelector('.answerzone').innerHTML += event.key
        answerOn = true
    }
    if (event.key == 'Backspace') {
        answerzone.innerHTML = answerzone.innerHTML.slice(0, -1)
    } else {
        return
    }
}

// VERIFICATEUR DE BONNES REPONSES
const languages = ['javascript', 'html', 'CSS', 'SQL', 'Python', 'Java', 'Bash', 'PowerShell', 'C#', 'PHP', 'C++', 'TypeScript', 'C', 'Ruby', 'Go', 'Assembly', 'Swift', 'Kotlin', 'R', 'VBA', 'Objective-C', 'Scala', 'Rust', 'Dart', 'Elixir', 'Clojure', 'WebAssembly']
var myIndex = languages.indexOf(answerzone.innerHTML.toLowerCase())
let correctanswers = [];
let languagesrestants = languages

window.addEventListener('keydown', function (event) {
    if (event.key == 'Enter' & answerOn == true) {
        for (var i = 0; i < languages.length; i++) {
            if(correctanswers.includes(answerzone.innerHTML.toLowerCase)) {
                console.log('Déjà dans le tableau')
                break
            }
            if (answerzone.innerHTML.toLowerCase() === languages[i].toLowerCase()) {
                correctanswers.push(answerzone.innerHTML)
                // languages.pop(i)
                // languagesrestants = languages.splice(myIndex, 1)
                answerzone.innerHTML = ""
                modalanswer.style = 'display:none;'
                answerOn = false
                scoreup()
                console.log(correctanswers)
                break
            }
            if(i+1 == languages.length) {
                answerzone.innerHTML = ""
                modalanswer.style = 'display:none;'
                answerOn = false
                adderror()
            }
            // if(answerzone.innerHTML.toLowerCase() !== languages[i].toLowerCase() & answerzone.innerHTML.toLowerCase !== correctanswers[i]){
            //     console.log('Pas dans le tableau');
            // }
        }
    }
})

// AUGMENTATION SCORE EN CAS DE BONNE REPONSE
function scoreup() {
    if (correctanswers.length < 10) {
        document.querySelector('.numberscore').innerHTML = "0" + correctanswers.length.toString()
    } else if (correctanswers.length < languages.length+1) {
        document.querySelector('.numberscore').innerHTML = correctanswers.length.toString()
    } else {
        return
    }
}



















































"use strict";

/* @->zoom */
zoom();

/* @-<zoom ********************************************************************/
/******************************************************************************/
function zoom(classNames = {}, settings = {}) {
    /* Settings */
    var C_scaleDefault = settings["scaleDefault"] || 2; // Used on doubleclick, doubletap and resize
    var C_scaleDifference = settings["scaleDifference"] || 0.5; // Used on wheel zoom
    var C_scaleMax = settings["scaleMax"] || 10;
    var C_scaleMin = settings["scaleMin"] || 1;

    /* Selectors */
    var _active = classNames["zoomActive"] || "zoomActive";
    var _dataScale = "data-scale";
    var _dataTranslateX = "data-translate-x";
    var _dataTranslateY = "data-translate-y";
    var _visible = classNames["visible"] || "visible";
    var $container;
    var $element;
    var $zoom = document.getElementsByClassName(classNames["zoom"] || "zoom");

    /* Helpers */
    var capture = false;
    var doubleClickMonitor = [null];
    var containerHeight;
    var containerWidth;
    var containerOffsetX;
    var containerOffsetY;
    var initialScale;
    var elementHeight;
    var elementWidth;
    var heightDifference;
    var initialOffsetX;
    var initialOffsetY;
    var initialPinchDistance;
    var initialPointerOffsetX;
    var initialPointerOffsetX2;
    var initialPointerOffsetY;
    var initialPointerOffsetY2;
    var limitOffsetX;
    var limitOffsetY;
    var mousemoveCount = 0;
    var offset;
    var pinchOffsetX;
    var pinchOffsetY;
    var pointerOffsetX;
    var pointerOffsetX2;
    var pointerOffsetY;
    var pointerOffsetY2;
    var scaleDirection;
    var scaleDifference;
    var targetOffsetX;
    var targetOffsetY;
    var targetPinchDistance;
    var targetScale;
    var touchable = false;
    var touchCount;
    var touchmoveCount = 0;
    var doubleTapMonitor = [null];
    var widthDifference;

    /* EVENT - DOM ready ********************************************************/
    /****************************************************************************/
    for (var i = 0; i < $zoom.length; i++) {
        /* Initialize selectors */
        $container = $zoom[i];
        $element = $container.children[0];

        /* Set attributes */
        $element.setAttribute(_dataScale, 1);
        $element.setAttribute(_dataTranslateX, 0);
        $element.setAttribute(_dataTranslateY, 0);
    }

    /* EVENT - load - window ****************************************************/
    /****************************************************************************/
    window.addEventListener("load", function() {
        /* Wait for images to be loaded */
        for (var i = 0; i < $zoom.length; i++) {
            /* Initialize selectors */
            $container = $zoom[i];
            $element = $container.children[0];

            addClass($element, _visible);
        }

        /* EVENT - resize - window ************************************************/
        /**************************************************************************/
        window.addEventListener("resize", function() {
            for (var i = 0; i < $zoom.length; i++) {
                /* Initialize selectors */
                $container = $zoom[i];
                $element = $container.children[0];

                if (hasClass($container, _active) === false) {
                    continue;
                }

                /* Initialize helpers */
                containerHeight = $container.clientHeight;
                containerWidth = $container.clientWidth;
                elementHeight = $element.clientHeight;
                elementWidth = $element.clientWidth;
                initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
                initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
                targetScale = C_scaleDefault;
                limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
                limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
                targetOffsetX = (elementWidth * targetScale) > containerWidth ? minMax(initialOffsetX, limitOffsetX * (-1), limitOffsetX) : 0;
                targetOffsetY = (elementHeight * targetScale) > containerHeight ? minMax(initialOffsetY, limitOffsetY * (-1), limitOffsetY) : 0;

                if (targetScale === 1) {
                    removeClass($container, _active);
                }

                /* Set attributes */
                $element.setAttribute(_dataScale, targetScale);
                $element.setAttribute(_dataTranslateX, targetOffsetX);
                $element.setAttribute(_dataTranslateY, targetOffsetY);

                /* @->moveScaleElement */
                moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
            }
        });
    });

    /* EVENT - mousedown - $zoom ************************************************/
    /* **************************************************************************/
    massAddEventListener($zoom, "mousedown", mouseDown);

    /* EVENT - mouseenter - $zoom ***********************************************/
    /* **************************************************************************/
    massAddEventListener($zoom, "mouseenter", mouseEnter);

    /* EVENT - mouseleave - $zoom ***********************************************/
    /* **************************************************************************/
    massAddEventListener($zoom, "mouseleave", mouseLeave);

    /* EVENT - mousemove - document *********************************************/
    /****************************************************************************/
    document.addEventListener("mousemove", mouseMove);

    /* EVENT - mouseup - document ***********************************************/
    /****************************************************************************/
    document.addEventListener("mouseup", mouseUp);

    /* EVENT - touchstart - document ********************************************/
    /****************************************************************************/
    document.addEventListener("touchstart", function() {
        touchable = true;
    });

    /* EVENT - touchstart - $zoom ***********************************************/
    /* **************************************************************************/
    massAddEventListener($zoom, "touchstart", touchStart);

    /* EVENT - touchmove - document *********************************************/
    /****************************************************************************/
    document.addEventListener("touchmove", touchMove);

    /* EVENT - touchend - document **********************************************/
    /****************************************************************************/
    document.addEventListener("touchend", touchEnd);

    /* EVENT - wheel - $zoom ****************************************************/
    /****************************************************************************/
    massAddEventListener($zoom, "wheel", wheel);

    /* @-<mouseEnter ************************************************************/
    /****************************************************************************/
    function mouseEnter() {
        disableScroll();
    }

    /* @-<mouseLeave ************************************************************/
    /****************************************************************************/
    function mouseLeave() {
        enableScroll();
    }

    /* @-<mouseDown *************************************************************/
    /****************************************************************************/
    function mouseDown(e) {
        e.preventDefault();

        if (touchable === true || e.which !== 1) {
            return false;
        }

        /* Initialize selectors */
        $container = this;
        $element = this.children[0];

        /* Initialize helpers */
        initialPointerOffsetX = e.clientX;
        initialPointerOffsetY = e.clientY;

        /* Doubleclick */
        if (doubleClickMonitor[0] === null) {
            doubleClickMonitor[0] = e.target;
            doubleClickMonitor[1] = initialPointerOffsetX;
            doubleClickMonitor[2] = initialPointerOffsetY;

            setTimeout(function() {
                doubleClickMonitor = [null];
            }, 400);
        } else if (doubleClickMonitor[0] === e.target && mousemoveCount <= 5 && isWithinRange(initialPointerOffsetX, doubleClickMonitor[1] - 10, doubleClickMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleClickMonitor[2] - 10, doubleClickMonitor[2] + 10) === true) {
            if (hasClass($container, _active) === true) {
                /* Set attributes */
                $element.setAttribute(_dataScale, 1);
                $element.setAttribute(_dataTranslateX, 0);
                $element.setAttribute(_dataTranslateY, 0);

                removeClass($container, _active);

                /* @->moveScaleElement */
                moveScaleElement($element, 0, 0, 1);
            } else {
                /* Set attributes */
                $element.setAttribute(_dataScale, C_scaleDefault);
                $element.setAttribute(_dataTranslateX, 0);
                $element.setAttribute(_dataTranslateY, 0);

                addClass($container, _active);

                /* @->moveScaleElement */
                moveScaleElement($element, 0, 0, C_scaleDefault);
            }

            doubleClickMonitor = [null];
            return false;
        }

        /* Initialize helpers */
        containerOffsetX = $container.offsetLeft;
        containerOffsetY = $container.offsetTop;
        containerHeight = $container.clientHeight;
        containerWidth = $container.clientWidth
        elementHeight = $element.clientHeight;
        elementWidth = $element.clientWidth;
        initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);

        mousemoveCount = 0;

        /* Set capture */
        capture = true;
    }

    /* @-<mouseMove *************************************************************/
    /****************************************************************************/
    function mouseMove(e) {
        if (touchable === true || capture === false) {
            return false;
        }

        /* Initialize helpers */
        pointerOffsetX = e.clientX;
        pointerOffsetY = e.clientY;
        targetScale = initialScale;
        limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
        targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
        targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);
        mousemoveCount++;

        if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
            initialOffsetX = targetOffsetX;
            initialPointerOffsetX = pointerOffsetX;
        }

        if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
            initialOffsetY = targetOffsetY;
            initialPointerOffsetY = pointerOffsetY;
        }

        /* Set attributes */
        $element.setAttribute(_dataScale, targetScale);
        $element.setAttribute(_dataTranslateX, targetOffsetX);
        $element.setAttribute(_dataTranslateY, targetOffsetY);

        /* @->moveScaleElement */
        moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
    }

    /* @-<mouseUp ***************************************************************/
    /****************************************************************************/
    function mouseUp() {
        if (touchable === true || capture === false) {
            return false;
        }

        /* Unset capture */
        capture = false;
    }

    /* @-<touchStart ************************************************************/
    /****************************************************************************/
    function touchStart(e) {
        e.preventDefault();

        if (e.touches.length > 2) {
            return false;
        }

        /* Initialize selectors */
        $container = this;
        $element = this.children[0];

        /* Initialize helpers */
        containerOffsetX = $container.offsetLeft;
        containerOffsetY = $container.offsetTop;
        containerHeight = $container.clientHeight;
        containerWidth = $container.clientWidth;
        elementHeight = $element.clientHeight;
        elementWidth = $element.clientWidth;
        initialPointerOffsetX = e.touches[0].clientX;
        initialPointerOffsetY = e.touches[0].clientY;
        initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);
        touchCount = e.touches.length;

        if (touchCount === 1) /* Single touch */
        {
            /* Doubletap */
            if (doubleTapMonitor[0] === null) {
                doubleTapMonitor[0] = e.target;
                doubleTapMonitor[1] = initialPointerOffsetX;
                doubleTapMonitor[2] = initialPointerOffsetY;

                setTimeout(function() {
                    doubleTapMonitor = [null];
                }, 400);
            } else if (doubleTapMonitor[0] === e.target && touchmoveCount <= 5 && isWithinRange(initialPointerOffsetX, doubleTapMonitor[1] - 30, doubleTapMonitor[1] + 30) === true && isWithinRange(initialPointerOffsetY, doubleTapMonitor[2] - 30, doubleTapMonitor[2] + 25) === true) {
                if (hasClass($container, _active) === true) {
                    /* Set attributes */
                    $element.setAttribute(_dataScale, 1);
                    $element.setAttribute(_dataTranslateX, 0);
                    $element.setAttribute(_dataTranslateY, 0);

                    removeClass($container, _active);

                    /* @->moveScaleElement */
                    moveScaleElement($element, 0, 0, 1);
                } else {
                    /* Set attributes */
                    $element.setAttribute(_dataScale, C_scaleDefault);
                    $element.setAttribute(_dataTranslateX, 0);
                    $element.setAttribute(_dataTranslateY, 0);

                    addClass($container, _active);

                    /* @->moveScaleElement */
                    moveScaleElement($element, 0, 0, C_scaleDefault);
                }

                doubleTapMonitor = [null];
                return false;
            }

            /* Initialize helpers */
            initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
            initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        } else if (touchCount === 2) /* Pinch */
        {
            /* Initialize helpers */
            initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
            initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
            initialPointerOffsetX2 = e.touches[1].clientX;
            initialPointerOffsetY2 = e.touches[1].clientY;
            pinchOffsetX = (initialPointerOffsetX + initialPointerOffsetX2) / 2;
            pinchOffsetY = (initialPointerOffsetY + initialPointerOffsetY2) / 2;
            initialPinchDistance = Math.sqrt(((initialPointerOffsetX - initialPointerOffsetX2) * (initialPointerOffsetX - initialPointerOffsetX2)) + ((initialPointerOffsetY - initialPointerOffsetY2) * (initialPointerOffsetY - initialPointerOffsetY2)));
        }

        touchmoveCount = 0;

        /* Set capture */
        capture = true;
    }

    /* @-<touchMove *************************************************************/
    /****************************************************************************/
    function touchMove(e) {
        e.preventDefault();

        if (capture === false) {
            return false;
        }

        /* Initialize helpers */
        pointerOffsetX = e.touches[0].clientX;
        pointerOffsetY = e.touches[0].clientY;
        touchCount = e.touches.length;
        touchmoveCount++;

        if (touchCount > 1) /* Pinch */
        {
            pointerOffsetX2 = e.touches[1].clientX;
            pointerOffsetY2 = e.touches[1].clientY;
            targetPinchDistance = Math.sqrt(((pointerOffsetX - pointerOffsetX2) * (pointerOffsetX - pointerOffsetX2)) + ((pointerOffsetY - pointerOffsetY2) * (pointerOffsetY - pointerOffsetY2)));

            if (initialPinchDistance === null) {
                initialPinchDistance = targetPinchDistance;
            }

            if (Math.abs(initialPinchDistance - targetPinchDistance) >= 1) {
                /* Initialize helpers */
                targetScale = minMax(targetPinchDistance / initialPinchDistance * initialScale, C_scaleMin, C_scaleMax);
                limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
                limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
                scaleDifference = targetScale - initialScale;
                targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pinchOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
                targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pinchOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);

                if (targetScale > 1) {
                    addClass($container, _active);
                } else {
                    removeClass($container, _active);
                }

                /* @->moveScaleElement */
                moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);

                /* Initialize helpers */
                initialPinchDistance = targetPinchDistance;
                initialScale = targetScale;
                initialOffsetX = targetOffsetX;
                initialOffsetY = targetOffsetY;
            }
        } else /* Single touch */
        {
            /* Initialize helpers */
            targetScale = initialScale;
            limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
            limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
            targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
            targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);

            if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
                initialOffsetX = targetOffsetX;
                initialPointerOffsetX = pointerOffsetX;
            }

            if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
                initialOffsetY = targetOffsetY;
                initialPointerOffsetY = pointerOffsetY;
            }

            /* Set attributes */
            $element.setAttribute(_dataScale, initialScale);
            $element.setAttribute(_dataTranslateX, targetOffsetX);
            $element.setAttribute(_dataTranslateY, targetOffsetY);

            /* @->moveScaleElement */
            moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
        }
    }

    /* @-<touchEnd **************************************************************/
    /****************************************************************************/
    function touchEnd(e) {
        touchCount = e.touches.length;

        if (capture === false) {
            return false;
        }

        if (touchCount === 0) /* No touch */
        {
            /* Set attributes */
            $element.setAttribute(_dataScale, initialScale);
            $element.setAttribute(_dataTranslateX, targetOffsetX);
            $element.setAttribute(_dataTranslateY, targetOffsetY);

            initialPinchDistance = null;
            capture = false;
        } else if (touchCount === 1) /* Single touch */
        {
            initialPointerOffsetX = e.touches[0].clientX;
            initialPointerOffsetY = e.touches[0].clientY;
        } else if (touchCount > 1) /* Pinch */
        {
            initialPinchDistance = null;
        }
    }

    /* @-<wheel *****************************************************************/
    /****************************************************************************/
    function wheel(e) {
        /* Initialize selectors */
        $container = this;
        $element = this.children[0];

        /* Initialize helpers */
        offset = $container.getBoundingClientRect();
        containerHeight = $container.clientHeight;
        containerWidth = $container.clientWidth;
        elementHeight = $element.clientHeight;
        elementWidth = $element.clientWidth;
        containerOffsetX = offset.left;
        containerOffsetY = offset.top;
        initialScale = minMax(parseFloat($element.getAttribute(_dataScale), C_scaleMin, C_scaleMax));
        initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
        initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
        pointerOffsetX = e.clientX;
        pointerOffsetY = e.clientY;
        scaleDirection = e.deltaY < 0 ? 1 : -1;
        scaleDifference = C_scaleDifference * scaleDirection;
        targetScale = initialScale + scaleDifference;

        /* Prevent scale overflow */
        if (targetScale < C_scaleMin || targetScale > C_scaleMax) {
            return false;
        }

        /* Set offset limits */
        limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
        limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;

        if (targetScale <= 1) {
            targetOffsetX = 0;
            targetOffsetY = 0;
        } else {
            /* Set target offsets */
            targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pointerOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
            targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pointerOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);
        }

        if (targetScale > 1) {
            addClass($container, _active);
        } else {
            removeClass($container, _active);
        }

        /* Set attributes */
        $element.setAttribute(_dataScale, targetScale);
        $element.setAttribute(_dataTranslateX, targetOffsetX);
        $element.setAttribute(_dataTranslateY, targetOffsetY);

        /* @->moveScaleElement */
        moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
    }
}

/* Library ********************************************************************/
/******************************************************************************/

/* @-<addClass ****************************************************************/
/******************************************************************************/
function addClass($element, targetClass) {
    if (hasClass($element, targetClass) === false) {
        $element.className += " " + targetClass;
    }
}

/* @-<disableScroll ***********************************************************/
/******************************************************************************/
function disableScroll() {
    if (window.addEventListener) // older FF
    {
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    }

    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

/* @-<enableScroll ************************************************************/
/******************************************************************************/
function enableScroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    }

    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

/* @isWithinRange *************************************************************/
/******************************************************************************/
function isWithinRange(value, min, max) {
    if (value >= min && value <= max) {
        return true;
    } else {
        return false;
    }
}

/* @hasClass ******************************************************************/
/******************************************************************************/
function hasClass($element, targetClass) {
    var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");

    if ($element.className.match(rgx)) {
        return true;
    } else {
        return false;
    }
}

/* @-<massAddEventListener ****************************************************/
/******************************************************************************/
function massAddEventListener($elements, event, customFunction, useCapture) {
    var useCapture = useCapture || false;

    for (var i = 0; i < $elements.length; i++) {
        $elements[i].addEventListener(event, customFunction, useCapture);
    }
}

/* @-<minMax ******************************************************************/
/******************************************************************************/
function minMax(value, min, max) {
    if (value < min) {
        value = min;
    } else if (value > max) {
        value = max;
    }

    return value;
}

/* @-<moveScaleElement ********************************************************/
/******************************************************************************/
function moveScaleElement($element, targetOffsetX, targetOffsetY, targetScale) {
    $element.style.cssText = "-moz-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -ms-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -o-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -webkit-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); transform : translate3d(" + targetOffsetX + ", " + targetOffsetY + ", 0) scale3d(" + targetScale + ", " + targetScale + ", 1);";
}

/* @-<preventDefault **********************************************************/
/******************************************************************************/
function preventDefault(e) {
    e = e || window.event;

    if (e.preventDefault) {
        e.preventDefault();
    }

    e.returnValue = false;
}

/* @preventDefaultForScrollKeys ***********************************************/
/******************************************************************************/
function preventDefaultForScrollKeys(e) {
    var keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

/* @removeClass ***************************************************************/
/******************************************************************************/
function removeClass($element, targetClass) {
    var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");

    $element.className = $element.className.replace(rgx, "");
}