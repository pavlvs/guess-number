'use strict'
/* console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = `🎉 Correct Number!`
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 29
document.querySelector('.guess').value = 27
console.log(document.querySelector('.guess').value) */

let score
let secretNumber
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

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

document.querySelector('.check').addEventListener('click', ev => {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!')
        // When guess is correct
    } else if (guess === secretNumber) {
        displayMessage('Correct number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess !== secretNumber) {
        let messageText = guess > secretNumber ? 'Too high' : 'Too low'
        displayMessage(messageText)

        if (score > 0) {
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('Game Over. You lost!')
        }
    }
})

document.querySelector('.again').addEventListener('click', reset)
