let addBtn = document.getElementById("addButon");
let inputField = document.getElementById("inputFied");
let todoContainer = document.getElementById("todoContainer"); 


addBtn.addEventListener("click",()=>{
    var paragraf = document.createElement("li");
    paragraf.innerHTML=inputField.value;
    todoContainer.appendChild(paragraf);
    inputField.innerHTML="";
})












