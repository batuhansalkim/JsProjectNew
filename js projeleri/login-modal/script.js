var modalOpen = document.querySelector("#open");
var modal = document.querySelector(".modal");
var modalForm = document.querySelector("#form");
var modalClose = document.querySelector("#close");
modalOpen.addEventListener("click", () => {
  console.log("clicked open button");
  modal.style.display = "flex";
  setTimeout(() => {
    modalForm.style.left = "50%";
  }, 200);
});

modalClose.addEventListener("click", () => {
  console.log("clicked close button");
  modal.style.display = "none";
});


