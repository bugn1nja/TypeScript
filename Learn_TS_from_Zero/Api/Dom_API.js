// DOM Api stand for Document Object Model Application Programming Interface. It is a set of rules and protocols for building and interacting with web documents. The DOM defines the methods and data structures that developers can use to interact with the web document, allowing them to manipulate the structure, style, and content of the page.
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// The DOM API provides a way to access and manipulate the elements of a web page using JavaScript. It allows developers to create dynamic and interactive web applications by modifying the content and structure of the page in response to user actions or other events.



// From Console

// document
#document (https://www.google.com/)<!DOCTYPE html><html itemscope itemtype=​"http:​/​/​schema.org/​WebPage" 
    
document.onclick = () => {
    console.log('Hello DOM")
                }
VM3250:2 Uncaught SyntaxError: Invalid or unexpected token

document.onclick = () => {
    console.log("Hellod DOM")
}
() => {
    console.log("Hellod DOM")
}
4VM3460:2 Hellod DOM
document.ondblclick = () => {
    alert("FUck You ! Search somthing first")
}
() => {
    alert("FUck You ! Search somthing first")
}
3VM3460:2 Hellod DOM
document.onclick = () => {
    alert("FUck You ! Search somthing first")
}
() => {
    alert("FUck You ! Search somthing first")
}
clear
ƒ clear() { [native code] }
document.onclick = () => {
    console.log("Hellow Mujaddid")
                }
() => {
    console.log("Hellow Mujaddid")
                }
7VM3761:2 Hellow Mujaddid
document.onclick = () => {
    alert("FUck You ! Search somthing first")
}
() => {
    alert("FUck You ! Search somthing first")
}

document.body.append("Hellowwwwwwwwww")
undefined
document.body.appendChild("HI")
VM4239:1 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
    at <anonymous>:1:15
(anonymous) @ VM4239:1
const myHeading = document.createElement('h1')
undefined
document.body.appendChild(myHeading)
<h1>​</h1>​
myHeading.innerText = "I am your HEADER"
'I am your HEADER'
myHeading.innerText = "Cucumber 🥒"
'Cucumber 🥒'
document.ondblclick = () => {
    console.log("HI")
}
() => {
    console.log("HI")
}
document.onclick = () => {
    console.log("HI")
}
() => {
    console.log("HI")
}
2VM4926:2 HI
document.body.innerText=''
''
2VM4926:2 HI
myHeading.innerText = "Cucumber 🥒"
'Cucumber 🥒'
const myHeading = document.createElement('h1')
undefined
myHeading.innerText = "Cucumber 🥒"
'Cucumber 🥒'
document.body.appendChild(myHeading)
<h1>​3:9:32:217​</h1>​
VM4926:2 HI
const now = new Date()
undefined
myHeading.innerText = `${now.getHours}:${now.getMinutes}:${now.getSeconds}:${now.getMilliseconds}`
'function getHours() { [native code] }:function getMinutes() { [native code] }:function getSeconds() { [native code] }:function getMilliseconds() { [native code] }'
myHeading.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`
'3:9:32:217'
VM4926:2 HI
myHeading.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`
'3:9:32:217'
myHeading.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`
'3:9:32:217'