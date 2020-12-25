'use strict'
/* console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = `🎉 Correct Number!`
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 29
document.querySelector('.guess').value = 27
console.log(document.querySelector('.guess').value) */

document.querySelector('.check').addEventListener('click', ev => {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    }
})
