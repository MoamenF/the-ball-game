'use strict';

var gBallDiameter = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')
    
    var randAmount = getRandomInt(20, 60)
    gBallDiameter += randAmount
    
    if (gBallDiameter > 400) gBallDiameter = 100

    elBall.style.width = `${gBallDiameter}px`
    elBall.innerText = `${gBallDiameter}`
    
}

