// Declare a variable
let yourName = "fred";

// Print it
console.log(yourName);

// constants can't be changed once set
const otherName = "Marvin";

// scope
if (yourName == "fred") {
    // new scope
    console.log(otherName);
    let iceCream = "Mint";
}

// This won't happen
// console.log(iceCream);

// get h1 from DOM and make it green
document.querySelector("h1").style.color = "green";