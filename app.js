// Chapter 26 (Rounding Numbers)

// Q1

var round = Math.round();

// Q2

var roundNum = Math.ceil(origNum);

// Q3

var number = 5.67;
var roundedNumber = Math.round(number);

// Q4

var roundedValue = Math.round(0.5);

// Chapter 27 (Random Numbers)

// Q1

var randomNumber = Math.random();

var numberInRange = Math.floor(randomNumber * 50);

// Q2

var randomNumber = Math.random();

// Chapter 28, 29 (Converting Strings)

// q1

// parseInt

// q2

var str = "123";
var num = parseInt(str);

// q3

var str = "3.14";
var num = parseFloat(str);

// q5

var num = 42;
var str = num.toString();

// q6

var num = 42;
var str = num.toString();

// q7

var decimal = "3.44";
var integerNum = parseInt(decimal);

// Chapter 30 (Controlling the length of decimals)

// q1

var num = 3.141562653589793238;
var newNum = num.toFixed(4).toString();

// q2

let num = 3.141592653589793238;
num = Number(num.toFixed(2).toString());

// q3

if ((num.toFixed(2).toString()).length > 4) {}

// q4

let num = 3.141592653589793238;
let roundedString = num.toFixed(2).toString();
alert(roundedString);




//                                                                                    THE END



//                                                                                  MATH METHODS


// q4

var randomNumber = Math.floor(Math.random() * 6) + 1;

alert("Dice Roll Result: " + randomNumber);

// q6

var randomNumber = Math.floor(Math.random() * 100) + 1;
alert("Random Number: " + randomNumber);

// q7

var userInput = prompt("Enter your weight:");

var weight = parseFloat(userInput);

alert("Your weight is: " + weight + " kilograms.");


// Q8

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userInput = prompt("Guess the secret number (between 1 and 10):");

userInput = parseInt(userInput);

if (userInput === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
} else {
    alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}