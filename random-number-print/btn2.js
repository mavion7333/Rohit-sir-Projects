let button = document.querySelector("button");
let para = document.querySelector(".para");
let heading = document.querySelector(".heading");


button.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 20);
    para.innerText = randomNumber;

    setTimeout(() => { heading.innerHTML = "Time's Up" }, randomNumber * 1000)
});

