//Earlier I use ES6 but that's not working i just want to test why it is not working nd sudden i realize tha i submitted it on github so ijust edited it.
// Import the required module
const crypto = require('crypto');

// Get the commands using process.argv
let args = process.argv.slice(2);
const operation = args[0];

// Function to handle mathematical operations
function calculate(operation, args) {
    const numbers = args.map(Number);
    let result;

    switch (operation) {
        case 'add':
            result = numbers.reduce((acc, num) => acc + num, 0);
            break;
        case 'sub':
            result = numbers.reduce((acc, num) => acc - num,0);
            break; 
        case 'mult':
            result = numbers.reduce((acc, num) => acc * num, 1);
            break;
        case 'divide':
            result = numbers.reduce((acc, num) => acc / num, 1);
            break;
        case 'sin':
            result = Math.sin(numbers[0]);
            break;
        case 'cos':
            result = Math.cos(numbers[0]);
            break;
        case 'tan':
            result = Math.tan(numbers[0]);
            break;
        case 'random':
            if (numbers.length === 0) {
                console.log("Provide length for random number generation.");
                return;
            }
            const length = numbers[0];
            result = crypto.randomBytes(length).toString('hex');
            break;
        default:
            console.log("Invalid operation");
            return;
    }

    console.log(result);
}

// Call the calculate function with provided arguments
calculate(operation, args.slice(1));