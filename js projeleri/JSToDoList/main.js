//Yeni oluşturulacak liste elemanı ve buton nesneleri için değişkenler
var eleman,btnSil,btnTamam,girilen,secilen;

function listeyeEkle()
{
    girilen=document.getElementById("txtYapilacaklar").value;
    //Eğer giriş yapılan kutu boş bırakılmazsa
    if(girilen!="")
    {
        //Yeni bir liste elemanı türetip listeye ekle,içine text kutusuna yazılan değeri aktar
        eleman=document.createElement("li");
        document.getElementById("listeYapilacaklar").appendChild(eleman);
        eleman.innerHTML=girilen;

        //Eklenen yeni elamanın altına resim olarak tamamla butonu ekle ve öznitelik,olay tanımlamalarını yap
        btnTamam=document.createElement("img");
        eleman.appendChild(btnTamam);
        btnTamam.setAttribute("src","images/tamam.png");
        btnTamam.setAttribute("id","btnTamam");
        btnTamam.addEventListener("click",tamamla);

        //Eklenen yeni elamanın altına resim olarak sil butonu ekle ve öznitelik,olay tanımlamalarını yap
        btnSil=document.createElement("img");
        eleman.appendChild(btnSil);
        btnSil.setAttribute("src","images/sil.png");
        btnSil.setAttribute("id","btnSil");
        btnSil.addEventListener("click",sil);
    }
    else alert("Boş bırakmayınız!");

}
function sil()
{
    //O anda tıklanan aktif butonun kapsayıcısını yani liste elemanını sil
    secilen=event.currentTarget.parentNode;
    secilen.remove();
    
}

function tamamla()
{
    //O anda tıklanan aktif butonun kapsayıcısını yani liste elemanını tamamlananlar listesine taşı
    //Taşıdıktan sonra tamamla butonunu gizle,sil olayını ekle
    eleman=document.createElement("li");
    document.getElementById("listeTamamlananlar").appendChild(eleman);
    secilen=event.currentTarget.parentNode;
    secilen.childNodes[1].style.display="none";
    secilen.childNodes[2].setAttribute("onclick","sil();");
    eleman.innerHTML=secilen.innerHTML;

    sil();

}



