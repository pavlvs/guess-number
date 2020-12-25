'use strict'
/* console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = `🎉 Correct Number!`
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 29
document.querySelector('.guess').value = 27
console.log(document.querySelector('.guess').value) */

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
document.querySelector('.number').textContent = secretNumber

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

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct!'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high'
        updateScore()
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low'
        updateScore()
    }
})
