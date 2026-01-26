// Arrays in JavaScript
// An array is a collection of items
// It can hold multiple values in a single variable

let mark_student1 = 98;
let mark_student2 = 85;
let mark_student3 = 76;
let mark_student4 = 88;
let mark_student5 = 90;

// using objects to store multiple values
let marks = {
    std1 : 95,
    std2 : 85,
    std3 : 76,
    std4 : 88,
    std5 : 90
};  

// using arrays to store multiple values

let marks_array = [95, 85, 76, 88, 90];

console.log(marks_array);

console.log(marks_array.length); // length of the array

// Accessing elements in the array

console.log("Mark of student 1 is: " + marks_array[0]);
console.log("Mark of student 3 is: " + marks_array[2]);

marks_array[4] = 92; // updating value at index 4
console.log("Updated mark of student 5 is: " + marks_array[4]);