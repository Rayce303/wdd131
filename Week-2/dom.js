// manipulate DOM with javascript

// grab the h1 from the page
let heading = document.querySelector("h1");
// let heading2 = document.querySelectorAll("h1");

console.log(heading);

// change text of the element
heading.textContent = "I changed that heading oh yeah.";

// change color
heading.style.color = "lightseagreen";

// change some other style yaaaay dude
heading.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

// These two do the same
document.getElementById("topics").style.color = "red"; //just IDs
document.querySelector("#topics").style.color = "red"; // select anything, but specify it's an ID in parenthesis

let bleepbloop = document.querySelector("img");
console.log(bleepbloop.getAttribute("src"));
bleepbloop.setAttribute("src", "https://www.seriouseats.com/thmb/_nSWyhg_GmvdjUwMMvX7KG6lYNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg")
