let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let selectCountry = document.querySelector("#country");
let score = document.querySelector(".score");
let addBtn = document.querySelector(".addbtn");
let output = document.querySelector("#output");

function sortPlayers() {
    let players = Array.from(output.children);

    players.sort((a, b) => {
        let scoreA = Number(a.children[3].textContent);
        let scoreB = Number(b.children[3].textContent);

        return scoreA - scoreB;
    });

    output.innerHTML = "";

    players.forEach(player => {
        output.appendChild(player);
    });
}


addBtn.addEventListener("click", function () {

    let mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");

    let fName = document.createElement("p");
    let lName = document.createElement("p");
    let countryName = document.createElement("p");
    let scoreDiv = document.createElement("p");
    let plus = document.createElement("button");
    let minus = document.createElement("button");
    let deletField = document.createElement("button");
    let editField = document.createElement("button")

    fName.textContent = firstName.value;
    lName.textContent = lastName.value;
    countryName.textContent = selectCountry.value;
    scoreDiv.textContent = score.value;
    editField.textContent = "edit"

    plus.textContent = "+5";
    minus.textContent = "-5";
    deletField.textContent = "Delete";

    mainDiv.append(
        fName,
        lName,
        countryName,
        scoreDiv,
        minus,
        plus,
        deletField,
        editField
    );

    output.append(mainDiv);

    // Sort after adding player
    sortPlayers();

    firstName.value = "";
    lastName.value = "";
    selectCountry.value = "Select Country";
    score.value = "";

    plus.addEventListener("click", () => {
        scoreDiv.textContent = Number(scoreDiv.textContent) + 5;
        sortPlayers();
    });

    minus.addEventListener("click", () => {
        scoreDiv.textContent = Number(scoreDiv.textContent) - 5;
        sortPlayers();
    });

    deletField.addEventListener("click", () => {
        mainDiv.remove();
    });

    editField.addEventListener("click", function () {
        mainDiv.contentEditable = true;
    });

});

