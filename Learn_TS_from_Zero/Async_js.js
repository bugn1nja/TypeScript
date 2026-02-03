// Async JavaScript

// Asynchronous JavaScript allows you to perform tasks without blocking the main thread, enabling smoother user experiences. Here are some common ways to handle asynchronous operations in JavaScript:

// call

function setUsername(username) {
    // DB call simulation
    this.username = username;
}

function creatuser(username, mail, password) {
    setUsername(username);
    this.mail = mail;
    this.password = password;
}

console.log(new creatuser("Mujaddid", "mujaddid@fb.com", "12345"));


