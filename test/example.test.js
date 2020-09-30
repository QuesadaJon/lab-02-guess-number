// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { matchingLogic } from '../logic-function.js'; 
const test = QUnit.test;

test('The outcome should return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input1 = 1;
    const input2 = 1;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = matchingLogic(input1, input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
