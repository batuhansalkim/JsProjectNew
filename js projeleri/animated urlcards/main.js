
const panels = document.querySelectorAll(".panel");


panels.forEach(panel =>{
    panel.addEventListener("click", ()=>{
        removective();
        panel.classList.add("active")
    });
});

function removective(){
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}


