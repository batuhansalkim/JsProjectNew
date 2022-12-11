let dakika = 0;
let saniye = 0;


let getSeconds = document.querySelector(".second");
let getTens = document.querySelector(".tens");


let btnStart = document.querySelector(".btnStart");
let btnReset = document.querySelector(".btnReset");
let btnStop = document.querySelector(".btnStop");


btnStart.addEventListener("click",()=>{
    interval = setInterval(timer,10)
})

btnStop.addEventListener("click",()=>{
    clearInterval(interval);
})
btnReset.addEventListener("click",()=>{
    saniye = "00";
    dakika="00";

    getSeconds.innerHTML=saniye;
    getTens.innerHTML=dakika;
})

function timer(){
    saniye++;
    if(saniye<9){
        getTens.innerHTML="0"+saniye;
    }
    if(saniye>9){
        getTens.innerHTML = saniye;
    }
    if(saniye>99){

        dakika++;
        getSeconds.innerHTML="0"+dakika;
        saniye=0;
        getTens.innerHTML="0"+saniye;
    }
    if(dakika>9){
        getSeconds.innerHTML = dakika;
    }
}





















