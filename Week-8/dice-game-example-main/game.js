document.querySelector("#rollButton").addEventListener("click", event => {
    const images = document.querySelectorAll("img");
    images.forEach(image => {
        if(isDieUnlocked(image)) {
            image.src = "./assets/die_rolling.gif";
        }
    });

    setTimeout(() => {
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                image.src = `assets/white_dice_${Math.floor(Math.random() * 6) + 1}.gif`;
            }
        });
    }, 500);
});

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll('#gameboard input');
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}