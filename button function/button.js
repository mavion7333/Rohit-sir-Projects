const wrapper = document.querySelector("#wrapper");
const h2 = document.querySelector("h2");
createButtons()


function createButtons() {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i <= 100; i++) {
        const btn = document.createElement("button");
        btn.innerText = "Button " + i;
        btn.classList.add("custom-btn");
        fragment.append(btn)
    }
    wrapper.append(fragment);
}

wrapper.addEventListener("click", prtnitButtonText)
function prtnitButtonText(e) {
    if (e.target.nodeName === "BUTTON") {
        h2.innerText = "You Clicked " + e.target.innerText
    }
}
document.body.style.backgroundColor = "purple";


