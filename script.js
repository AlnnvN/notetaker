const textArea = document.getElementById("text-area");
const saveButton = document.getElementById("save-button");
const displayDiv = document.getElementById("display-div");
const body1 = document.getElementsByTagName("body");


saveButton.addEventListener('click',()=>{//save button - create new note
    
    if(textArea.value != "" && textArea.value[0] != " ")
    createNewNote(textArea.value);
})

textArea.addEventListener('keydown', e=>{//auto resize
    autoResize();
});

textArea.addEventListener('keyup', e=>{//auto resize
    autoResize();
});

//functions - global

function createNewNote(input){

    var noteDiv, buttonDiv;

    createNoteDiv();
    createTitle();
    createText();
    createButtonDiv();
    createDetailButton();
    createDeleteButton();

    //functions
    function createDeleteButton() {
        let delBtn = document.createElement("button");
        delBtn.className = "del-button display-btn btn";
        delBtn.appendChild(document.createTextNode("X"));
        buttonDiv.appendChild(delBtn);

        delBtn.addEventListener('click', () => {
            delBtn.parentElement.parentElement.remove();
        });
    }

    function createDetailButton() {
        let detailBtn = document.createElement("button");
        detailBtn.className = "detail-button display-btn btn";
        detailBtn.appendChild(document.createTextNode("View Detail"));
        buttonDiv.appendChild(detailBtn);

        detailBtn.addEventListener('click', () => {
            showBackground();
            showDetails();
        });

        function showDetails() {

        }

        function showBackground() {
            let background1 = document.createElement("div");
            background1.id = "modal-div";
            document.body.appendChild(background1);
            console.log("working");
        }
    }

    function createButtonDiv() {
        buttonDiv = document.createElement("div"); //creates div for buttons
        buttonDiv.classList.add("display-btn-div");
        noteDiv.appendChild(buttonDiv); //appends buttons' div to note div
    }

    function createText() {
        let text = document.createElement("p"); //creates paragraph
        text.innerHTML = input; //takes input parameter from user
        noteDiv.appendChild(text);
    }

    function createTitle() {
        let title = document.createElement("h3"); //new title
        title.classList.add("note-title"); //classes title
        title.innerHTML = "Note " + displayDiv.children.length; //changes title name (dynamic number)
        noteDiv.appendChild(title);
    }

    function createNoteDiv() {
        noteDiv = document.createElement("div"); //creates note div
        noteDiv.classList.add("note-div"); //classes note div
        displayDiv.appendChild(noteDiv); //appends note div to display div
    }
}



function autoResize(){
    
    textArea.style.paddingBottom = "0px";
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight+"px";
    textArea.parentElement.style.height = textArea.scrollHeight+"px";
    return;
}

