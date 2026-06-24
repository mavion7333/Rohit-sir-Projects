let button = document.querySelector(".btn");
let output = document.querySelector(".output");

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
