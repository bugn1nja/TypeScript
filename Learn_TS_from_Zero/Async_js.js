

// Promise Example......................................

const getPromise = () => {
    return new Promise((resolve, reject) => {
    // console.log("Promise is pending...");
    // resolve("Promise is resolved successfully!");
    reject("Promise is rejected!");
});
};

let promise = getPromise();

// promise.then((data) => {
//     console.log("Order is placed successfully!");
// });
// promise.catch((error) => {
//     // console.log("Your order is cancelled! ");
// });


// Promise Chianing

let Data_1 = "Username is correct!";
let Data_2 = "Password is correct!";

function asyncFunctoin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(">> " + Data_1);
            resolve("Data_1 is resolved successfully!");
        }, 3000);
    });
}

function asyncFunctoin2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(">> " + Data_2);
            resolve("Data_2 is resolved successfully!");
        }, 3000);
    });
}
console.log("Featching username from server...");
asyncFunctoin().then((res) => {
    // console.log(res);
    console.log("Featching password from server...");
    asyncFunctoin2().then((res) => {
        // console.log(res);
    });
}
);
