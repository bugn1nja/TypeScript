// Api in JavaScript
// API stand for Application Programming Interface. It is a set of rules and protocols for building and interacting with software applications. An API defines the methods and data structures that developers can use to interact with the software component, whether it's a web service, library, or operating system.

// Fatching Api Syntax
// The fetch() method is used to make HTTP requests to a server and retrieve data. It returns a Promise that resolves to the Response object representing the response to the request.

 // await is use to wait for the Promise returned by fetch() to resolve before proceeding with the next line of code. This allows you to handle the response data once it is available.


// This is api result for Bitcoin Price in USD
 const url = "https://api.coinbase.com/v2/prices/BTC-USD/spot";

async function getBitcoinPrice() {
   const result = await fetch(url);
   const data = await result.json(); 
   console.log("Bitcoin Price in South Korean Won : ₩",data.data.amount/0.00066);
}

getBitcoinPrice(); 

// This is api result for Live Time in Seoul, South Korea

const url2 = "https://timeapi.io/api/time/current/zone?timeZone=Asia/Seoul";

async function getTime() {
    const result = await fetch(url2);
    const data = await result.json();
    console.log("Current Time in Seoul, South Korea : ", data.dateTime);
}

getTime();


// Try & Catch
// The try...catch statement is used to handle exceptions in JavaScript. It allows you to test a block of code for errors and handle them gracefully without crashing the program.

const url3 = "https://api.coinbase.com/v2/prices/BTC-BDT/spot";

async function GetBitcoinPrice() {
    try {
        const result = await fetch(url3);
        const data = await result.json();
        if (result.status !== 200) {
            console.log("Bitcoin Price in Bangladeshi Taka : ", data.data.amount);
        }
        else {
            console.log("Server Error: ", data);
        }
    }
    catch (error) {
        console.log("Network Error: ", error);
    }

}

GetBitcoinPrice();
