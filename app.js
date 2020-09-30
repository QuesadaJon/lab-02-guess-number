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
//global states
let guessThisNumber = Math.floor(Math.random() * 19 + 1);
console.log(guessThisNumber);
// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userInput = Number(input.value);
    const userResults = userInput;
    const guessThisNumber = globalNumber;
    return results.textContent = userResults;
    const doTheyMatch = matchingLogic(userInput, globalNumber);
    console.log(doTheyMatch, userInput, guessThisNumber);
    

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

