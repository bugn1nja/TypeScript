function hello() {
    console.log("Hi");
}

setTimeout(hello, 2000); // 1 second later, it will print "Hello World"

console.log("This will print first"); // This will print before "Hello World" because setTimeout is asynchronous

setTimeout(() => {
    console.log("This will print 3 seconds after the first message");
}, 3000); // This will print after 1 seconds

console.log("Mujaddid")

let Counter = 1;
function getdata(dataID, nextdata) {
    setTimeout(() => {
        console.log(" Data ID " + Counter + " : " + dataID);
        Counter++;
        if (nextdata) {
            nextdata();
        }
    }, 4000);
    
}
getdata(243 , () => {
    getdata(489, () => {
        getdata(554);
    });
});