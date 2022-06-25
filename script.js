const textarea = document.getElementById("text-area")


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
    return;
}