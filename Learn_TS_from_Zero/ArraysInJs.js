// Arrays in JavaScript
// An array is a collection of items
// It can hold multiple values in a single variable

let mark_student1 = 98;
let mark_student2 = 85;
let mark_student3 = 76;
let mark_student4 = 88;
let mark_student5 = 90;



// using arrays to store multiple values

let marks = [95, 85, 76, 88, 90];

console.log(marks);

// Nested Arrays
let nested_array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(nested_array);

// Array Methods

// Adding & Removing Elements

// 1. .push() - adds a new element to the end of the array

marks.push(100);
console.log("After pushing 100 at the end of the array : ", marks); // Output: [95, 85, 76, 88, 90, 100]

// 2. .pop() - removes the last element from the array

marks.pop();
console.log("After popping the last element from the array : ", marks); // Output: [95, 85, 76, 88, 90]

// 3. .unshift() - adds a new element to the beginning of the array

marks.unshift(90);
console.log("After unshifting 90 at the beginning of the array : ", marks); // Output: [90, 95, 85, 76, 88, 90]

// 4. .shift() - removes the first element from the array

marks.shift();
console.log("After shifting the first element from the array : ", marks); // Output: [95, 85, 76, 88, 90]

// 5. .splice() - adds/removes elements from the array

// Adding elements using splice
marks.splice(2, 0, 80, 82); // at index 2, remove 0 elements, add 80 and 82
console.log("After splicing to add elements at index 2 : ", marks); // Output: [95, 85, 80, 82, 76, 88, 90]

// Removing elements using splice
marks.splice(3, 2); // at index 3, remove 2 elements
console.log("After splicing to remove 2 elements from index 3 : ", marks); // Output: [95, 85, 80, 90]

// Finding Elements

// 6. .find() - returns the first element that satisfies a condition

let firstHighMark = marks.find(marks => marks > 85);
console.log("First mark greater than 85 : ", firstHighMark); // Output: 95

let firstLowMark = marks.find(function(marks) {
    return marks < 80;
});
console.log("First mark less than 80 : ", firstLowMark); // Output: undefined

// 7. .findIndex() - returns the index of the first element that satisfies a condition

let firstHighMarkIndex = marks.findIndex(marks => marks > 85); // index of first mark greater than 85
console.log("Index of first mark greater than 85 : ", firstHighMarkIndex); // Output: 0

// 8. .indexOf() - returns the index of a specific element

let indexOf88 = marks.indexOf(88);
console.log("Index of mark 88 : ", indexOf88); // Output: -1 (not found)

// 9. .includes() - checks if an array contains a specific element

let has90 = marks.includes(90);
console.log("Array contains 90 : ", has90); // Output: true

// Transforming Arrays

// 10. .map() - creates a new array by applying a function to each element

let doubledMarks = marks.map(marks => marks * 2);
console.log("Doubled Marks : ", doubledMarks); // Output: [190, 170, 160, 180]

// 11. .filter() - creates a new array with elements that satisfy a condition

let highMarks = marks.filter(marks => marks > 85);
console.log("Marks greater than 85 : ", highMarks); // Output: [95, 90]

// 12. .reduce() - reduces the array to a single value by applying a function

let totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Total Marks : ", totalMarks); // Output: 350
    // step 1: accumulator = 0, currentValue = 95 => returns 95
    // step 2: accumulator = 95, currentValue = 85 => returns 180
    // step 3: accumulator = 180, currentValue = 80 => returns 260
    // step 4: accumulator = 260, currentValue = 90 => returns 350

// 13. .flat() - flattens a nested array

const nasted_array = [[45, 28, 37], [46, 51, 67], [73, 81, 91]];

let flattenedArray = nasted_array.flat();
console.log("Flattened Array : ", flattenedArray); // Output: [45, 28, 37, 46, 51, 67, 73, 81, 91]

let deep_nested_array = [[11, 25, [38, 44]], [59, 67], [71, [81, 91]]];

let deeplyFlattenedArray = deep_nested_array.flat(2);
console.log("Deeply Flattened Array : ", deeplyFlattenedArray); // Output: [11, 25, 38, 44, 59, 67, 71, 81, 91]

// 14. .short() - sorts the elements of an array

let unsortedMarks = [88, 55, 99, 22, 77, 44, 11, 66, 33];
unsortedMarks.sort((a, b) => a - b); // ascending order
console.log("Sorted Marks in Ascending Order : ", unsortedMarks); // Output: [11, 22, 33, 44, 55, 66, 77, 88, 99]
    // step 1: compare 88 and 55, swap
    // step 2: compare 88 and 99, no swap
    // step 3: compare 99 and 22, swap
    // and so on...

unsortedMarks.sort((a, b) => b - a); // descending order
console.log("Sorted Marks in Descending Order : ", unsortedMarks); // Output: [99, 88, 77, 66, 55, 44, 33, 22, 11]

// 15. .reverse() - reverses the order of elements in an array

unsortedMarks.reverse();
console.log("Reversed Marks : ", unsortedMarks); // Output: [11, 22, 33, 44, 55, 66, 77, 88, 99]

// Iterating Over Arrays

// 16. .forEach() - executes a provided function once for each array element

marks.forEach(function(marks, index) {
    console.log("Mark at index " + index + " is " + marks);
});
// Output:
// Mark at index 0 is 95
// Mark at index 1 is 85
// Mark at index 2 is 80
// Mark at index 3 is 90

// 17. .some() - checks if at least one element in the array satisfies a condition

let hasFailingMark = marks.some(marks => marks < 40);
console.log("Array has at least one failing mark (<40) : ", hasFailingMark); // Output: false

// 18. .every() - checks if all elements in the array satisfy a condition

let allPassingMarks = marks.every(marks => marks >= 40);
console.log("All marks are passing (>=40) : ", allPassingMarks); // Output: true

// Combining & Slicing Arrays

// 19. .concat() - merges two or more arrays

let moreMarks = [78, 82, 91];
let combinedMarks = marks.concat(moreMarks);
console.log("Combined Marks : ", combinedMarks); // Output: [95, 85, 80, 90, 78, 82, 91]

// 20. .slice() - returns a shallow copy of a portion of an array

let slicedMarks = combinedMarks.slice(2, 5); // from index 2 to index 5 (not included)
console.log("Sliced Marks (index 2 to 5) : ", slicedMarks); // Output: [80, 90, 78]

// 21. .join() - joins all elements of an array into a string

let markString = marks.join(", ");
console.log("Marks as a string : ", markString); // Output: "95, 85, 80, 90"












// // .toString() - converts the array to a string

// let name = ["Mustabin","Mujaddid","Eazana"];

// let stringName = name.toString();

// console.log(stringName); // Output: Mustabin,Mujaddid,Eazana

