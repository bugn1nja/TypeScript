// Loops in JavaScript
// Loops are used to execute a block of code repeatedly until a specified condition is met.

// there are several types of loops in JavaScript:
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for...in loop
// 5. for...of loop


// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration:", i);
}

// in this example, the loop will run 5 times, printing the value of i from 0 to 4.
// first we initialize i to 0, then we check if i is less than 5, and after each iteration, we increment i by 1.

// 2. while loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration:", j);
    j++;
}
// in this example, the loop will run as long as j is less than 5.
// we initialize j to 0, and in each iteration, we print the value of j and increment it by 1.

// 3. do...while loop
let k = 0;
do {
    console.log("Do...While Loop iteration:", k);
    k++;
} while (k < 5);
// in this example, the loop will run at least once, and then continue to run as long as k is less than 5.
// we initialize k to 0, and in each iteration, we print the value of k and increment it by 1.

// 4. for...in loop
const person = {name: "Alice", age: 25, city: "New York"};
for (let key in person) {
    console.log("For...In Loop iteration:", key, person[key]);
}
// in this example, the loop will iterate over each property of the person object.
// we use the for...in loop to access each key in the object and print both the key and its value.

// 5. for...of loop
const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log("For...Of Loop iteration:", fruit);
}
// in this example, the loop will iterate over each element in the fruits array.
// we use the for...of loop to access each element directly.