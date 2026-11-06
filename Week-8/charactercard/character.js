const card = {
    name : "Verge",
    class : "Sentient Computer Virus",
    level : 19,
    health : 100,
    image : "./verge.jpg",
    attacked : function() {
        this.health = this.health - 20;
    },
    levelup : function() {
        this.level = this.level + 1;
    }
}

document.getElementById("htmlGoesHere").innerHTML = `
    <img class="image" src="${card.image}" alt="An image of a futuristic villain">
    <h1 class="name">${card.name}</h1>
    <div class="stats">
        <p id="class"><strong>Class: </strong>${card.class}</p>
        <p id="level"><strong>Level: </strong>${card.level}</p>
        <p id="health"><strong>Health: </strong>${card.health}</p>
    </div>
`;

document.querySelector("#attack").addEventListener("click", () => {
    card.attacked();
    document.getElementById("health").innerHTML =`
        <strong>Health: </strong>${card.health}
    `;

    if (card.health <= 0) {
        document.getElementById("death-dialog").showModal();
    }
});

document.querySelector("#lvl").addEventListener("click", () => {
    card.levelup();
    document.getElementById("level").innerHTML = `
        <p id="level"><strong>Level: </strong>${card.level}</p>
    `;
});