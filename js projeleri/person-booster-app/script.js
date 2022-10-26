let sayi = document.getElementById("sayi"); 
let Kaydedilen = document.getElementById("pKaydedilen");
console.log("pKaydedilen")
let sayiArtir = 0;

function baturp(){
    sayiArtir +=1;

    sayi.innerText = sayiArtir;
}

function KaydetFonksiyonu(){
    Kaydedilen.innerText += sayiArtir + "-";
    sayiArtir=0;
}