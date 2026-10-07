let dialog = document.querySelector("dialog");
let gallery = document.querySelector(".gallery");
let dialogImage = dialog.querySelector("img");
const closeButton = dialog.querySelector('.close-viewer');

gallery.addEventListener("click", function(event) {
    //swap src of img
    if (event.target.src !== undefined) {
        dialogImage.src = event.target.src.replace("-sm", "-full");

        // showModal is just a thing that dialog can do
        dialog.showModal();
    }
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

// Close modal if clicking outside the image
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});