function yillar(){

    var tarih = new Date();
    var yil = tarih.getFullYear();

    for(var i=yil;i>=1950;i--){
       var secenek=document.createElement("option");
       document.getElementById("aracYili").options.add(secenek);
       secenek.value=i;
       secenek.text=i;
    }
}

function vergiHesapla(){
    var aracTipi,aracGucu,aracYili;
    var odenecekVergi;
    var i;

    //1. döngü bloğu araç tipi seçimini yaptık
    for(i=0; i<document.getElementById("aracTipi").length; i++)
    {
        if(document.getElementById("aracTipi").options[i].selected){
            aracTipi=document.getElementById("aracTipi").options[i].value;
        }
        
    }

    //2. döngü bloğu araç gücü seçimini yaptık
    for(i=0; i<document.getElementsByName("motorGucu").length; i++)
    {
        if(document.getElementsByName("motorGucu")[i].checked){
            aracGucu=document.getElementsByName("motorGucu")[i].value;
        }
        console.log(aracGucu);
    }


    //3.döngü bloğu-araç yılını seçimini alma
    for(i=0; i<document.getElementById("aracYili").length; i++)
    {
        if(document.getElementById("aracYili").options[i].selected){
            aracYili=document.getElementById("aracYili").options[i].value;
        }
        
    }




    // 1.kontrol bloğu araç tipine göre vergi alt sınırını belirleme

    if(aracTipi=="motorsiklet"){
        odenecekVergi=300;
    }
    else if(aracTipi="otomobil"){
        odenecekVergi = 600;
    }

    //2. kontrol bloğu araç gücüne göre eklenecek tutarı belirleme
    if(aracGucu=="1000cc-1600cc")
    {
        odenecekVergi=odenecekVergi+75;
    }
    else if(aracGucu=="1601cc-2000cc")
    {
        odenecekVergi=odenecekVergi+150;
    }
    else if(aracGucu=="2001cc")
    {
        odenecekVergi=odenecekVergi+200;
    }
    


    if(aracYili<=2005){
        odenecekVergi = odenecekVergi - 50;
    }
    else{
        odenecekVergi = odenecekVergi + 75;
    }

    document.getElementById("sonuc").innerHTML = " Ödemeniz gereken vergi tutarı : " + odenecekVergi;
}