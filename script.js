const textArea = document.getElementById("text-area");
const saveButton = document.getElementById("save-button");
const displayDiv = document.getElementById("display-div");

saveButton.addEventListener('click',()=>{
    
    if(textArea.value != "" && textArea.value[0] != " ")
    createNewNote(textArea.value);
})



textArea.addEventListener('keydown', e=>{
    autoResize();
});

textArea.addEventListener('keyup', e=>{
    autoResize();
});

//functions

function createNewNote(input){
    let noteDiv = document.createElement("div"); //creates note div
    noteDiv.classList.add("note-div");//classes note div
    displayDiv.appendChild(noteDiv);//appends note div to display div

    let title = document.createElement("h3");//new title
    title.classList.add("note-title");//classes title
    title.innerHTML = "Note " + displayDiv.children.length;//changes title name (dynamic number)
    noteDiv.appendChild(title);//appends title as note div's first child

    let text = document.createElement("p");//creates paragraph
    text.innerHTML = input;//takes input parameter from user
    noteDiv.appendChild(text);//appends paragraph to note div

    let buttonDiv = document.createElement("div");//creates div for buttons
    buttonDiv.classList.add("display-btn-div");
    noteDiv.appendChild(buttonDiv);//appends buttons' div to note div

    let detailBtn = document.createElement("button");
    detailBtn.className = "detail-button display-btn btn";
    detailBtn.appendChild(document.createTextNode("View Detail"));
    buttonDiv.appendChild(detailBtn);

    let delBtn = document.createElement("button");
    delBtn.className = "del-button display-btn btn";
    delBtn.appendChild(document.createTextNode("X"));
    buttonDiv.appendChild(delBtn);

    delBtn.addEventListener('click',()=>{
        delBtn.parentElement.parentElement.remove();
    })

    return;
}

function autoResize(){
    
    textArea.style.paddingBottom = "0px";
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight+"px";
    textArea.parentElement.style.height = textArea.scrollHeight+"px";
    return;
}

