'use strict';

var gBallDiameter = 100

function onBallClick() {

    const elBall = document.querySelector('.ball')

    gBallDiameter += 50

    elBall.style.width = `${gBallDiameter}px`
    elBall.innerText = `${gBallDiameter}`
}

