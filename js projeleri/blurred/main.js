const container = document.querySelector(".container");

const button = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");

const kapatmaiconu = document.querySelector(".close-icon");



button.addEventListener("click",()=>{
    container.classList.add("active");
    popupContainerEl.classList.remove("active");
});


kapatmaiconu.addEventListener("click",()=>{
    container.classList.remove("active");
    popupContainerEl.classList.add("active");
})









