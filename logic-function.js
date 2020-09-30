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
export function matchingLogic(userInput, guessThisNumber) {
    if (userInput === guessThisNumber) {
        return 0;
    }
    // if (userInput < guessThisNumber) {
    //     return -1;
    // }
    // if (userInput > guessThisNumber) {
    //     return 1;
    // }
}
