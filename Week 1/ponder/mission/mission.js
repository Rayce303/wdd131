
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let background = document.querySelector('body');
let title = document.querySelector('h1')
let text = document.querySelector('p')
let list = document.querySelector('ol')

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.setAttribute("src", "./logo-dark.png");
        background.style.backgroundColor = "black";
        title.style.color = "white";
        text.style.color = "white";
        list.style.color = "white";
    } else {
        logo.setAttribute("src", "./image.png");
        background.style.backgroundColor = "white";
        title.style.color = "black";
        text.style.color = "black";
        list.style.color = "black";
    }
}           
                    