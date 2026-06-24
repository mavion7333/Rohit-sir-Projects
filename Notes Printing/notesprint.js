let note = document.querySelector("#write");
let colorSelector = document.querySelector("#choosecolor");
let colorBtn = document.querySelector("#colorbtn");
let submit = document.querySelector("#addnote");
let outnote = document.querySelector(".outnote");



    
submit.addEventListener("click", function () {

    let newNote = document.createElement("div");
    // newNote.classList.add(".newnote");
    let para = document.createElement("p");
    para.classList.add("para")
    para.innerText = note.value;


    // Cross button styling:
    let CrossBtn = document.createElement("button");
    CrossBtn.innerText = "X";
    CrossBtn.style.position = "absolute";
    CrossBtn.style.top = "5px";
    CrossBtn.style.right = "5px";
    CrossBtn.style.border = "none";
    CrossBtn.style.background = "transparent";
    CrossBtn.style.color = "white";

    CrossBtn.addEventListener("click", function () {
        newNote.remove();
    });
    note.value = "";

    // edit button style:
    let editBtn = document.createElement("button");
    editBtn.classList.add("editbtn")
    editBtn.innerText = "📝";
    

    editBtn.addEventListener("click", function () {
        para.contentEditable = true;
        para.focus();
    });



    // para.addEventListener("blur", function () {
    //     para.contentEditable = false;
    // });


    // date:
    let dateInPara = document.createElement("small");
    let date = new Date();
    dateInPara.innerText = date.toLocaleString();

    // Note style:
    newNote.classList.add("newNote")
    newNote.style.position = "relative";
    newNote.style.height = "auto";
    newNote.style.width = "160px";
    newNote.style.padding = "10px";
    newNote.style.margin = "10px";
    newNote.style.color = "white";
    newNote.style.backgroundColor = colorSelector.value;
    newNote.style.borderRadius = "10px";

    // printing on note:
    newNote.append(para);
    newNote.append(CrossBtn);
    newNote.append(editBtn);
    newNote.append(dateInPara);
    outnote.append(newNote);

});
//  editBtn.addEventListener("click", function () {
//         note.value = para.innerText;
//         para.innerText = "";
//     })






