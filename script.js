const textarea = document.getElementById("text-area");
const button1 = document.getElementById("save-button");

button1.addEventListener('click',()=>{
    
})

textarea.addEventListener('keydown', e=>{
    autoResize();
});

textarea.addEventListener('keyup', e=>{
    autoResize();
});

function autoResize(){
    
    textarea.style.paddingBottom = "0px";
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight+"px";
    textarea.parentElement.style.height = textarea.scrollHeight+"px";
    return;
}