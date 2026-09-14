'use strict';

var gIntervalHover
var gHoverTimer
var gCycleCount = 0
var gCounter = 0

var gGameStats = {
    ball1: {diameter: 100, color: 'rgb(7, 229, 214)'},
    ball2: {diameter: 100, color: 'rgb(229, 144, 7)'}
}

const gInitStats = structuredClone(gGameStats)

const gUndoStack = []
const gRedoStack = []

var gSecsPassed = 0
var gStartTime
var gTimeInterval = null


function onInitGame() {
    render()
    updateHistoryButtons()
}


function onBallClick(maxDiameter) {
    makeChange(() => {
        
        const randAmount = getRandomInt(20, 60)
        gGameStats.ball1.diameter += randAmount

        if (gGameStats.ball1.diameter > maxDiameter) gGameStats.ball1.diameter = 100

        gGameStats.ball1.color = getRandomColor()
    })
}

function onBall2Click(maxDiameter) {
    makeChange(() => {
        
        const randAmount = getRandomInt(20, 60)
        gGameStats.ball2.diameter += randAmount

        if (gGameStats.ball2.diameter > maxDiameter) gGameStats.ball2.diameter = 100

        gGameStats.ball2.color = getRandomColor()
    })
}

function onBall3Click() {
    makeChange(() => {
        
        const tempBallStats = gGameStats.ball1

        gGameStats.ball1 = gGameStats.ball2
        gGameStats.ball2 = tempBallStats

    })
}

function onBall4Click() {
    makeChange(() => {
        
        const randAmount = getRandomInt(20, 60)
        const newBall1Diameter = gGameStats.ball1.diameter - randAmount
        const newBall2Diameter = gGameStats.ball2.diameter - randAmount
        
        gGameStats.ball1.diameter = Math.max(100, newBall1Diameter)
        gGameStats.ball2.diameter = Math.max(100, newBall2Diameter)
    })
}

function onBall5Click() {
    const elBody = document.querySelector('body')

    elBody.style.backgroundColor = getRandomColor()
    updateCounter()
    startTimer()
}

function onBall6Click() {
    gGameStats = structuredClone(gInitStats)

    gUndoStack.length = 0
    gRedoStack.length = 0

    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'

    render()
    updateHistoryButtons()

    const elCounter = document.querySelector('.counter span')
    gCounter = 0
    elCounter.innerText = 0

    clearInterval(gTimeInterval)
    gTimeInterval = null
    var elTime = document.querySelector('.timer')
    elTime.innerHTML = '00:00'
}

const elBall6 = document.querySelector('.ball-6')

elBall6.addEventListener('mouseenter', () => {
    gHoverTimer = setTimeout(() => {
        onBall6Hover()
    }, 2000);
})

function onBall6Hover() {
    gIntervalHover = setInterval(() => {
        gCycleCount ++
        if (gCycleCount === 10) {
            clearInterval(gIntervalHover)
            clearTimeout(gHoverTimer)
        }

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

function copyGameStats() {
    return structuredClone(gGameStats)
}

function makeChange(activationFunction) {
    gUndoStack.push(copyGameStats())
    gRedoStack.length = 0

    activationFunction()
    render()
    updateHistoryButtons()
    updateCounter()
    startTimer()

    console.log('gUndoStack:', gUndoStack)
}

function render() {
    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball-2')

    elBall1.style.width = `${gGameStats.ball1.diameter}px`
    elBall1.style.backgroundColor = `${gGameStats.ball1.color}`
    elBall1.innerText = gGameStats.ball1.diameter

    elBall2.style.width = `${gGameStats.ball2.diameter}px`
    elBall2.style.backgroundColor = `${gGameStats.ball2.color}`
    elBall2.innerText = gGameStats.ball2.diameter
}

function onUndoClick() {
    if (gUndoStack.length === 0) return

    gRedoStack.push(copyGameStats())
    gGameStats = gUndoStack.pop()

    render()
    updateHistoryButtons()
    console.log('gRedoStack:', gRedoStack)
}

function onRedoClick() {
    if (gRedoStack.length === 0) return

    gUndoStack.push(copyGameStats())
    gGameStats = gRedoStack.pop()

    render()
    updateHistoryButtons()
}

function updateHistoryButtons() {
    const elUndoBtn = document.querySelector('.undo-btn')
    const elRedoBtn = document.querySelector('.redo-btn')
    
    elUndoBtn.disabled = gUndoStack.length === 0
    elRedoBtn.disabled = gRedoStack.length === 0
}

function updateCounter() {
    const elCounter = document.querySelector('.counter span')
    gCounter++

    elCounter.innerText = gCounter

}

function startTimer() {
    if (gTimeInterval !== null) return
    gStartTime = Date.now()

    gTimeInterval = setInterval(() => {
        var elapsedTime = Date.now() - gStartTime

        gSecsPassed = Math.floor(elapsedTime / 1000)

        var minutes = Math.floor( gSecsPassed / 60)
        var seconds =  gSecsPassed % 60

        var elTime = document.querySelector('.timer')
        elTime.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }, 30)
}
