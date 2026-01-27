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


// Methods in arrays

// push() - adds an element to the end of the array
marks_array.push(100);
console.log("After push: " + marks_array);

// pop() - removes the last element from the array
marks_array.pop();
console.log("After pop: " + marks_array);

// shift() - removes the first element from the array
marks_array.shift();
console.log("After shift: " + marks_array);

// unshift() - adds an element to the beginning of the array
marks_array.unshift(99);
console.log("After unshift: " + marks_array);

// reduce() - sums up all elements in the array
let total_marks = marks_array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Total marks: " + total_marks);     

// forEach() - iterates over each element in the array
console.log("Marks of all students:");  
marks_array.forEach((mark, index) => {
    console.log("Student " + (index + 1) + ": " + mark);
});

// map() - creates a new array by applying a function to each element
let curved_marks = marks_array.map(mark => mark + 5);
console.log("Curved marks: " + curved_marks);   

// filter() - creates a new array with elements that pass a test
let passed_students = marks_array.filter(mark => mark >= 90);
console.log("Passed students' marks: " + passed_students);

// find() - returns the first element that passes a test
let first_failing_mark = marks_array.find(mark => mark < 60);
console.log("First failing mark: " + first_failing_mark);

// sort() - sorts the elements in the array
marks_array.sort((a, b) => a - b);
console.log("Sorted marks: " + marks_array);

// reverse() - reverses the order of elements in the array
marks_array.reverse();
console.log("Reversed marks: " + marks_array);