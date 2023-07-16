const button = document.querySelector("button");
function greet() {
    // prompt(): textbox with popup dialog box and stores input
    const askName = prompt("What is your name?");
    // alert(): displays text in popup dialog box
    alert(`Hello ${askName}, nice to see you!`);
}
button.addEventListener("click", greet);
let variableName = "hey";