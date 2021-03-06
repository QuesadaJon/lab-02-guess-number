// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { matchingLogic } from '../logic-function.js'; 
const test = QUnit.test;

test('The outcome should return +1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input1 = 4;
    const input2 = 3;
    const expected = +1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = matchingLogic(input1, input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
