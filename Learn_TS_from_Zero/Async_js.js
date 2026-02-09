function hello() {
    console.log("Hello World");
}

setTimeout(hello, 2000); // 2 seconds later, it will print "Hello World"

console.log("This will print first"); // This will print before "Hello World" because setTimeout is asynchronous

setTimeout(() => {
    console.log("This will print 5 seconds after the first message");
}, 5000); // This will print after 5 seconds

console.log("Mujaddid")

