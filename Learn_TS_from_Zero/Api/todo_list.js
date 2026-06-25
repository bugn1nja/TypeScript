// Input Section

const input = document.createElement('input')
input.placeholder = 'Add new task...!'
document.body.appendChild('input')

// Button Section

const button = document.createElement('button')
button.innerText = 'Add'
document.body.appendChild('button')

button.addEventListener('click' , () => {
    console.log("Button is clicked")
})