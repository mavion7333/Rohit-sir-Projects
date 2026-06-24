let input = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector("h2");
output.classList.add("outputcs");



button.addEventListener("click", function () {
    let number = Number(input.value);

    output.innerHTML = "";

    for (let i = number - 1; i >= 1; i--) {
        output.innerHTML += i;
    }
});

