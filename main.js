'use strict';

var gBallDiameter = 100
var gIntervalHover

function onBallClick(maxDiameter) {
    const elBall = document.querySelector('.ball')
    
    var randAmount = getRandomInt(20, 60)
    gBallDiameter += randAmount
    
    if (gBallDiameter > maxDiameter) gBallDiameter = 100

    elBall.style.width = `${gBallDiameter}px`
    elBall.innerText = `${gBallDiameter}`
    elBall.style.backgroundColor = getRandomColor()
}

function onBall2Click(maxDiameter) {
    const elBall = document.querySelector('.ball-2')
    
    var randAmount = getRandomInt(20, 60)
    gBallDiameter += randAmount
    
    if (gBallDiameter > maxDiameter) gBallDiameter = 100

    elBall.style.width = `${gBallDiameter}px`
    elBall.innerText = `${gBallDiameter}`
    elBall.style.backgroundColor = getRandomColor()
}

function onBall3Click() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball-2')

    var tempBall1Width =  elBall1.style.width 
    var tempBall1Color =  elBall1.style.backgroundColor

    elBall1.style.width = elBall2.style.width
    elBall2.style.width = tempBall1Width

    elBall1.style.backgroundColor =  elBall2.style.backgroundColor
    elBall2.style.backgroundColor = tempBall1Color
}

function onBall4Click() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball-2')

    var randAmount = getRandomInt(20, 60)

    const ball1Width =  parseInt(elBall1.style.width)
    const newBall1Width = ball1Width - randAmount

    const ball2Width =  parseInt(elBall2.style.width)
    const newBall2Width = ball2Width - randAmount

    elBall1.style.width = `${Math.max(100, newBall1Width)}px`
    elBall2.style.width = `${Math.max(100, newBall2Width)}px`
}

function onBall5Click() {
    const elBody = document.querySelector('body')

    elBody.style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball-2')

    elBall1.style.width = '100px'
    elBall1.style.backgroundColor = 'rgb(7, 229, 214)'
    elBall1.innerText = '100'
    
    elBall2.style.width = '100px'
    elBall2.style.backgroundColor = 'rgb(229, 144, 7)'
    elBall2.innerText = '100'
}

const elBall6 = document.querySelector('.ball-6')
var gHoverTimer

elBall6.addEventListener('mouseenter', () => {
    gHoverTimer = setTimeout(() => {
        onBall6Hover()
    }, 2000);
})

function onBall6Hover() {
    gIntervalHover = setInterval(() => {
        onBallClick()
        onBall2Click()
        onBall3Click()
        onBall4Click()
    }, 2000);
}

elBall6.addEventListener('mouseleave', () => {
    clearInterval(gIntervalHover)
    clearTimeout(gHoverTimer)
})

