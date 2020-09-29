// Basic module structure:
// 1. Get and store into variables all the DOM elements you will need to either
// read or write from. 
// 2. Define variables and initial values for "state". 
//  Be aware of whether the values will change over the life of the 
//  App (`let`) or will stay the same (`const`). 
//    - Don't forget to define a variable with the correct number!
// 3. Define an event handler functions on appropriate DOM element(s).
const button = document.getElementById('button');
const results = document.getElementById('results');
const input = document.getElementById('input');
// initialize state

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userInput = input.value;
    const userResults = userInput;
    return results.textContent = userResults;

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

// ### STRETCH

// #### Random Number

// Generate the number to guess randomly. Checkout [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) which include examples. You _can_ copy an example function, just make sure to:
// 1. Attribute MDN using a comment above the function
// 1. Make code match your project code style
// 1. Remove unneeded parts of the code (if any)

// #### Functions as Unit of Work

// Move UI work into functions for discrete UI updating tasks:
// 1. Decrementing tries
// 1. Display of too low message
// 1. Display of too high message
// 1. Disable game play
// 1. Display of Lose Game
// 1. Display of Win Game