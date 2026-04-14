// DOM 

// DOM stands for Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes, where each node represents an element, attribute, or piece of text in the document.

// In TypeScript, we can use the DOM API to manipulate the document. We can access elements, change their properties, and add event listeners to them. The DOM API is available in the global scope, so we can use it directly in our TypeScript code.

console.log("Hello, DOM!");
console.log(window); // The global window object
window.console.log("hello2")

// console.log() is window onject's method, so we can also use it as window.console.log().

console.dir(document.body); // The body element of the document
console.dir(document.body.childNodes[1]); // The child nodes of the body element

