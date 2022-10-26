let vize = document.getElementById("vize");
let final = document.getElementById("final");
let btnHesapla = document.getElementById("hesapla");
let ortalama = document.getElementById("ortalama");
let harfNot = document.getElementById("orharfNottalama");

btnHesapla.addEventListener("click",()=>{
    let vizeTxt = vize.value;
    let finaTxt = final.value;
    vize.value="";
    final.value="";
    let sonuc =Math.round((vizeTxt*0.30) + (finaTxt*0.70))
    
    if(sonuc>=90 && sonuc<=100){
        ortalama.innerText="ortalamanız : "+sonuc;
        harfNot.innerText="AA";
        harfNot.style.backgroundColor="lightgreen";
        harfNot.style.color="black";
    }
    else if(sonuc>=80 && sonuc<=89){
        ortalama.innerText = "ortalamanız : "+ sonuc;
        harfNot.innerText="BA";
        harfNot.style.backgroundColor="lightgreen";
        harfNot.style.color="black";
    }
    else if(sonuc>=75 && sonuc <=79){
        ortalama.innerText="ortalamanız : " +sonuc;
        harfNot.innerText = "BB";
        harfNot.style.backgroundColor="lightgreen";
        harfNot.style.color="black";
    }
    else if(sonuc>=70 && sonuc<=74){
        ortalama.innerText="Ortalamanız : " + sonuc;
        harfNot.innerText = "CB";
        harfNot.style.backgroundColor= "lightgreen";
        harfNot.style.color="black";
    }
    else if(sonuc>=60 && sonuc<=69){
        ortalama.innerText="Ortalamanız : " + sonuc;
        harfNot.innerText="CC";
        harfNot.style.backgroundColor="lightgreen";
        harfNot.style.color="black";
    }
    else if(sonuc>=50 && sonuc<=59){
        ortalama.innerText="Ortalamanız : " + sonuc;
        harfNot.innerText="DC";
        harfNot.style.backgroundColor="red";
        harfNot.style.color="black";
    }
    else if(sonuc>=50 && sonuc<=59){
        ortalama.innerText="Ortalamanız : " + sonuc;
        harfNot.innerText="DD";
        harfNot.style.backgroundColor="red";
        harfNot.style.color="black";
    }
    else if(sonuc>=30 && sonuc<=39){
        ortalama.innerText="Ortalamanız : " + sonuc;
        harfNot.innerText="FD";
        harfNot.style.backgroundColor="crimson";
        harfNot.style.color="black";
    }
    else{
        ortalama.innerText="Ortalamanız : " + sonuc;
        harfNot.innerText="FF";
        harfNot.style.backgroundColor="crimson";
        harfNot.style.color="black";
    }
    
})
document.getElementById("vize").innerHTML ="";
document.getElementById("final").innerHTML="";













