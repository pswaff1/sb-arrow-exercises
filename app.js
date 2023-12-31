// Arrow Functions Exercise
// Patrick Swafford
// Springboard

/* Refactor this ES5 Map Callback function to use two arrow functions
function double(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
} */
const double = (arr) => arr.map((val) => val * 2);

/* Refactor this ES5 fuction such that all functions are arrow functions
function squareAndFindEvens(numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    var evens = squares.filter(function (square) {
        return square % 2 === 0;
    });
    return evens;
} */
const squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter(square => square % 2 === 0);