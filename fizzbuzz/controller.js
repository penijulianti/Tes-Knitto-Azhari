"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz = (num) => {
    let result = '';
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz<br>';
        }
        else if (i % 3 === 0) {
            result += 'Fizz<br>';
        }
        else if (i % 5 === 0) {
            result += 'Buzz<br>';
        }
        else {
            result += `${i}<br>`;
        }
    }
    return result;
};
exports.default = fizzBuzz;
