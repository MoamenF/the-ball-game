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

