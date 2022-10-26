//Girdi değişkenleri
var urunTipi, urunSecimi, urunnSayisi, urunTaksidi; 

//Çıktı değişkenleri
var araToplam, ödenecekToplamTutar,kargoUcreti;

//Global döngü değişkeni
var i;

//Global nesne değişkenleri
var liste,secenek;

//Dizi tipindeki değişkenler
var erkekParfumleri=["Celvin Clein",100,"Lacoste",120,"Axe",30,"First Class",50];
var kadinParfumleri=["Burbery",150,"Avon",80,"She",60,"Nina Ricci",130];


function urunleriGetir(){

    document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

    for(i=0; i<document.getElementsByName("urunTipi").length; i++){
        if(document.getElementsByName("urunTipi")[i].checked){
            urunTipi=document.getElementsByName("urunTipi")[i].value;
        }
    }
    console.log(urunTipi);
}

function urunleriGetir(){
    for(i=0; i<document.getElementsByName("urunTipi").length; i++){
        if(document.getElementsByName("urunTipi")[i].checked){
            urunTipi = document.getElementsByName("urunTipi")[i].value;
        }
    }

    if(urunTipi == "E"){
        for(i=0; i<erkekParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=erkekParfumleri[i];
            secenek.value= erkekParfumleri[i+1];
        }
    }else if(urunTipi=="K"){
        for(i=0; i<kadinParfumleri.length;i=i+2)
        {
            secenek=document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text=kadinParfumleri[i];
            secenek.value= kadinParfumleri[i+1];
        }

    }
}
