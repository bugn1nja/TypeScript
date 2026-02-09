

// Promise Example......................................

const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("Promise is pending...");
    // resolve("Promise is resolved successfully!");
    reject("Promise is rejected!");
});
};

let promise = getPromise();

promise.then((data) => {
    console.log("Order is placed successfully!");
});
promise.catch((error) => {
    console.log("Your order is cancelled! ");
});
