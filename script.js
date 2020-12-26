'use strict'
/* console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = `🎉 Correct Number!`
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 29
document.querySelector('.guess').value = 27
console.log(document.querySelector('.guess').value) */

let score
let secretNumber

reset()

function reset() {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
}

function updateScore() {
    if (score > 0) {
        score--
        document.querySelector('.score').textContent = score
    } else {
        document.querySelector('.message').textContent = 'Game Over. You lost!'
    }
}

document.querySelector('.check').addEventListener('click', ev => {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
        // When guess is correct
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct!'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        // When guess is too high
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high'
        updateScore()
        // When guess is too low
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low'
        updateScore()
    }
})

document.querySelector('.again').addEventListener('click', reset)
