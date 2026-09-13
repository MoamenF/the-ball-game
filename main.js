'use strict';

var gBallDiameter = 100

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


