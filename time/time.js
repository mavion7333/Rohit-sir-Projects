let button = document.querySelector(".btn");
let button2 = document.querySelector(".btn2")
let output = document.querySelector(".output");
let Name = document.querySelector(".name");
let btnClicked = document.querySelector("input");


let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");
let solution = document.querySelector(".solution")

let add = document.querySelector(".plus");
let subtract = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");


button.addEventListener("click", function () {
    setInterval(() => {
        const date = new Date();
        const mon = date.getMonth() + 1;
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        const year = date.getFullYear();
        const date2 = date.getDate();

        output.innerHTML = ` ${date2}/${mon}/${year}   ""   ${hour}:${min}:${sec}`;
    }, 1000)
});

button2.addEventListener("click", () => {
    const showName = btnClicked.value;
    Name.innerHTML = ` This Button Is clicked By ${showName}`;
});

add.addEventListener("click", () => {
    let resultADD = Number(num1.value) + Number(num2.value);
    solution.innerHTML = `Added value = ${resultADD}`;
});

subtract.addEventListener("click", () => {
    let resultSUb = Number(num1.value) - Number(num2.value);
    solution.innerHTML = `subtracted value = ${resultSUb}`;  
});

multiply.addEventListener("click", () => {
    let resultMultiply = Number(num1.value) * Number(num2.value);
    solution.innerHTML = `Muliply value = ${resultMultiply}`;
});

divide.addEventListener("click", () => {
    let resultDivide = Number(num1.value) / Number(num2.value);
    solution.innerHTML = `Devided value = ${resultDivide}`;
});



// const buttons = document.querySelectorAll(".plus, .minus, .multiply, .divide");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         const numOne = Number(num1.value);
//         const numTwo = Number(num2.value);

//         let result;

//         if (button.classList.contains("plus")) {
//             result = numOne + numTwo;
//         } else if (button.classList.contains("minus")) {
//             result = numOne - numTwo;
//         } else if (button.classList.contains("multiply")) {
//             result = numOne * numTwo;
//         } else if (button.classList.contains("divide")) {
//             result = numOne / numTwo;
//         }

//         solution.textContent = `Result = ${result}`;
//     });
// });





