const inputDiv = document.querySelector(".inputDiv");
const input = document.querySelector("input");
const button = document.querySelector("button");
const contentDiv = document.querySelector(".contentDiv");


var calculate = 0;
button.addEventListener("click",go);

input.addEventListener("keyup",function(e){

    if(e.keyCode==13){
        go();
    }
});


function go(){
    if(input.value !=""){
        calculate++;
        var paragraf = document.createElement("p");
        var deleteButton = document.createElement("div");
        deleteButton.innerText="Sil";
        deleteButton.style.background="black";
        deleteButton.style.color="white";
        deleteButton.classList.add("deleteButton")
        paragraf.innerText= calculate + " - " + input.value;
        contentDiv.appendChild(paragraf);
        paragraf.appendChild(deleteButton);
        input.value="";


        deleteButton.addEventListener("click",function(){
            calculate--;
            contentDiv.removeChild(paragraf);
        });



    }else{
        alert("Boş Değer Hatası Bir Şeyler ekleyiniz")
    }

    
}









