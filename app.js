// Basic module structure:
// 1. Get and store into variables all the DOM elements you will need to either
// read or write from. 
// 2. Define variables and initial values for "state". 
//  Be aware of whether the values will change over the life of the 
//  App (`let`) or will stay the same (`const`). 
//    - Don't forget to define a variable with the correct number!
// 3. Define an event handler functions on appropriate DOM element(s).
//Import elements
import { matchingLogic } from './logic-function.js';

//DOM elements
const button = document.getElementById('button');
const results = document.getElementById('results');
const input = document.getElementById('input');
const guesses = document.getElementById('guesses-remaining');
//global states
let guessThisNumber = Math.floor(Math.random() * 19 + 1);
let attempts = 0;
console.log(guessThisNumber, attempts);
// set event listeners to update state and DOM

button.addEventListener('click', () => {
    attempts++;
    const attemptLimit = 5;
    const userInput = Number(input.value);
    const doTheyMatch = matchingLogic(userInput, guessThisNumber);
    console.log(doTheyMatch, userInput, guessThisNumber, attempts);
    
    if (doTheyMatch === 0) {
        return results.textContent = 'You did it! You guessed the number!';
    }
    if (doTheyMatch === -1) {
        results.textContent = 'You\'re too low! Ask a bigger number next time!';
    }
    if (doTheyMatch === 1) {
        results.textContent = 'Your number is too big! Ask a smaller number next time!';
    }
    if (attemptLimit === attempts) {
        return results.textContent = `${guessThisNumber} was the correct number!`, guesses.textContent = 'You failed to guess the correct number in the allotted guesses. GAME OVER!';
    }

});



// Basic Logic Flow:

// 1. Convert guess to a number
// 1. Compare guessed number to actual number using `compareNumbers`
//    - Guess too high or low?
//       1. Display message
//       1. Decrement tries remaining
//          - No tries remaining?
//             1. Display lose message
//             1. Disable game play
//    - Correct guess?
//       1. Display win message
//       1. Disable game play

