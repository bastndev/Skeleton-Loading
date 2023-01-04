const placeholders = document.querySelectorAll(".placeholder");

window.setTimeout(removePlaceholder, 2500);
function removePlaceholder(){
    placeholders.forEach((element)=>{
        element.classList.remove("placeholder");
    });
}
