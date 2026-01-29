// // Conditions in JavaScript

// // Conditions are used to perform different actions based on different situations.

// // There are several types of conditional statements in JavaScript:

// // 1. if statement
let age = 18; 
if (age >= 18) {
    console.log("You are an adult.");
}
// // In this example, if the age is 18 or older, it will print "You are an adult."

// // 2. if...else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
// // In this example, if the time is before 12, it will print "Good morning!", otherwise it will print "Good afternoon!"

// // 3. else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
// // In this example, the program checks the score and prints the corresponding grade.

// 4. foreach statement
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// In this example, the program iterates over each fruit in the fruits array and prints it to the console. 


// // 4. switch statement
const day = prompt("Enter a number (1-7) for the day of the week:");
switch (day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Weekend");
}
// // In this example, the program checks the value of day and prints the corresponding day of the week.
// // If the input does not match any case, it will print "Weekend".