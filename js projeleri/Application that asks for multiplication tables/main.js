
const num1  =Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const soru  = document.getElementById("question");

const inputEl  =document.getElementById("input");
const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score =JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreEl.innerText=`score : ${score}`

soru.innerText = `${num1} ile ${num2} çarpımı kaçtır ?`


const dogruCevap = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value;
    //console.log(userAns, typeof userAns);
    if(userAns === dogruCevap){
        score +=10;
        updateLocalStroge();
        console.log(score);
    }else{
        score -=5;
        updateLocalStroge();
        console.log(score);
    }

})

if(score<0){
    alert("Kaybettiniz");
    
}

function updateLocalStroge(){
    localStorage.setItem("score",JSON.stringify(score));
}


