let ekleBtn = document.getElementById("addButon");
let gir = document.getElementById("inputField");
let eklemetin = document.getElementById("todoContainer");


ekleBtn.addEventListener("click",()=>{
    var metin = document.createElement("li");
    metin.innerHTML=gir.value;
    eklemetin.appendChild(metin);
})



// let addBtn = document.getElementById("addButon");
// let inputField = document.getElementById("inputField");
// let todoContainer = document.getElementById("todoContainer");

// addBtn.addEventListener("click",()=>{
//     var paragraf = document.createElement("li");
//     paragraf.innerHTML=inputField.value;
//     todoContainer.appendChild(paragraf);
// })





