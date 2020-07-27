import Hangman from './hangman'
import getPuzzle from './requests'
import validator from 'validator'

//-------Unrelated test on using validator---------------------------------//

let valid_email = 'fromerop@gmail.com'
let invalid_email = 'Hello World!'

console.log(validator.isEmail(valid_email), validator.isEmail(invalid_email))

//---------------------------------------------------------------------------




const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    let letters = game1.puzzle.split('')
    letters.forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzleEl.appendChild(span)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame()